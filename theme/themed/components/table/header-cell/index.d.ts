import React from 'react';
import { TableProps } from '../interfaces';
import { StickyColumnsModel } from '../sticky-columns';
import { TableRole } from '../table-role';
interface TableHeaderCellProps<ItemType> {
    className?: string;
    style?: React.CSSProperties;
    tabIndex: number;
    column: TableProps.ColumnDefinition<ItemType>;
    activeSortingColumn?: TableProps.SortingColumn<ItemType>;
    sortingDescending?: boolean;
    sortingDisabled?: boolean;
    wrapLines?: boolean;
    hidden?: boolean;
    onClick(detail: TableProps.SortingState<any>): void;
    onResizeFinish: () => void;
    colIndex: number;
    updateColumn: (columnId: PropertyKey, newWidth: number) => void;
    resizableColumns?: boolean;
    isEditable?: boolean;
    columnId: PropertyKey;
    stickyState: StickyColumnsModel;
    cellRef: React.RefCallback<HTMLElement>;
    focusedComponent?: null | string;
    tableRole: TableRole;
}
export declare function TableHeaderCell<ItemType>({ className, style, tabIndex, column, activeSortingColumn, sortingDescending, sortingDisabled, wrapLines, focusedComponent, hidden, onClick, colIndex, updateColumn, resizableColumns, onResizeFinish, isEditable, columnId, stickyState, cellRef, tableRole, }: TableHeaderCellProps<ItemType>): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map