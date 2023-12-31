import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import CollectionPreferencesWrapper from '../collection-preferences';
import PaginationWrapper from '../pagination';
import TextFilterWrapper from '../text-filter';
import PropertyFilterWrapper from '../property-filter';
export default class TableWrapper extends ComponentWrapper {
    static rootSelector: string;
    private containerWrapper;
    private findNativeTable;
    private findActiveTHead;
    findHeaderSlot(): ElementWrapper | null;
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion(): ElementWrapper | null;
    findFooterSlot(): ElementWrapper | null;
    findColumnHeaders(): Array<ElementWrapper>;
    /**
     * Returns the element the user clicks when resizing a column.
     *
     * @param columnIndex 1-based index of the column containing the resizer.
     */
    findColumnResizer(columnIndex: number): ElementWrapper | null;
    /**
     * Returns a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findBodyCell(rowIndex: number, columnIndex: number): ElementWrapper | null;
    findRows(): Array<ElementWrapper>;
    findSelectedRows(): Array<ElementWrapper>;
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion(): ElementWrapper | null;
    findEmptySlot(): ElementWrapper | null;
    findLoadingText(): ElementWrapper | null;
    findColumnSortingArea(colIndex: number): ElementWrapper | null;
    /**
     * Returns the column that is used for ascending sorting.
     */
    findAscSortedColumn(): ElementWrapper | null;
    /**
     * Returns the column that is used for descending sorting.
     */
    findDescSortedColumn(): ElementWrapper | null;
    /**
     * Returns a row selection area for a given index.
     *
     * @param rowIndex 1-based index of the row selection area to return.
     */
    findRowSelectionArea(rowIndex: number): ElementWrapper | null;
    findSelectAllTrigger(): ElementWrapper | null;
    findTextFilter(): TextFilterWrapper | null;
    findPropertyFilter(): PropertyFilterWrapper | null;
    findFilterSlot(): ElementWrapper | null;
    findCollectionPreferences(): CollectionPreferencesWrapper | null;
    findPagination(): PaginationWrapper | null;
    /**
     * Returns the button that activates inline editing for a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findEditCellButton(rowIndex: number, columnIndex: number): ElementWrapper | null;
    findEditingCell(): ElementWrapper | null;
    private _findEditingCellControls;
    findEditingCellSaveButton(): ElementWrapper | null;
    findEditingCellCancelButton(): ElementWrapper | null;
}
