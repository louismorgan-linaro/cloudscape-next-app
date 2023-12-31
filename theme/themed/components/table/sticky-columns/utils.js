// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function isCellStatesEqual(s1, s2) {
    if (s1 && s2) {
        return (s1.padLeft === s2.padLeft &&
            s1.lastLeft === s2.lastLeft &&
            s1.lastRight === s2.lastRight &&
            s1.offset.left === s2.offset.left &&
            s1.offset.right === s2.offset.right);
    }
    return s1 === s2;
}
export function isWrapperStatesEqual(s1, s2) {
    return s1.scrollPaddingLeft === s2.scrollPaddingLeft && s1.scrollPaddingRight === s2.scrollPaddingRight;
}
export function updateCellOffsets(cells, props) {
    var _a, _b, _c, _d, _e, _f;
    const totalColumns = props.visibleColumns.length;
    const firstColumnsWidths = [];
    for (let i = 0; i < Math.min(totalColumns, props.stickyColumnsFirst); i++) {
        const element = cells[props.visibleColumns[i]];
        const cellWidth = (_a = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width) !== null && _a !== void 0 ? _a : 0;
        firstColumnsWidths[i] = ((_b = firstColumnsWidths[i - 1]) !== null && _b !== void 0 ? _b : 0) + cellWidth;
    }
    const lastColumnsWidths = [];
    for (let i = 0; i < Math.min(totalColumns, props.stickyColumnsLast); i++) {
        const element = cells[props.visibleColumns[totalColumns - 1 - i]];
        const cellWidth = (_c = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width) !== null && _c !== void 0 ? _c : 0;
        lastColumnsWidths[i] = ((_d = lastColumnsWidths[i - 1]) !== null && _d !== void 0 ? _d : 0) + cellWidth;
    }
    const stickyWidthLeft = (_e = firstColumnsWidths[props.stickyColumnsFirst - 1]) !== null && _e !== void 0 ? _e : 0;
    const stickyWidthRight = (_f = lastColumnsWidths[props.stickyColumnsLast - 1]) !== null && _f !== void 0 ? _f : 0;
    const offsets = props.visibleColumns.reduce((map, columnId, columnIndex) => {
        var _a, _b;
        return map.set(columnId, {
            first: (_a = firstColumnsWidths[columnIndex - 1]) !== null && _a !== void 0 ? _a : 0,
            last: (_b = lastColumnsWidths[totalColumns - 1 - columnIndex - 1]) !== null && _b !== void 0 ? _b : 0,
        });
    }, new Map());
    return { offsets, stickyWidthLeft, stickyWidthRight };
}
//# sourceMappingURL=utils.js.map