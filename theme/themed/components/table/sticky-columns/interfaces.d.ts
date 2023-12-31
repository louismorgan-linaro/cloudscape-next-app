export interface StickyColumnsProps {
    visibleColumns: readonly PropertyKey[];
    stickyColumnsFirst: number;
    stickyColumnsLast: number;
}
export interface StickyColumnsState {
    cellState: Record<PropertyKey, null | StickyColumnsCellState>;
    wrapperState: StickyColumnsWrapperState;
}
export interface StickyColumnsCellState {
    padLeft: boolean;
    lastLeft: boolean;
    lastRight: boolean;
    offset: {
        left?: number;
        right?: number;
    };
}
export interface StickyColumnsWrapperState {
    scrollPaddingLeft: number;
    scrollPaddingRight: number;
}
export interface CellOffsets {
    offsets: Map<PropertyKey, {
        first: number;
        last: number;
    }>;
    stickyWidthLeft: number;
    stickyWidthRight: number;
}
//# sourceMappingURL=interfaces.d.ts.map