import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { getXTickCount, getYTickCount, createXTicks, createYTicks } from '../internal/components/cartesian-chart/ticks';
import ChartPlot from '../internal/components/chart-plot';
import AxisLabel from '../internal/components/cartesian-chart/axis-label';
import LabelsMeasure from '../internal/components/cartesian-chart/labels-measure';
import LeftLabels from '../internal/components/cartesian-chart/left-labels';
import BottomLabels, { useBottomLabels } from '../internal/components/cartesian-chart/bottom-labels';
import VerticalGridLines from '../internal/components/cartesian-chart/vertical-grid-lines';
import EmphasizedBaseline from '../internal/components/cartesian-chart/emphasized-baseline';
import HighlightedPoint from '../internal/components/cartesian-chart/highlighted-point';
import VerticalMarker from '../internal/components/cartesian-chart/vertical-marker';
import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
import ChartPopover from './chart-popover';
import { computeDomainX, computeDomainY } from './domain';
import { isXThreshold } from './utils';
import makeScaledSeries from './make-scaled-series';
import makeScaledBarGroups from './make-scaled-bar-groups';
import formatHighlighted from './format-highlighted';
import DataSeries from './data-series';
import BarGroups from './bar-groups';
import { useMouseHover } from './hooks/use-mouse-hover';
import { useNavigation } from './hooks/use-navigation';
import { usePopover } from './hooks/use-popover';
import useContainerWidth from '../internal/utils/use-container-width';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { nodeBelongs } from '../internal/utils/node-belongs';
import { CartesianChartContainer } from '../internal/components/cartesian-chart/chart-container';
import { useHeightMeasure } from '../internal/hooks/container-queries/use-height-measure';
const LEFT_LABELS_MARGIN = 16;
const BOTTOM_LABELS_OFFSET = 12;
export default function ChartContainer(_a) {
    var _b, _c;
    var { fitHeight, height: explicitPlotHeight, series, visibleSeries, highlightedSeries, onHighlightChange, highlightedPoint, setHighlightedPoint, highlightedGroupIndex, setHighlightedGroupIndex, detailPopoverFooter, detailPopoverSize = 'medium', stackedBars = false, horizontalBars = false, xScaleType, yScaleType, xTickFormatter, yTickFormatter, emphasizeBaselineAxis, xTitle, yTitle, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings = {}, plotContainerRef } = _a, props = __rest(_a, ["fitHeight", "height", "series", "visibleSeries", "highlightedSeries", "onHighlightChange", "highlightedPoint", "setHighlightedPoint", "highlightedGroupIndex", "setHighlightedGroupIndex", "detailPopoverFooter", "detailPopoverSize", "stackedBars", "horizontalBars", "xScaleType", "yScaleType", "xTickFormatter", "yTickFormatter", "emphasizeBaselineAxis", "xTitle", "yTitle", "ariaLabel", "ariaLabelledby", "ariaDescription", "i18nStrings", "plotContainerRef"]);
    const plotRef = useRef(null);
    const verticalMarkerRef = useRef(null);
    const [leftLabelsWidth, setLeftLabelsWidth] = useState(0);
    const [verticalMarkerX, setVerticalMarkerX] = useState(null);
    const [containerWidth, containerMeasureRef] = useContainerWidth(500);
    const plotWidth = containerWidth ? containerWidth - leftLabelsWidth - LEFT_LABELS_MARGIN : 500;
    const containerRefObject = useRef(null);
    const containerRef = useMergeRefs(containerMeasureRef, containerRefObject);
    const popoverRef = useRef(null);
    const xDomain = (props.xDomain || computeDomainX(series, xScaleType));
    const yDomain = (props.yDomain || computeDomainY(series, yScaleType, stackedBars));
    const linesOnly = series.every(({ series }) => series.type === 'line' || series.type === 'threshold');
    function getXAxisProps(size, range) {
        const tickCount = getXTickCount(size);
        const scale = new ChartScale(xScaleType, xDomain, range, linesOnly);
        const ticks = createXTicks(scale, tickCount);
        return {
            axis: 'x',
            tickCount,
            scale,
            ticks,
            tickFormatter: xTickFormatter,
            title: xTitle,
            ariaRoleDescription: i18nStrings.xAxisAriaRoleDescription,
        };
    }
    function getYAxisProps(size, range) {
        const tickCount = getYTickCount(size);
        const scale = new NumericChartScale(yScaleType, yDomain, range, props.yDomain ? null : tickCount);
        const ticks = createYTicks(scale, tickCount);
        return {
            axis: 'y',
            tickCount,
            scale,
            ticks,
            tickFormatter: yTickFormatter,
            title: yTitle,
            ariaRoleDescription: i18nStrings.yAxisAriaRoleDescription,
        };
    }
    const bottomAxisProps = !horizontalBars
        ? getXAxisProps(plotWidth, [0, plotWidth])
        : getYAxisProps(plotWidth, [0, plotWidth]);
    const bottomLabelsProps = useBottomLabels(Object.assign({}, bottomAxisProps));
    const plotMeasureRef = useRef(null);
    const measuredHeight = useHeightMeasure(() => plotMeasureRef.current, !fitHeight);
    const plotHeight = fitHeight ? measuredHeight !== null && measuredHeight !== void 0 ? measuredHeight : 0 : explicitPlotHeight;
    const leftAxisProps = !horizontalBars
        ? getYAxisProps(plotHeight, [plotHeight, 0])
        : getXAxisProps(plotHeight, [0, plotHeight]);
    const xAxisProps = bottomAxisProps.axis === 'x' ? bottomAxisProps : leftAxisProps.axis === 'x' ? leftAxisProps : null;
    const yAxisProps = bottomAxisProps.axis === 'y' ? bottomAxisProps : leftAxisProps.axis === 'y' ? leftAxisProps : null;
    if (!xAxisProps || !yAxisProps) {
        throw new Error('Invariant violation: invalid axis props.');
    }
    /**
     * Interactions
     */
    const highlightedPointRef = useRef(null);
    const highlightedGroupRef = useRef(null);
    const [isPlotFocused, setPlotFocused] = useState(false);
    // Some chart components are rendered against "x" or "y" axes,
    // When "horizontalBars" is enabled, the axes are inverted.
    const x = !horizontalBars ? 'x' : 'y';
    const y = !horizontalBars ? 'y' : 'x';
    const scaledSeries = makeScaledSeries(visibleSeries, xAxisProps.scale, yAxisProps.scale);
    const barGroups = makeScaledBarGroups(visibleSeries, xAxisProps.scale, plotWidth, plotHeight, y);
    const { isPopoverOpen, isPopoverPinned, showPopover, pinPopover, dismissPopover } = usePopover();
    // Allows to add a delay between popover is dismissed and handlers are enabled to prevent immediate popover reopening.
    const [isHandlersDisabled, setHandlersDisabled] = useState(!isPopoverPinned);
    useEffect(() => {
        if (isPopoverPinned) {
            setHandlersDisabled(true);
        }
        else {
            const timeoutId = setTimeout(() => setHandlersDisabled(false), 25);
            return () => clearTimeout(timeoutId);
        }
    }, [isPopoverPinned]);
    const highlightSeries = useCallback((series) => {
        if (series !== highlightedSeries) {
            onHighlightChange(series);
        }
    }, [highlightedSeries, onHighlightChange]);
    const highlightPoint = useCallback((point) => {
        var _a, _b;
        setHighlightedGroupIndex(null);
        setHighlightedPoint(point);
        if (point) {
            highlightSeries(point.series);
            setVerticalMarkerX({
                scaledX: point.x,
                label: (_b = (_a = point.datum) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : null,
            });
        }
    }, [setHighlightedGroupIndex, setHighlightedPoint, highlightSeries]);
    const clearAllHighlights = useCallback(() => {
        setHighlightedPoint(null);
        highlightSeries(null);
        setHighlightedGroupIndex(null);
    }, [highlightSeries, setHighlightedGroupIndex, setHighlightedPoint]);
    // Highlight all points at a given X in a line chart
    const highlightX = useCallback((marker) => {
        if (marker) {
            clearAllHighlights();
        }
        setVerticalMarkerX(marker);
    }, [clearAllHighlights]);
    // Highlight all points and bars at a given X index in a mixed line and bar chart
    const highlightGroup = useCallback((groupIndex) => {
        highlightSeries(null);
        setHighlightedPoint(null);
        setHighlightedGroupIndex(groupIndex);
    }, [highlightSeries, setHighlightedPoint, setHighlightedGroupIndex]);
    const clearHighlightedSeries = useCallback(() => {
        clearAllHighlights();
        dismissPopover();
    }, [dismissPopover, clearAllHighlights]);
    const _d = useNavigation({
        series,
        visibleSeries,
        scaledSeries,
        barGroups,
        xScale: xAxisProps.scale,
        yScale: yAxisProps.scale,
        highlightedPoint,
        highlightedGroupIndex,
        highlightedSeries,
        isHandlersDisabled,
        pinPopover,
        highlightSeries,
        highlightGroup,
        highlightPoint,
        highlightX,
        clearHighlightedSeries,
        verticalMarkerX,
    }), { isGroupNavigation } = _d, handlers = __rest(_d, ["isGroupNavigation"]);
    const { onSVGMouseMove, onSVGMouseOut, onPopoverLeave } = useMouseHover({
        scaledSeries,
        barGroups,
        plotRef,
        popoverRef,
        highlightPoint,
        highlightGroup,
        clearHighlightedSeries,
        isGroupNavigation,
        isHandlersDisabled,
        highlightX,
    });
    // There are multiple ways to indicate what X is selected.
    // TODO: make a uniform verticalMarkerX state to fit all use-cases.
    const highlightedX = useMemo(() => {
        var _a, _b;
        if (highlightedGroupIndex !== null) {
            return barGroups[highlightedGroupIndex].x;
        }
        if (verticalMarkerX !== null) {
            return verticalMarkerX.label;
        }
        return (_b = (_a = highlightedPoint === null || highlightedPoint === void 0 ? void 0 : highlightedPoint.datum) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : null;
    }, [highlightedPoint, verticalMarkerX, highlightedGroupIndex, barGroups]);
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                dismissPopover();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [dismissPopover]);
    useLayoutEffect(() => {
        if (highlightedX !== null || highlightedPoint !== null) {
            showPopover();
        }
    }, [highlightedX, highlightedPoint, showPopover]);
    const onPopoverDismiss = (outsideClick) => {
        dismissPopover();
        if (!outsideClick) {
            // The delay is needed to bypass focus events caused by click or keypress needed to unpin the popover.
            setTimeout(() => {
                var _a, _b;
                const isSomeInnerElementFocused = highlightedPoint || highlightedGroupIndex !== null || verticalMarkerX;
                if (isSomeInnerElementFocused) {
                    (_a = plotRef.current) === null || _a === void 0 ? void 0 : _a.focusApplication();
                }
                else {
                    (_b = plotRef.current) === null || _b === void 0 ? void 0 : _b.focusPlot();
                }
            }, 0);
        }
        else {
            clearAllHighlights();
            setVerticalMarkerX(null);
        }
    };
    const onSVGMouseDown = (e) => {
        if (isPopoverOpen) {
            if (isPopoverPinned) {
                dismissPopover();
            }
            else {
                pinPopover();
                e.preventDefault();
            }
        }
        else {
            showPopover();
        }
    };
    const onSVGFocus = (event, trigger) => {
        setPlotFocused(true);
        if (trigger === 'keyboard') {
            handlers.onFocus();
        }
        else {
            // noop: clicks are handled separately
        }
    };
    const onSVGBlur = (event) => {
        var _a;
        setPlotFocused(false);
        const blurTarget = event.relatedTarget || event.target;
        if (blurTarget === null ||
            !(blurTarget instanceof Element) ||
            !nodeBelongs(containerRefObject.current, blurTarget)) {
            setHighlightedPoint(null);
            setVerticalMarkerX(null);
            if (!((_a = plotContainerRef === null || plotContainerRef === void 0 ? void 0 : plotContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(blurTarget))) {
                clearHighlightedSeries();
            }
            if (isPopoverOpen && !isPopoverPinned) {
                dismissPopover();
            }
        }
    };
    const onSVGKeyDown = handlers.onKeyDown;
    const xOffset = xAxisProps.scale.isCategorical() ? Math.max(0, xAxisProps.scale.d3Scale.bandwidth() - 1) / 2 : 0;
    let verticalLineX = null;
    if (verticalMarkerX !== null) {
        verticalLineX = verticalMarkerX.scaledX;
    }
    else if (isGroupNavigation && highlightedGroupIndex !== null) {
        const x = (_b = xAxisProps.scale.d3Scale(barGroups[highlightedGroupIndex].x)) !== null && _b !== void 0 ? _b : null;
        if (x !== null) {
            verticalLineX = xOffset + x;
        }
    }
    const point = useMemo(() => highlightedPoint
        ? {
            key: `${highlightedPoint.x}-${highlightedPoint.y}`,
            x: highlightedPoint.x,
            y: highlightedPoint.y,
            color: highlightedPoint.color,
        }
        : null, [highlightedPoint]);
    const verticalMarkers = useMemo(() => verticalLineX !== null
        ? scaledSeries
            .filter(({ x, y }) => (x === verticalLineX || isNaN(x)) && !isNaN(y))
            .map(({ x, y, color }, index) => ({
            key: `${index}-${x}-${y}`,
            x: !horizontalBars ? verticalLineX || 0 : y,
            y: !horizontalBars ? y : verticalLineX || 0,
            color: color,
        }))
        : [], [scaledSeries, verticalLineX, horizontalBars]);
    const highlightedElementRef = isGroupNavigation
        ? highlightedGroupRef
        : highlightedPoint
            ? highlightedPointRef
            : verticalMarkerRef;
    const highlightDetails = useMemo(() => {
        if (highlightedX === null) {
            return null;
        }
        // When series point is highlighted show the corresponding series and matching x-thresholds.
        if (highlightedPoint) {
            const seriesToShow = visibleSeries.filter(series => series.series === (highlightedPoint === null || highlightedPoint === void 0 ? void 0 : highlightedPoint.series) || isXThreshold(series.series));
            return formatHighlighted(highlightedX, seriesToShow, xTickFormatter);
        }
        // Otherwise - show all visible series details.
        return formatHighlighted(highlightedX, visibleSeries, xTickFormatter);
    }, [highlightedX, highlightedPoint, visibleSeries, xTickFormatter]);
    const detailPopoverFooterContent = useMemo(() => (detailPopoverFooter && highlightedX ? detailPopoverFooter(highlightedX) : null), [detailPopoverFooter, highlightedX]);
    const activeAriaLabel = useMemo(() => highlightDetails
        ? `${highlightDetails.position}, ${highlightDetails.details.map(d => d.key + ' ' + d.value).join(',')}`
        : '', [highlightDetails]);
    // Live region is used when nothing is focused e.g. when hovering.
    const activeLiveRegion = activeAriaLabel && !highlightedPoint && highlightedGroupIndex === null ? activeAriaLabel : '';
    const isLineXKeyboardFocused = isPlotFocused && !highlightedPoint && verticalMarkerX;
    const isRefresh = useVisualRefresh();
    return (React.createElement(CartesianChartContainer, { ref: containerRef, minHeight: explicitPlotHeight + bottomLabelsProps.height, fitHeight: !!fitHeight, leftAxisLabel: React.createElement(AxisLabel, { axis: y, position: "left", title: leftAxisProps.title }), leftAxisLabelMeasure: React.createElement(LabelsMeasure, { ticks: leftAxisProps.ticks, scale: leftAxisProps.scale, tickFormatter: leftAxisProps.tickFormatter, autoWidth: setLeftLabelsWidth }), bottomAxisLabel: React.createElement(AxisLabel, { axis: x, position: "bottom", title: bottomAxisProps.title }), chartPlot: React.createElement(ChartPlot, { ref: plotRef, width: "100%", height: fitHeight ? `calc(100% - ${bottomLabelsProps.height}px)` : plotHeight, offsetBottom: bottomLabelsProps.height, isClickable: isPopoverOpen && !isPopoverPinned, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, ariaRoleDescription: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.chartAriaRoleDescription, ariaLiveRegion: activeLiveRegion, activeElementRef: highlightedElementRef, activeElementKey: isPlotFocused &&
                ((_c = highlightedGroupIndex === null || highlightedGroupIndex === void 0 ? void 0 : highlightedGroupIndex.toString()) !== null && _c !== void 0 ? _c : (isLineXKeyboardFocused ? `point-index-${handlers.xIndex}` : point === null || point === void 0 ? void 0 : point.key)), activeElementFocusOffset: isGroupNavigation ? 0 : isLineXKeyboardFocused ? { x: 8, y: 0 } : 3, onMouseMove: onSVGMouseMove, onMouseOut: onSVGMouseOut, onMouseDown: onSVGMouseDown, onFocus: onSVGFocus, onBlur: onSVGBlur, onKeyDown: onSVGKeyDown },
            React.createElement("line", { ref: plotMeasureRef, x1: "0", x2: "0", y1: "0", y2: "100%", stroke: "transparent", strokeWidth: 1, style: { pointerEvents: 'none' } }),
            React.createElement(LeftLabels, { axis: y, ticks: leftAxisProps.ticks, scale: leftAxisProps.scale, tickFormatter: leftAxisProps.tickFormatter, title: leftAxisProps.title, ariaRoleDescription: leftAxisProps.ariaRoleDescription, width: plotWidth, height: plotHeight }),
            horizontalBars && (React.createElement(VerticalGridLines, { scale: yAxisProps.scale, ticks: yAxisProps.ticks, height: plotHeight })),
            emphasizeBaselineAxis && linesOnly && (React.createElement(EmphasizedBaseline, { axis: x, scale: yAxisProps.scale, width: plotWidth, height: plotHeight })),
            React.createElement(DataSeries, { axis: x, plotWidth: plotWidth, plotHeight: plotHeight, highlightedSeries: highlightedSeries !== null && highlightedSeries !== void 0 ? highlightedSeries : null, highlightedGroupIndex: highlightedGroupIndex, stackedBars: stackedBars, isGroupNavigation: isGroupNavigation, visibleSeries: visibleSeries, xScale: xAxisProps.scale, yScale: yAxisProps.scale }),
            emphasizeBaselineAxis && !linesOnly && (React.createElement(EmphasizedBaseline, { axis: x, scale: yAxisProps.scale, width: plotWidth, height: plotHeight })),
            React.createElement(VerticalMarker, { key: verticalLineX || '', height: plotHeight, showPoints: highlightedPoint === null, showLine: !isGroupNavigation, points: verticalMarkers, ref: verticalMarkerRef }),
            highlightedPoint && (React.createElement(HighlightedPoint, { ref: highlightedPointRef, point: point, role: "button", ariaLabel: activeAriaLabel, ariaHasPopup: true, ariaExpanded: isPopoverPinned })),
            isGroupNavigation && xAxisProps.scale.isCategorical() && (React.createElement(BarGroups, { ariaLabel: activeAriaLabel, isRefresh: isRefresh, isPopoverPinned: isPopoverPinned, barGroups: barGroups, highlightedGroupIndex: highlightedGroupIndex, highlightedGroupRef: highlightedGroupRef })),
            React.createElement(BottomLabels, Object.assign({}, bottomLabelsProps, { axis: x, scale: bottomAxisProps.scale, title: bottomAxisProps.title, ariaRoleDescription: bottomAxisProps.ariaRoleDescription, height: plotHeight, width: plotWidth, offsetLeft: leftLabelsWidth + BOTTOM_LABELS_OFFSET, offsetRight: BOTTOM_LABELS_OFFSET }))), popover: React.createElement(ChartPopover, { ref: popoverRef, containerRef: containerRefObject, trackRef: highlightedElementRef, isOpen: isPopoverOpen, isPinned: isPopoverPinned, highlightDetails: highlightDetails, onDismiss: onPopoverDismiss, size: detailPopoverSize, footer: detailPopoverFooterContent, dismissAriaLabel: i18nStrings.detailPopoverDismissAriaLabel, onMouseLeave: onPopoverLeave }) }));
}
//# sourceMappingURL=chart-container.js.map