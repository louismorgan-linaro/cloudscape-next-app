/// <reference types="react" />
import { TableProps } from '../interfaces';
import { TableTdElementProps } from './td-element';
interface TableBodyCellProps<ItemType> extends TableTdElementProps {
    column: TableProps.ColumnDefinition<ItemType>;
    item: ItemType;
    isEditing: boolean;
    successfulEdit?: boolean;
    onEditStart: () => void;
    onEditEnd: (cancelled: boolean) => void;
    submitEdit?: TableProps.SubmitEditFunction<ItemType>;
    ariaLabels: TableProps['ariaLabels'];
}
export declare function TableBodyCell<ItemType>({ isEditable, ...rest }: TableBodyCellProps<ItemType> & {
    isEditable: boolean;
}): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map