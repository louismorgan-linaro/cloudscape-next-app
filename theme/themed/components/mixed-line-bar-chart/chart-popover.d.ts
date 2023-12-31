import React from 'react';
import { ChartDataTypes, MixedLineBarChartProps } from './interfaces';
import { HighlightDetails } from './format-highlighted';
export interface MixedChartPopoverProps<T extends ChartDataTypes> {
    containerRef: React.RefObject<HTMLDivElement>;
    trackRef: React.RefObject<SVGElement>;
    isOpen: boolean;
    isPinned: boolean;
    highlightDetails: null | HighlightDetails;
    onDismiss(): void;
    size: MixedLineBarChartProps<T>['detailPopoverSize'];
    footer?: React.ReactNode;
    dismissAriaLabel?: string;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
}
declare const _default: React.ForwardRefExoticComponent<MixedChartPopoverProps<ChartDataTypes> & React.RefAttributes<HTMLElement>>;
export default _default;
//# sourceMappingURL=chart-popover.d.ts.map