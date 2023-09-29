// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import clsx from 'clsx';
import { matchesX, getKeyValue } from './utils';
import styles from './styles.css.js';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
export default function BarSeries({ axis, series, color, xScale, yScale, highlighted, dimmed, highlightedGroupIndex, stackedBarOffsets, totalSeriesCount, seriesIndex, plotSize, chartAreaClipPath, }) {
    const isRefresh = useVisualRefresh();
    const xCoordinates = useMemo(() => {
        var _a;
        if (series.type !== 'bar' || !xScale.isCategorical()) {
            return [];
        }
        const yContinuosScale = yScale.d3Scale;
        const xPoints = series.data.map(({ x }) => xScale.d3Scale(x) || NaN);
        const zeroY = (_a = yScale.d3Scale(0)) !== null && _a !== void 0 ? _a : NaN;
        const baseY = isFinite(zeroY) ? Math.min(plotSize, zeroY) : plotSize;
        let barWidth = xScale.d3Scale.bandwidth();
        const PADDING = 4;
        const MINWIDTH = 4;
        if (!stackedBarOffsets && totalSeriesCount > 1) {
            // Regular grouped bars
            barWidth = (barWidth - (totalSeriesCount - 1) * PADDING) / totalSeriesCount;
            barWidth = Math.max(barWidth, MINWIDTH);
        }
        return xPoints.map((x, i) => {
            var _a, _b;
            const d = series.data[i];
            let barX = x;
            let yValue = d.y;
            if (stackedBarOffsets) {
                // Stacked bars
                const offsetMap = d.y < 0 ? stackedBarOffsets.negativeOffsets : stackedBarOffsets.positiveOffsets;
                yValue = d.y + (offsetMap[getKeyValue(d.x)] || 0);
            }
            else if (totalSeriesCount > 1) {
                // Regular grouped bars
                barX += seriesIndex * (barWidth + PADDING);
            }
            // Account for negative values growing "down" instead of "up"
            yValue = yValue < 0 ? yValue - d.y : yValue;
            return {
                x: barX,
                y: (_a = yContinuosScale(yValue)) !== null && _a !== void 0 ? _a : NaN,
                width: barWidth,
                height: Math.abs(((_b = yContinuosScale(d.y)) !== null && _b !== void 0 ? _b : NaN) - baseY),
            };
        });
    }, [series, xScale, yScale, plotSize, stackedBarOffsets, totalSeriesCount, seriesIndex]);
    const highlightedXValue = highlightedGroupIndex !== null ? xScale.domain[highlightedGroupIndex] : null;
    return (React.createElement("g", { "aria-label": series.title, clipPath: `url(#${chartAreaClipPath})`, className: clsx(styles.series, styles['series--bar'], {
            [styles['series--highlighted']]: highlighted,
            [styles['series--dimmed']]: dimmed,
        }) }, xCoordinates.map(({ x, y, width, height }, i) => {
        if (!isFinite(x) || !isFinite(height)) {
            return;
        }
        // Create margins between stacked series but only when series data is not too small.
        const baseHeightOffset = stackedBarOffsets ? 3 : 0;
        const isSmallBar = height < 4;
        const heightOffset = isSmallBar ? 0 : baseHeightOffset;
        const widthOffset = 2;
        const rx = isRefresh ? (isSmallBar ? '2px' : '4px') : '0px';
        const className = clsx(styles.series__rect, {
            [styles['series--dimmed']]: highlightedXValue !== null && !matchesX(highlightedXValue, series.data[i].x),
        });
        return axis === 'x' ? (React.createElement("rect", { key: `bar-${i}`, fill: color, x: x + widthOffset / 2, y: y + heightOffset / 2, width: width - widthOffset, height: height - heightOffset, rx: rx, className: className })) : (React.createElement("rect", { key: `bar-${i}`, fill: color, x: y - height + heightOffset / 2, y: x + widthOffset / 2, width: height - heightOffset, height: width - widthOffset, rx: rx, className: className }));
    })));
}
//# sourceMappingURL=bar-series.js.map