import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, useImperativeHandle, useRef } from 'react';
import styles from './styles.css.js';
import { getCardsPerRow } from './cards-layout-helper';
import { getBaseProps } from '../internal/base-component';
import ToolsHeader from '../table/tools-header';
import { getItemKey } from '../table/utils';
import { SelectionControl, focusMarkers, useSelectionFocusMove, useSelection, } from '../table/selection';
import { InternalContainerAsSubstep } from '../container/internal';
import InternalStatusIndicator from '../status-indicator/internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import stickyScrolling from '../table/sticky-scrolling';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import LiveRegion from '../internal/components/live-region';
import useMouseDownTarget from '../internal/hooks/use-mouse-down-target';
import { useMobile } from '../internal/hooks/use-mobile';
import { supportsStickyPosition } from '../internal/utils/dom';
import { useInternalI18n } from '../i18n/context';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
import { AnalyticsFunnelSubStep } from '../internal/analytics/components/analytics-funnel';
import { CollectionLabelContext } from '../internal/context/collection-label-context';
import { LinkDefaultVariantContext } from '../internal/context/link-default-variant-context';
const Cards = React.forwardRef(function (_a, ref) {
    var { items = [], cardDefinition, cardsPerRow = [], header, filter, pagination, preferences, empty, loading, loadingText, trackBy, selectedItems, selectionType, isItemDisabled, onSelectionChange, ariaLabels, visibleSections, stickyHeader, stickyHeaderVerticalOffset, variant = 'container', renderAriaLive, firstIndex, totalItemsCount } = _a, rest = __rest(_a, ["items", "cardDefinition", "cardsPerRow", "header", "filter", "pagination", "preferences", "empty", "loading", "loadingText", "trackBy", "selectedItems", "selectionType", "isItemDisabled", "onSelectionChange", "ariaLabels", "visibleSections", "stickyHeader", "stickyHeaderVerticalOffset", "variant", "renderAriaLive", "firstIndex", "totalItemsCount"]);
    const { __internalRootRef } = useBaseComponent('Cards');
    const baseProps = getBaseProps(rest);
    const isRefresh = useVisualRefresh();
    const isMobile = useMobile();
    const computedVariant = isRefresh ? variant : 'container';
    const headerIdRef = useRef(undefined);
    const setHeaderRef = useCallback((id) => {
        headerIdRef.current = id;
    }, []);
    const isLabelledByHeader = !(ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.cardsLabel) && !!header;
    const [columns, measureRef] = useContainerQuery(({ contentBoxWidth }) => getCardsPerRow(contentBoxWidth, cardsPerRow), [cardsPerRow]);
    const refObject = useRef(null);
    const mergedRef = useMergeRefs(measureRef, refObject, __internalRootRef);
    const getMouseDownTarget = useMouseDownTarget();
    const i18n = useInternalI18n('cards');
    const { isItemSelected, getItemSelectionProps, updateShiftToggle } = useSelection({
        items,
        trackBy,
        selectedItems,
        selectionType,
        isItemDisabled,
        onSelectionChange,
        ariaLabels: {
            itemSelectionLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.itemSelectionLabel,
            selectionGroupLabel: i18n('ariaLabels.selectionGroupLabel', ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.selectionGroupLabel),
        },
    });
    const hasToolsHeader = header || filter || pagination || preferences;
    const hasFooterPagination = isMobile && variant === 'full-page' && !!pagination;
    const headerRef = useRef(null);
    const { scrollToTop, scrollToItem } = stickyScrolling(refObject, headerRef);
    stickyHeader = supportsStickyPosition() && !isMobile && stickyHeader;
    const onCardFocus = event => {
        // When an element inside card receives focus we want to adjust the scroll.
        // However, that behavior is unwanted when the focus is received as result of a click
        // as it causes the click to never reach the target element.
        if (stickyHeader && !event.currentTarget.contains(getMouseDownTarget())) {
            scrollToItem(event.currentTarget);
        }
    };
    useImperativeHandle(ref, () => ({
        scrollToTop: () => {
            if (stickyHeader) {
                scrollToTop();
            }
        },
    }), [stickyHeader, scrollToTop]);
    let status;
    if (loading) {
        status = (React.createElement("div", { className: styles.loading },
            React.createElement(InternalStatusIndicator, { type: "loading" },
                React.createElement(LiveRegion, { visible: true }, loadingText))));
    }
    else if (empty && !items.length) {
        status = React.createElement("div", { className: styles.empty }, empty);
    }
    return (React.createElement(LinkDefaultVariantContext.Provider, { value: { defaultVariant: 'primary' } },
        React.createElement(AnalyticsFunnelSubStep, null,
            React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: mergedRef }),
                React.createElement(InternalContainerAsSubstep, { header: hasToolsHeader && (React.createElement("div", { className: clsx(styles.header, isRefresh && styles['header-refresh'], styles[`header-variant-${computedVariant}`]) },
                        React.createElement(CollectionLabelContext.Provider, { value: { assignId: setHeaderRef } },
                            React.createElement(ToolsHeader, { header: header, filter: filter, pagination: pagination, preferences: preferences })))), footer: hasFooterPagination && React.createElement("div", { className: styles['footer-pagination'] }, pagination), disableContentPaddings: true, disableHeaderPaddings: computedVariant === 'full-page', variant: computedVariant === 'container' ? 'cards' : computedVariant, __stickyHeader: stickyHeader, __stickyOffset: stickyHeaderVerticalOffset, __headerRef: headerRef, __darkHeader: computedVariant === 'full-page', __disableFooterDivider: true },
                    React.createElement("div", { className: clsx(hasToolsHeader && styles['has-header']) },
                        !!renderAriaLive && !!firstIndex && (React.createElement(LiveRegion, null,
                            React.createElement("span", null, renderAriaLive({ totalItemsCount, firstIndex, lastIndex: firstIndex + items.length - 1 })))), status !== null && status !== void 0 ? status : (React.createElement(CardsList, { items: items, cardDefinition: cardDefinition, trackBy: trackBy, selectionType: selectionType, columns: columns, isItemSelected: isItemSelected, getItemSelectionProps: getItemSelectionProps, visibleSections: visibleSections, updateShiftToggle: updateShiftToggle, onFocus: onCardFocus, ariaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.cardsLabel, ariaLabelledby: isLabelledByHeader && headerIdRef.current ? headerIdRef.current : undefined }))))))));
});
export default Cards;
const CardsList = ({ items, cardDefinition, trackBy, selectionType, columns, isItemSelected, getItemSelectionProps, visibleSections, updateShiftToggle, onFocus, ariaLabelledby, ariaLabel, }) => {
    const selectable = !!selectionType;
    const { moveFocusDown, moveFocusUp } = useSelectionFocusMove(selectionType, items.length);
    let visibleSectionsDefinition = cardDefinition.sections || [];
    visibleSectionsDefinition = visibleSections
        ? visibleSectionsDefinition.filter((section) => section.id && visibleSections.indexOf(section.id) !== -1)
        : visibleSectionsDefinition;
    let listRole = undefined;
    let listItemRole = undefined;
    if (selectable) {
        listRole = 'group';
        listItemRole = 'presentation';
    }
    return (React.createElement("ol", Object.assign({ className: clsx(styles.list, styles[`list-grid-${columns || 1}`]), role: listRole, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel }, (focusMarkers && focusMarkers.root)), items.map((item, index) => (React.createElement("li", Object.assign({ className: clsx(styles.card, {
            [styles['card-selectable']]: selectable,
            [styles['card-selected']]: selectable && isItemSelected(item),
        }), key: getItemKey(trackBy, item, index), onFocus: onFocus }, (focusMarkers && focusMarkers.item), { role: listItemRole }),
        React.createElement("div", { className: styles['card-inner'] },
            React.createElement("div", { className: styles['card-header'] },
                React.createElement("div", { className: styles['card-header-inner'] }, cardDefinition.header ? cardDefinition.header(item) : ''),
                selectable && (React.createElement("div", { className: styles['selection-control'] },
                    React.createElement(SelectionControl, Object.assign({ onFocusDown: moveFocusDown, onFocusUp: moveFocusUp, onShiftToggle: updateShiftToggle }, getItemSelectionProps(item)))))),
            visibleSectionsDefinition.map(({ width = 100, header, content, id }, index) => (React.createElement("div", { key: id || index, className: styles.section, style: { width: `${width}%` } },
                header ? React.createElement("div", { className: styles['section-header'] }, header) : '',
                content ? React.createElement("div", { className: styles['section-content'] }, content(item)) : '')))))))));
};
applyDisplayName(Cards, 'Cards');
//# sourceMappingURL=index.js.map