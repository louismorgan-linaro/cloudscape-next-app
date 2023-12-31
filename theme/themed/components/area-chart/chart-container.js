// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useEffect, memo, useRef, useMemo } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import ChartPlot from '../internal/components/chart-plot';
import AxisLabel from '../internal/components/cartesian-chart/axis-label';
import LabelsMeasure from '../internal/components/cartesian-chart/labels-measure';
import LeftLabels from '../internal/components/cartesian-chart/left-labels';
import BottomLabels, { useBottomLabels } from '../internal/components/cartesian-chart/bottom-labels';
import EmphasizedBaseline from '../internal/components/cartesian-chart/emphasized-baseline';
import AreaDataSeries from './elements/data-series';
import AreaChartPopover from './elements/chart-popover';
import AreaHighlightedPoint from './elements/highlighted-point';
import AreaVerticalMarker from './elements/vertical-marker';
import useHighlightDetails from './elements/use-highlight-details';
import useContainerWidth from '../internal/utils/use-container-width';
import { useSelector } from './async-store';
import { CartesianChartContainer } from '../internal/components/cartesian-chart/chart-container';
const DEFAULT_CHART_WIDTH = 500;
const LEFT_LABELS_MARGIN = 16;
const BOTTOM_LABELS_OFFSET = 12;
export default memo(ChartContainer);
function ChartContainer({ model, autoWidth, xTitle, yTitle, detailPopoverSize, detailPopoverFooter, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings: { xTickFormatter: deprecatedXTickFormatter, yTickFormatter: deprecatedYTickFormatter, detailTotalFormatter: deprecatedDetailTotalFormatter, detailTotalLabel, chartAriaRoleDescription, xAxisAriaRoleDescription, yAxisAriaRoleDescription, detailPopoverDismissAriaLabel, } = {}, fitHeight, minHeight, xTickFormatter = deprecatedXTickFormatter, yTickFormatter = deprecatedYTickFormatter, detailTotalFormatter = deprecatedDetailTotalFormatter, }) {
    const [leftLabelsWidth, setLeftLabelsWidth] = useState(0);
    const [containerWidth, containerWidthRef] = useContainerWidth(DEFAULT_CHART_WIDTH);
    const bottomLabelsProps = useBottomLabels({
        ticks: model.computed.xTicks,
        scale: model.computed.xScale,
        tickFormatter: xTickFormatter,
    });
    // Calculate the width of the plot area and tell it to the parent.
    const plotWidth = Math.max(0, containerWidth - leftLabelsWidth - LEFT_LABELS_MARGIN);
    useEffect(() => {
        autoWidth(plotWidth);
    }, [autoWidth, plotWidth]);
    const highlightDetails = useHighlightDetails({
        model,
        xTickFormatter,
        yTickFormatter,
        detailTotalFormatter,
        detailTotalLabel,
    });
    const highlightedPointRef = useRef(null);
    const mergedRef = useMergeRefs(containerWidthRef, model.refs.container);
    const isPointHighlighted = model.interactions.get().highlightedPoint !== null;
    const highlightedX = useSelector(model.interactions, state => state.highlightedX);
    const detailPopoverFooterContent = useMemo(() => (detailPopoverFooter && highlightedX ? detailPopoverFooter(highlightedX[0].x) : null), [detailPopoverFooter, highlightedX]);
    return (React.createElement(CartesianChartContainer, { ref: mergedRef, minHeight: minHeight + bottomLabelsProps.height, fitHeight: !!fitHeight, leftAxisLabel: React.createElement(AxisLabel, { axis: "y", position: "left", title: yTitle }), leftAxisLabelMeasure: React.createElement(LabelsMeasure, { scale: model.computed.yScale, ticks: model.computed.yTicks, tickFormatter: yTickFormatter, autoWidth: setLeftLabelsWidth }), bottomAxisLabel: React.createElement(AxisLabel, { axis: "x", position: "bottom", title: xTitle }), chartPlot: React.createElement(ChartPlot, { ref: model.refs.plot, width: "100%", height: fitHeight ? `calc(100% - ${bottomLabelsProps.height}px)` : model.height, offsetBottom: bottomLabelsProps.height, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, ariaRoleDescription: chartAriaRoleDescription, activeElementKey: !(highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.isPopoverPinned) && (highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.activeLabel), activeElementRef: isPointHighlighted ? highlightedPointRef : model.refs.verticalMarker, activeElementFocusOffset: isPointHighlighted ? 3 : { x: 8, y: 0 }, isClickable: !(highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.isPopoverPinned), onMouseMove: model.handlers.onSVGMouseMove, onMouseOut: model.handlers.onSVGMouseOut, onMouseDown: model.handlers.onSVGMouseDown, onKeyDown: model.handlers.onSVGKeyDown, onFocus: model.handlers.onSVGFocus, onBlur: model.handlers.onSVGBlur },
            React.createElement("line", { ref: model.refs.plotMeasure, x1: "0", x2: "0", y1: "0", y2: "100%", stroke: "transparent", strokeWidth: 1, style: { pointerEvents: 'none' } }),
            React.createElement(LeftLabels, { width: model.width, height: model.height, scale: model.computed.yScale, ticks: model.computed.yTicks, tickFormatter: yTickFormatter, title: yTitle, ariaRoleDescription: yAxisAriaRoleDescription }),
            React.createElement(AreaDataSeries, { model: model }),
            React.createElement(BottomLabels, Object.assign({}, bottomLabelsProps, { width: model.width, height: model.height, scale: model.computed.xScale, title: xTitle, ariaRoleDescription: xAxisAriaRoleDescription, offsetLeft: leftLabelsWidth + BOTTOM_LABELS_OFFSET, offsetRight: BOTTOM_LABELS_OFFSET })),
            React.createElement(EmphasizedBaseline, { width: model.width, height: model.height, scale: model.computed.yScale }),
            React.createElement(AreaVerticalMarker, { model: model }),
            React.createElement(AreaHighlightedPoint, { ref: highlightedPointRef, model: model, ariaLabel: highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.activeLabel })), popover: React.createElement(AreaChartPopover, { model: model, highlightDetails: highlightDetails, dismissAriaLabel: detailPopoverDismissAriaLabel, size: detailPopoverSize, footer: detailPopoverFooterContent }) }));
}
//# sourceMappingURL=chart-container.js.map