import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import CollectionPreferencesWrapper from '../collection-preferences';
import PaginationWrapper from '../pagination';
import TextFilterWrapper from '../text-filter';
import PropertyFilterWrapper from '../property-filter';
export default class TableWrapper extends ComponentWrapper {
    static rootSelector: string;
    private containerWrapper;
    private findNativeTable;
    private findActiveTHead;
    findHeaderSlot(): ElementWrapper;
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    findHeaderRegion(): ElementWrapper;
    findFooterSlot(): ElementWrapper;
    findColumnHeaders(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    /**
     * Returns the element the user clicks when resizing a column.
     *
     * @param columnIndex 1-based index of the column containing the resizer.
     */
    findColumnResizer(columnIndex: number): ElementWrapper;
    /**
     * Returns a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findBodyCell(rowIndex: number, columnIndex: number): ElementWrapper;
    findRows(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findSelectedRows(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    findEmptyRegion(): ElementWrapper;
    findEmptySlot(): ElementWrapper;
    findLoadingText(): ElementWrapper;
    findColumnSortingArea(colIndex: number): ElementWrapper;
    /**
     * Returns the column that is used for ascending sorting.
     */
    findAscSortedColumn(): ElementWrapper;
    /**
     * Returns the column that is used for descending sorting.
     */
    findDescSortedColumn(): ElementWrapper;
    /**
     * Returns a row selection area for a given index.
     *
     * @param rowIndex 1-based index of the row selection area to return.
     */
    findRowSelectionArea(rowIndex: number): ElementWrapper;
    findSelectAllTrigger(): ElementWrapper;
    findTextFilter(): TextFilterWrapper;
    findPropertyFilter(): PropertyFilterWrapper;
    findFilterSlot(): ElementWrapper;
    findCollectionPreferences(): CollectionPreferencesWrapper;
    findPagination(): PaginationWrapper;
    /**
     * Returns the button that activates inline editing for a table cell based on given row and column indices.
     *
     * @param rowIndex 1-based index of the row of the cell to select.
     * @param columnIndex 1-based index of the column of the cell to select.
     */
    findEditCellButton(rowIndex: number, columnIndex: number): ElementWrapper;
    findEditingCell(): ElementWrapper;
    private _findEditingCellControls;
    findEditingCellSaveButton(): ElementWrapper;
    findEditingCellCancelButton(): ElementWrapper;
}
