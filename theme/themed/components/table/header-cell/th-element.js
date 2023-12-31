// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import styles from './styles.css.js';
import { getStickyClassNames } from '../utils';
import { useStickyCellStyles } from '../sticky-columns';
import { useMergeRefs } from '../../internal/hooks/use-merge-refs';
import { getTableColHeaderRoleProps } from '../table-role';
export function TableThElement({ className, style, sortingStatus, sortingDisabled, hidden, colIndex, resizableColumns, columnId, stickyState, cellRef, tableRole, children, }) {
    const stickyStyles = useStickyCellStyles({
        stickyColumns: stickyState,
        columnId,
        getClassName: props => getStickyClassNames(styles, props),
    });
    const mergedRef = useMergeRefs(stickyStyles.ref, cellRef);
    return (React.createElement("th", Object.assign({ className: clsx(className, {
            [styles['header-cell-resizable']]: !!resizableColumns,
            [styles['header-cell-sortable']]: sortingStatus,
            [styles['header-cell-sorted']]: sortingStatus === 'ascending' || sortingStatus === 'descending',
            [styles['header-cell-disabled']]: sortingDisabled,
            [styles['header-cell-ascending']]: sortingStatus === 'ascending',
            [styles['header-cell-descending']]: sortingStatus === 'descending',
            [styles['header-cell-hidden']]: hidden,
        }, stickyStyles.className), style: Object.assign(Object.assign({}, style), stickyStyles.style), ref: mergedRef }, getTableColHeaderRoleProps({ tableRole, sortingStatus, colIndex })), children));
}
//# sourceMappingURL=th-element.js.map