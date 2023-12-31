import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import ItemsList from '../items-list';
const CategoryElement = ({ item, onItemActivate, onGroupToggle, targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, disabled, variant, }) => {
    // Hide the category title element from screen readers because it will be
    // provided as an ARIA label.
    return (React.createElement("li", { className: clsx(styles.category, styles[`variant-${variant}`], disabled && styles.disabled), role: "presentation", "aria-disabled": disabled ? 'true' : undefined },
        item.text && (React.createElement("p", { className: clsx(styles.header, { [styles.disabled]: disabled }), "aria-hidden": "true" }, item.text)),
        React.createElement("ul", { className: clsx(styles['items-list-container']), role: "group", "aria-label": item.text }, item.items && (React.createElement(ItemsList, { items: item.items, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, categoryDisabled: disabled, hasCategoryHeader: !!item.text, variant: variant })))));
};
export default CategoryElement;
//# sourceMappingURL=category-element.js.map