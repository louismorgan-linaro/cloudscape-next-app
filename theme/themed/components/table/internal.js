import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { getVisualContextClassname } from '../internal/components/visual-context';
import InternalContainer from '../container/internal';
import { getBaseProps } from '../internal/base-component';
import ToolsHeader from './tools-header';
import Thead from './thead';
import { TableBodyCell } from './body-cell';
import InternalStatusIndicator from '../status-indicator/internal';
import { supportsStickyPosition } from '../internal/utils/dom';
import { checkSortingState, getColumnKey, getItemKey, getVisibleColumnDefinitions, toContainerVariant } from './utils';
import { useRowEvents } from './use-row-events';
import { SelectionControl, focusMarkers, useSelectionFocusMove, useSelection } from './selection';
import { fireNonCancelableEvent } from '../internal/events';
import { isDevelopment } from '../internal/is-development';
import { ColumnWidthsProvider, DEFAULT_COLUMN_WIDTH } from './use-column-widths';
import { useScrollSync } from '../internal/hooks/use-scroll-sync';
import { ResizeTracker } from './resizer';
import styles from './styles.css.js';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import StickyHeader from './sticky-header';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import useMouseDownTarget from '../internal/hooks/use-mouse-down-target';
import { useDynamicOverlap } from '../internal/hooks/use-dynamic-overlap';
import LiveRegion from '../internal/components/live-region';
import useTableFocusNavigation from './use-table-focus-navigation';
import { TableTdElement } from './body-cell/td-element';
import { useStickyColumns } from './sticky-columns';
import { StickyScrollbar } from './sticky-scrollbar';
import { checkColumnWidths } from './column-widths-utils';
import { useMobile } from '../internal/hooks/use-mobile';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
import { getTableRoleProps, getTableRowRoleProps, getTableWrapperRoleProps } from './table-role';
import { useCellEditing } from './use-cell-editing';
import { LinkDefaultVariantContext } from '../internal/context/link-default-variant-context';
import { CollectionLabelContext } from '../internal/context/collection-label-context';
import { useFunnelSubStep } from '../internal/analytics/hooks/use-funnel';
const SELECTION_COLUMN_WIDTH = 54;
const selectionColumnId = Symbol('selection-column-id');
export const InternalTableAsSubstep = React.forwardRef((props, ref) => {
    const { subStepRef, funnelSubStepProps } = useFunnelSubStep();
    const tableProps = Object.assign(Object.assign({}, props), { __subStepRef: subStepRef, __funnelSubStepProps: funnelSubStepProps });
    return React.createElement(InternalTable, Object.assign({}, tableProps, { ref: ref }));
});
const InternalTable = React.forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f;
    var { header, footer, empty, filter, pagination, preferences, items, columnDefinitions, trackBy, loading, loadingText, selectionType, selectedItems, isItemDisabled, ariaLabels, onSelectionChange, onSortingChange, sortingColumn, sortingDescending, sortingDisabled, visibleColumns, stickyHeader, stickyHeaderVerticalOffset, onRowClick, onRowContextMenu, wrapLines, stripedRows, contentDensity, submitEdit, onEditCancel, resizableColumns, onColumnWidthsChange, variant, __internalRootRef, totalItemsCount, firstIndex, renderAriaLive, stickyColumns, columnDisplay, __funnelSubStepProps, __subStepRef } = _a, rest = __rest(_a, ["header", "footer", "empty", "filter", "pagination", "preferences", "items", "columnDefinitions", "trackBy", "loading", "loadingText", "selectionType", "selectedItems", "isItemDisabled", "ariaLabels", "onSelectionChange", "onSortingChange", "sortingColumn", "sortingDescending", "sortingDisabled", "visibleColumns", "stickyHeader", "stickyHeaderVerticalOffset", "onRowClick", "onRowContextMenu", "wrapLines", "stripedRows", "contentDensity", "submitEdit", "onEditCancel", "resizableColumns", "onColumnWidthsChange", "variant", "__internalRootRef", "totalItemsCount", "firstIndex", "renderAriaLive", "stickyColumns", "columnDisplay", "__funnelSubStepProps", "__subStepRef"]);
    const baseProps = getBaseProps(rest);
    stickyHeader = stickyHeader && supportsStickyPosition();
    const isMobile = useMobile();
    const [containerWidth, wrapperMeasureRef] = useContainerQuery(rect => rect.contentBoxWidth);
    const wrapperRefObject = useRef(null);
    const [tableWidth, tableMeasureRef] = useContainerQuery(rect => rect.contentBoxWidth);
    const tableRefObject = useRef(null);
    const secondaryWrapperRef = React.useRef(null);
    const theadRef = useRef(null);
    const stickyHeaderRef = React.useRef(null);
    const scrollbarRef = React.useRef(null);
    const _g = useCellEditing({ onCancel: onEditCancel, onSubmit: submitEdit }), { cancelEdit } = _g, cellEditing = __rest(_g, ["cancelEdit"]);
    useImperativeHandle(ref, () => {
        var _a;
        return ({
            scrollToTop: ((_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop) || (() => undefined),
            cancelEdit,
        });
    }, [cancelEdit]);
    const handleScroll = useScrollSync([wrapperRefObject, scrollbarRef, secondaryWrapperRef]);
    const { moveFocusDown, moveFocusUp, moveFocus } = useSelectionFocusMove(selectionType, items.length);
    const { onRowClickHandler, onRowContextMenuHandler } = useRowEvents({ onRowClick, onRowContextMenu });
    const visibleColumnDefinitions = getVisibleColumnDefinitions({
        columnDefinitions,
        columnDisplay,
        visibleColumns,
    });
    const { isItemSelected, getSelectAllProps, getItemSelectionProps, updateShiftToggle } = useSelection({
        items,
        trackBy,
        selectedItems,
        selectionType,
        isItemDisabled,
        onSelectionChange,
        ariaLabels,
        loading,
    });
    if (isDevelopment) {
        if (resizableColumns) {
            checkColumnWidths(columnDefinitions);
        }
        if (sortingColumn === null || sortingColumn === void 0 ? void 0 : sortingColumn.sortingComparator) {
            checkSortingState(columnDefinitions, sortingColumn.sortingComparator);
        }
    }
    const isVisualRefresh = useVisualRefresh();
    const computedVariant = isVisualRefresh
        ? variant
        : ['embedded', 'full-page'].indexOf(variant) > -1
            ? 'container'
            : variant;
    const hasHeader = !!(header || filter || pagination || preferences);
    const hasSelection = !!selectionType;
    const hasFooterPagination = isMobile && variant === 'full-page' && !!pagination;
    const hasFooter = !!footer || hasFooterPagination;
    const headerIdRef = useRef(undefined);
    const isLabelledByHeader = !(ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tableLabel) && !!header;
    const setHeaderRef = useCallback((id) => {
        headerIdRef.current = id;
    }, []);
    const visibleColumnWidthsWithSelection = [];
    const visibleColumnIdsWithSelection = [];
    if (hasSelection) {
        visibleColumnWidthsWithSelection.push({ id: selectionColumnId, width: SELECTION_COLUMN_WIDTH });
        visibleColumnIdsWithSelection.push(selectionColumnId);
    }
    for (let columnIndex = 0; columnIndex < visibleColumnDefinitions.length; columnIndex++) {
        const columnId = getColumnKey(visibleColumnDefinitions[columnIndex], columnIndex);
        visibleColumnWidthsWithSelection.push(Object.assign(Object.assign({}, visibleColumnDefinitions[columnIndex]), { id: columnId }));
        visibleColumnIdsWithSelection.push(columnId);
    }
    const stickyState = useStickyColumns({
        visibleColumns: visibleColumnIdsWithSelection,
        stickyColumnsFirst: ((_b = stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.first) !== null && _b !== void 0 ? _b : 0) + ((stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.first) && hasSelection ? 1 : 0),
        stickyColumnsLast: (stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.last) || 0,
    });
    const hasStickyColumns = !!(((_c = stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.first) !== null && _c !== void 0 ? _c : 0) + ((_d = stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.last) !== null && _d !== void 0 ? _d : 0) > 0);
    const hasEditableCells = !!columnDefinitions.find(col => col.editConfig);
    const tableRole = hasEditableCells ? 'grid-default' : 'table';
    const theadProps = {
        containerWidth,
        selectionType,
        getSelectAllProps,
        columnDefinitions: visibleColumnDefinitions,
        variant: computedVariant,
        wrapLines,
        resizableColumns,
        sortingColumn,
        sortingDisabled,
        sortingDescending,
        onSortingChange,
        onFocusMove: moveFocus,
        onResizeFinish(newWidth) {
            const widthsDetail = columnDefinitions.map((column, index) => newWidth[getColumnKey(column, index)] || column.width || DEFAULT_COLUMN_WIDTH);
            const widthsChanged = widthsDetail.some((width, index) => columnDefinitions[index].width !== width);
            if (widthsChanged) {
                fireNonCancelableEvent(onColumnWidthsChange, { widths: widthsDetail });
            }
        },
        singleSelectionHeaderAriaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.selectionGroupLabel,
        stripedRows,
        stickyState,
        selectionColumnId,
        tableRole,
    };
    const wrapperRef = useMergeRefs(wrapperMeasureRef, wrapperRefObject, stickyState.refs.wrapper);
    const tableRef = useMergeRefs(tableMeasureRef, tableRefObject, stickyState.refs.table);
    const wrapperProps = getTableWrapperRoleProps({
        tableRole,
        isScrollable: !!(tableWidth && containerWidth && tableWidth > containerWidth),
        ariaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tableLabel,
    });
    const getMouseDownTarget = useMouseDownTarget();
    const hasDynamicHeight = computedVariant === 'full-page';
    const overlapElement = useDynamicOverlap({ disabled: !hasDynamicHeight });
    useTableFocusNavigation(selectionType, tableRefObject, visibleColumnDefinitions, items === null || items === void 0 ? void 0 : items.length);
    const toolsHeaderWrapper = useRef(null);
    // If is mobile, we take into consideration the AppLayout's mobile bar and we subtract the tools wrapper height so only the table header is sticky
    const toolsHeaderHeight = (_f = (_e = toolsHeaderWrapper === null || toolsHeaderWrapper === void 0 ? void 0 : toolsHeaderWrapper.current) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect().height) !== null && _f !== void 0 ? _f : 0;
    const totalColumnsCount = selectionType ? visibleColumnDefinitions.length + 1 : visibleColumnDefinitions.length;
    return (React.createElement(LinkDefaultVariantContext.Provider, { value: { defaultVariant: 'primary' } },
        React.createElement(ColumnWidthsProvider, { visibleColumns: visibleColumnWidthsWithSelection, resizableColumns: resizableColumns },
            React.createElement(InternalContainer, Object.assign({}, baseProps, { __internalRootRef: __internalRootRef, className: clsx(baseProps.className, styles.root), __funnelSubStepProps: __funnelSubStepProps, __subStepRef: __subStepRef, header: React.createElement(React.Fragment, null,
                    hasHeader && (React.createElement("div", { ref: overlapElement, className: clsx(hasDynamicHeight && [styles['dark-header'], 'awsui-context-content-header']) },
                        React.createElement("div", { ref: toolsHeaderWrapper, className: clsx(styles['header-controls'], styles[`variant-${computedVariant}`]) },
                            React.createElement(CollectionLabelContext.Provider, { value: { assignId: setHeaderRef } },
                                React.createElement(ToolsHeader, { header: header, filter: filter, pagination: pagination, preferences: preferences }))))),
                    stickyHeader && (React.createElement(StickyHeader, { ref: stickyHeaderRef, variant: computedVariant, theadProps: theadProps, wrapperRef: wrapperRefObject, theadRef: theadRef, secondaryWrapperRef: secondaryWrapperRef, tableRef: tableRefObject, onScroll: handleScroll, tableHasHeader: hasHeader, contentDensity: contentDensity, tableRole: tableRole }))), disableHeaderPaddings: true, disableContentPaddings: true, variant: toContainerVariant(computedVariant), __disableFooterPaddings: true, __disableFooterDivider: true, __disableStickyMobile: false, footer: hasFooter ? (React.createElement("div", { className: clsx(styles['footer-wrapper'], styles[`variant-${computedVariant}`]) },
                    React.createElement("div", { className: clsx(styles.footer, hasFooterPagination && styles['footer-with-pagination']) },
                        footer && React.createElement("span", null, footer),
                        hasFooterPagination && React.createElement("div", { className: styles['footer-pagination'] }, pagination)))) : null, __stickyHeader: stickyHeader, __mobileStickyOffset: toolsHeaderHeight, __stickyOffset: stickyHeaderVerticalOffset }, focusMarkers.root),
                React.createElement("div", Object.assign({ ref: wrapperRef, className: clsx(styles.wrapper, styles[`variant-${computedVariant}`], {
                        [styles['has-footer']]: hasFooter,
                        [styles['has-header']]: hasHeader,
                    }), style: stickyState.style.wrapper, onScroll: handleScroll }, wrapperProps),
                    !!renderAriaLive && !!firstIndex && (React.createElement(LiveRegion, null,
                        React.createElement("span", null, renderAriaLive({ totalItemsCount, firstIndex, lastIndex: firstIndex + items.length - 1 })))),
                    React.createElement("table", Object.assign({ ref: tableRef, className: clsx(styles.table, resizableColumns && styles['table-layout-fixed'], contentDensity === 'compact' && getVisualContextClassname('compact-table')) }, getTableRoleProps({
                        tableRole,
                        totalItemsCount,
                        totalColumnsCount: totalColumnsCount,
                        ariaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tableLabel,
                        ariaLabelledBy: isLabelledByHeader && headerIdRef.current ? headerIdRef.current : undefined,
                    })),
                        React.createElement(Thead, Object.assign({ ref: theadRef, hidden: stickyHeader, onFocusedComponentChange: focusId => { var _a; return (_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.setFocus(focusId); } }, theadProps)),
                        React.createElement("tbody", null, loading || items.length === 0 ? (React.createElement("tr", null,
                            React.createElement("td", { colSpan: totalColumnsCount, className: clsx(styles['cell-merged'], hasFooter && styles['has-footer']) },
                                React.createElement("div", { className: styles['cell-merged-content'], style: {
                                        width: (supportsStickyPosition() && containerWidth && Math.floor(containerWidth)) || undefined,
                                    } }, loading ? (React.createElement(InternalStatusIndicator, { type: "loading", className: styles.loading, wrapText: true },
                                    React.createElement(LiveRegion, { visible: true }, loadingText))) : (React.createElement("div", { className: styles.empty }, empty)))))) : (items.map((item, rowIndex) => {
                            const firstVisible = rowIndex === 0;
                            const lastVisible = rowIndex === items.length - 1;
                            const isEven = rowIndex % 2 === 0;
                            const isSelected = !!selectionType && isItemSelected(item);
                            const isPrevSelected = !!selectionType && !firstVisible && isItemSelected(items[rowIndex - 1]);
                            const isNextSelected = !!selectionType && !lastVisible && isItemSelected(items[rowIndex + 1]);
                            return (React.createElement("tr", Object.assign({ key: getItemKey(trackBy, item, rowIndex), className: clsx(styles.row, isSelected && styles['row-selected']), onFocus: ({ currentTarget }) => {
                                    var _a;
                                    // When an element inside table row receives focus we want to adjust the scroll.
                                    // However, that behaviour is unwanted when the focus is received as result of a click
                                    // as it causes the click to never reach the target element.
                                    if (!currentTarget.contains(getMouseDownTarget())) {
                                        (_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.scrollToRow(currentTarget);
                                    }
                                } }, focusMarkers.item, { onClick: onRowClickHandler && onRowClickHandler.bind(null, rowIndex, item), onContextMenu: onRowContextMenuHandler && onRowContextMenuHandler.bind(null, rowIndex, item) }, getTableRowRoleProps({ tableRole, firstIndex, rowIndex })),
                                selectionType !== undefined && (React.createElement(TableTdElement, { className: clsx(styles['selection-control']), isVisualRefresh: isVisualRefresh, isFirstRow: firstVisible, isLastRow: lastVisible, isSelected: isSelected, isNextSelected: isNextSelected, isPrevSelected: isPrevSelected, wrapLines: false, isEvenRow: isEven, stripedRows: stripedRows, hasSelection: hasSelection, hasFooter: hasFooter, stickyState: stickyState, columnId: selectionColumnId, colIndex: 0, tableRole: tableRole },
                                    React.createElement(SelectionControl, Object.assign({ onFocusDown: moveFocusDown, onFocusUp: moveFocusUp, onShiftToggle: updateShiftToggle }, getItemSelectionProps(item))))),
                                visibleColumnDefinitions.map((column, colIndex) => {
                                    var _a;
                                    const isEditing = cellEditing.checkEditing({ rowIndex, colIndex });
                                    const successfulEdit = cellEditing.checkLastSuccessfulEdit({ rowIndex, colIndex });
                                    const isEditable = !!column.editConfig && !cellEditing.isLoading;
                                    return (React.createElement(TableBodyCell, { key: getColumnKey(column, colIndex), style: resizableColumns
                                            ? {}
                                            : {
                                                width: column.width,
                                                minWidth: column.minWidth,
                                                maxWidth: column.maxWidth,
                                            }, ariaLabels: ariaLabels, column: column, item: item, wrapLines: wrapLines, isEditable: isEditable, isEditing: isEditing, isRowHeader: column.isRowHeader, isFirstRow: firstVisible, isLastRow: lastVisible, isSelected: isSelected, isNextSelected: isNextSelected, isPrevSelected: isPrevSelected, successfulEdit: successfulEdit, onEditStart: () => cellEditing.startEdit({ rowIndex, colIndex }), onEditEnd: editCancelled => cellEditing.completeEdit({ rowIndex, colIndex }, editCancelled), submitEdit: cellEditing.submitEdit, hasFooter: hasFooter, stripedRows: stripedRows, isEvenRow: isEven, columnId: (_a = column.id) !== null && _a !== void 0 ? _a : colIndex, colIndex: selectionType !== undefined ? colIndex + 1 : colIndex, stickyState: stickyState, isVisualRefresh: isVisualRefresh, tableRole: tableRole }));
                                })));
                        })))),
                    resizableColumns && React.createElement(ResizeTracker, null)),
                React.createElement(StickyScrollbar, { ref: scrollbarRef, wrapperRef: wrapperRefObject, tableRef: tableRefObject, onScroll: handleScroll, hasStickyColumns: hasStickyColumns })))));
});
export default InternalTable;
//# sourceMappingURL=internal.js.map