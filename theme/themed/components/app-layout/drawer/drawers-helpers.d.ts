export declare function splitItems<T extends {
    id: string;
}>(maybeItems: Array<T> | undefined, splitIndex: number, activeId: string | undefined): {
    visibleItems: T[];
    overflowItems: T[];
};
//# sourceMappingURL=drawers-helpers.d.ts.map