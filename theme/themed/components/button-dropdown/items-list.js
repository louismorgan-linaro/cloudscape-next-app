// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import ItemElement from './item-element';
import ExpandableCategoryElement from './category-elements/expandable-category-element';
import CategoryElement from './category-elements/category-element';
import { isItemGroup } from './utils/utils';
import { useMobile } from '../internal/hooks/use-mobile';
import MobileExpandableCategoryElement from './category-elements/mobile-expandable-category-element';
export default function ItemsList({ items, onItemActivate, onGroupToggle, targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, categoryDisabled = false, hasExpandableGroups = false, hasCategoryHeader = false, expandToViewport = false, variant = 'normal', }) {
    const isMobile = useMobile();
    const elements = items.map((item, index) => {
        var _a, _b, _c, _d;
        if (!isItemGroup(item)) {
            return (React.createElement(ItemElement, { key: index, item: item, onItemActivate: onItemActivate, disabled: (_a = item.disabled) !== null && _a !== void 0 ? _a : categoryDisabled, highlighted: isHighlighted(item), isKeyboardHighlighted: isKeyboardHighlight(item), highlightItem: highlightItem, first: index === 0 || isItemGroup(items[index - 1]), last: index === items.length - 1 || isItemGroup(items[index + 1]), hasCategoryHeader: hasCategoryHeader, variant: variant }));
        }
        if (hasExpandableGroups) {
            return item.text ? (isMobile ? (React.createElement(MobileExpandableCategoryElement, { key: index, item: item, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, disabled: (_b = item.disabled) !== null && _b !== void 0 ? _b : false, variant: variant })) : (React.createElement(ExpandableCategoryElement, { key: index, item: item, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, disabled: (_c = item.disabled) !== null && _c !== void 0 ? _c : false, expandToViewport: expandToViewport, variant: variant }))) : null;
        }
        return (React.createElement(CategoryElement, { key: index, item: item, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, disabled: (_d = item.disabled) !== null && _d !== void 0 ? _d : false, variant: variant }));
    });
    return React.createElement(React.Fragment, null, elements);
}
//# sourceMappingURL=items-list.js.map