// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { SelectionControl, focusMarkers } from './selection';
import { fireNonCancelableEvent } from '../internal/events';
import { getColumnKey } from './utils';
import { TableHeaderCell } from './header-cell';
import { useColumnWidths } from './use-column-widths';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
import headerCellStyles from './header-cell/styles.css.js';
import ScreenreaderOnly from '../internal/components/screenreader-only';
import { getTableHeaderRowRoleProps } from './table-role';
import { TableThElement } from './header-cell/th-element';
import { findUpUntil } from '@cloudscape-design/component-toolkit/dom';
const Thead = React.forwardRef(({ containerWidth, selectionType, getSelectAllProps, columnDefinitions, sortingColumn, sortingDisabled, sortingDescending, resizableColumns, variant, wrapLines, onFocusMove, onSortingChange, onResizeFinish, singleSelectionHeaderAriaLabel, stripedRows, sticky = false, hidden = false, stuck = false, stickyState, selectionColumnId, focusedComponent, onFocusedComponentChange, tableRole, }, outerRef) => {
    const isVisualRefresh = useVisualRefresh();
    const headerCellClass = clsx(headerCellStyles['header-cell'], headerCellStyles[`header-cell-variant-${variant}`], sticky && headerCellStyles['header-cell-sticky'], stuck && headerCellStyles['header-cell-stuck'], stripedRows && headerCellStyles['has-striped-rows'], isVisualRefresh && headerCellStyles['is-visual-refresh']);
    const selectionCellClass = clsx(styles['selection-control'], styles['selection-control-header'], isVisualRefresh && styles['is-visual-refresh']);
    const { columnWidths, totalWidth, updateColumn, setCell } = useColumnWidths();
    return (React.createElement("thead", { className: clsx(!hidden && styles['thead-active']) },
        React.createElement("tr", Object.assign({}, focusMarkers.all, { ref: outerRef, "aria-rowindex": 1 }, getTableHeaderRowRoleProps({ tableRole }), { onFocus: event => {
                var _a;
                const focusControlElement = findUpUntil(event.target, element => !!element.getAttribute('data-focus-id'));
                const focusId = (_a = focusControlElement === null || focusControlElement === void 0 ? void 0 : focusControlElement.getAttribute('data-focus-id')) !== null && _a !== void 0 ? _a : null;
                onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange(focusId);
            }, onBlur: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange(null) }),
            selectionType ? (React.createElement(TableThElement, { className: clsx(headerCellClass, selectionCellClass, hidden && headerCellStyles['header-cell-hidden']), hidden: hidden, tableRole: tableRole, colIndex: 0, columnId: selectionColumnId, stickyState: stickyState }, selectionType === 'multi' ? (React.createElement(SelectionControl, Object.assign({ onFocusDown: event => {
                    onFocusMove(event.target, -1, +1);
                }, focusedComponent: focusedComponent }, getSelectAllProps(), (sticky ? { tabIndex: -1 } : {})))) : (React.createElement(ScreenreaderOnly, null, singleSelectionHeaderAriaLabel)))) : null,
            columnDefinitions.map((column, colIndex) => {
                const columnId = getColumnKey(column, colIndex);
                let widthOverride;
                if (resizableColumns) {
                    if (columnWidths) {
                        // use stateful value if available
                        widthOverride = columnWidths[columnId];
                    }
                    if (colIndex === columnDefinitions.length - 1 && containerWidth && containerWidth > totalWidth) {
                        // let the last column grow and fill the container width
                        widthOverride = 'auto';
                    }
                }
                return (React.createElement(TableHeaderCell, { key: columnId, className: headerCellClass, style: {
                        width: widthOverride || column.width,
                        minWidth: sticky ? undefined : column.minWidth,
                        maxWidth: resizableColumns || sticky ? undefined : column.maxWidth,
                    }, tabIndex: sticky ? -1 : 0, focusedComponent: focusedComponent, column: column, activeSortingColumn: sortingColumn, sortingDescending: sortingDescending, sortingDisabled: sortingDisabled, wrapLines: wrapLines, hidden: hidden, colIndex: selectionType ? colIndex + 1 : colIndex, columnId: columnId, updateColumn: updateColumn, onResizeFinish: () => onResizeFinish(columnWidths), resizableColumns: resizableColumns, onClick: detail => fireNonCancelableEvent(onSortingChange, detail), isEditable: !!column.editConfig, stickyState: stickyState, cellRef: node => setCell(columnId, node), tableRole: tableRole }));
            }))));
});
export default Thead;
//# sourceMappingURL=thead.js.map