import React from 'react';
import { ChartDataTypes, InternalChartSeries, MixedLineBarChartProps, ScaleType } from './interfaces';
import { ScaledPoint } from './make-scaled-series';
import { CartesianChartProps } from '../internal/components/cartesian-chart/interfaces';
export interface ChartContainerProps<T extends ChartDataTypes> {
    series: ReadonlyArray<InternalChartSeries<T>>;
    visibleSeries: ReadonlyArray<InternalChartSeries<T>>;
    fitHeight?: boolean;
    height: number;
    detailPopoverSize: MixedLineBarChartProps<T>['detailPopoverSize'];
    detailPopoverFooter: MixedLineBarChartProps<T>['detailPopoverFooter'];
    xScaleType: ScaleType;
    yScaleType: 'linear' | 'log';
    xDomain: MixedLineBarChartProps<T>['xDomain'];
    yDomain: MixedLineBarChartProps<T>['yDomain'];
    xTickFormatter?: CartesianChartProps.TickFormatter<T>;
    yTickFormatter?: CartesianChartProps.TickFormatter<number>;
    xTitle?: string;
    yTitle?: string;
    stackedBars?: boolean;
    emphasizeBaselineAxis: boolean;
    horizontalBars?: boolean;
    highlightedSeries?: MixedLineBarChartProps<T>['highlightedSeries'];
    onHighlightChange: (series: InternalChartSeries<T>['series'] | null) => void;
    highlightedPoint: ScaledPoint<T> | null;
    setHighlightedPoint: (point: ScaledPoint<T> | null) => void;
    highlightedGroupIndex: number | null;
    setHighlightedGroupIndex: (groupIndex: number | null) => void;
    ariaLabel: MixedLineBarChartProps<T>['ariaLabel'];
    ariaLabelledby: MixedLineBarChartProps<T>['ariaLabelledby'];
    ariaDescription: MixedLineBarChartProps<T>['ariaDescription'];
    i18nStrings: MixedLineBarChartProps<T>['i18nStrings'];
    plotContainerRef: React.RefObject<HTMLDivElement>;
}
export default function ChartContainer<T extends ChartDataTypes>({ fitHeight, height: explicitPlotHeight, series, visibleSeries, highlightedSeries, onHighlightChange, highlightedPoint, setHighlightedPoint, highlightedGroupIndex, setHighlightedGroupIndex, detailPopoverFooter, detailPopoverSize, stackedBars, horizontalBars, xScaleType, yScaleType, xTickFormatter, yTickFormatter, emphasizeBaselineAxis, xTitle, yTitle, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings, plotContainerRef, ...props }: ChartContainerProps<T>): JSX.Element;
//# sourceMappingURL=chart-container.d.ts.map