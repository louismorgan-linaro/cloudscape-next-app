import React from 'react';
import { TableProps } from './interfaces';
import { SelectionProps } from './selection';
import { NonCancelableEventHandler } from '../internal/events';
import { StickyColumnsModel } from './sticky-columns';
import { TableRole } from './table-role';
export interface TheadProps {
    containerWidth: number | null;
    selectionType: TableProps.SelectionType | undefined;
    columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<any>>;
    sortingColumn: TableProps.SortingColumn<any> | undefined;
    sortingDescending: boolean | undefined;
    sortingDisabled: boolean | undefined;
    variant: TableProps.Variant;
    wrapLines: boolean | undefined;
    resizableColumns: boolean | undefined;
    getSelectAllProps: () => SelectionProps;
    onFocusMove: ((sourceElement: HTMLElement, fromIndex: number, direction: -1 | 1) => void) | undefined;
    onResizeFinish: (newWidths: Record<string, number>) => void;
    onSortingChange: NonCancelableEventHandler<TableProps.SortingState<any>> | undefined;
    sticky?: boolean;
    hidden?: boolean;
    stuck?: boolean;
    singleSelectionHeaderAriaLabel?: string;
    stripedRows?: boolean;
    stickyState: StickyColumnsModel;
    selectionColumnId: PropertyKey;
    focusedComponent?: null | string;
    onFocusedComponentChange?: (focusId: null | string) => void;
    tableRole: TableRole;
}
declare const Thead: React.ForwardRefExoticComponent<TheadProps & React.RefAttributes<HTMLTableRowElement>>;
export default Thead;
//# sourceMappingURL=thead.d.ts.map