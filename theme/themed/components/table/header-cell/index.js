// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import InternalIcon from '../../icon/internal';
import { KeyCode } from '../../internal/keycode';
import { getSortingIconName, getSortingStatus, isSorted } from './utils';
import styles from './styles.css.js';
import { Resizer } from '../resizer';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import { useInternalI18n } from '../../i18n/context';
import { TableThElement } from './th-element';
export function TableHeaderCell({ className, style, tabIndex, column, activeSortingColumn, sortingDescending, sortingDisabled, wrapLines, focusedComponent, hidden, onClick, colIndex, updateColumn, resizableColumns, onResizeFinish, isEditable, columnId, stickyState, cellRef, tableRole, }) {
    var _a;
    const i18n = useInternalI18n('table');
    const sortable = !!column.sortingComparator || !!column.sortingField;
    const sorted = !!activeSortingColumn && isSorted(column, activeSortingColumn);
    const sortingStatus = getSortingStatus(sortable, sorted, !!sortingDescending, !!sortingDisabled);
    const handleClick = () => onClick({
        sortingColumn: column,
        isDescending: sorted ? !sortingDescending : false,
    });
    // Elements with role="button" do not have the default behavior of <button>, where pressing
    // Enter or Space will trigger a click event. Therefore we need to add this ourselves.
    // The native <button> element cannot be used due to a misaligned implementation in Firefox:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=843003
    const handleKeyPress = ({ nativeEvent: e }) => {
        if (e.keyCode === KeyCode.enter || e.keyCode === KeyCode.space) {
            e.preventDefault();
            handleClick();
        }
    };
    const headerId = useUniqueId('table-header-');
    return (React.createElement(TableThElement, { className: className, style: style, cellRef: cellRef, sortingStatus: sortingStatus, sortingDisabled: sortingDisabled, hidden: hidden, colIndex: colIndex, resizableColumns: resizableColumns, columnId: columnId, stickyState: stickyState, tableRole: tableRole },
        React.createElement("div", Object.assign({ "data-focus-id": `sorting-control-${String(columnId)}`, className: clsx(styles['header-cell-content'], {
                [styles['header-cell-fake-focus']]: focusedComponent === `sorting-control-${String(columnId)}`,
            }), "aria-label": column.ariaLabel
                ? column.ariaLabel({
                    sorted: sorted,
                    descending: sorted && !!sortingDescending,
                    disabled: !!sortingDisabled,
                })
                : undefined }, (sortingStatus && !sortingDisabled
            ? {
                onKeyPress: handleKeyPress,
                tabIndex: tabIndex,
                role: 'button',
                onClick: handleClick,
            }
            : {})),
            React.createElement("div", { className: clsx(styles['header-cell-text'], wrapLines && styles['header-cell-text-wrap']), id: headerId },
                column.header,
                isEditable ? (React.createElement("span", { className: styles['edit-icon'], role: "img", "aria-label": i18n('columnDefinitions.editConfig.editIconAriaLabel', (_a = column.editConfig) === null || _a === void 0 ? void 0 : _a.editIconAriaLabel) },
                    React.createElement(InternalIcon, { name: "edit" }))) : null),
            sortingStatus && (React.createElement("span", { className: styles['sorting-icon'] },
                React.createElement(InternalIcon, { name: getSortingIconName(sortingStatus) })))),
        resizableColumns && (React.createElement(Resizer, { tabIndex: tabIndex, focusId: `resize-control-${String(columnId)}`, showFocusRing: focusedComponent === `resize-control-${String(columnId)}`, onWidthUpdate: newWidth => updateColumn(columnId, newWidth), onWidthUpdateCommit: onResizeFinish, ariaLabelledby: headerId, minWidth: typeof column.minWidth === 'string' ? parseInt(column.minWidth) : column.minWidth }))));
}
//# sourceMappingURL=index.js.map