// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import TokenLimitToggle from './token-limit-toggle';
import styles from './styles.css.js';
import { useUniqueId } from '../../hooks/use-unique-id';
import clsx from 'clsx';
import { useTokenFocusController } from './token-focus-controller';
export default function TokenList({ items, alignment, renderItem, limit, after, i18nStrings, removedItemIndex, }) {
    const tokenListRef = useTokenFocusController({ removedItemIndex });
    const controlId = useUniqueId();
    const [expanded, setExpanded] = useState(false);
    const hasItems = items.length > 0;
    const hasHiddenItems = hasItems && limit !== undefined && items.length > limit;
    const visibleItems = hasHiddenItems && !expanded ? items.slice(0, limit) : items;
    const hasVisibleItems = visibleItems.length > 0;
    const toggle = hasHiddenItems ? (React.createElement("div", { className: styles[`toggle-container-${alignment}`] },
        React.createElement(TokenLimitToggle, { controlId: hasVisibleItems ? controlId : undefined, allHidden: limit === 0, expanded: expanded, numberOfHiddenOptions: items.length - visibleItems.length, i18nStrings: i18nStrings, onClick: () => setExpanded(!expanded) }))) : null;
    if (alignment === 'inline') {
        return (React.createElement("div", { ref: tokenListRef, className: clsx(styles.root, styles.horizontal) },
            hasItems && (React.createElement("ul", { id: controlId, className: styles.list }, visibleItems.map((item, itemIndex) => (React.createElement("li", { key: itemIndex, className: styles['list-item'], "aria-setsize": items.length, "aria-posinset": itemIndex + 1 }, renderItem(item, itemIndex)))))),
            toggle,
            after && React.createElement("div", { className: styles.separator }),
            after));
    }
    return (React.createElement("div", { ref: tokenListRef, className: clsx(styles.root, styles.vertical) },
        hasVisibleItems && (React.createElement("ul", { id: controlId, className: clsx(styles.list, styles[alignment]) }, visibleItems.map((item, itemIndex) => (React.createElement("li", { key: itemIndex, className: styles['list-item'], "aria-setsize": items.length, "aria-posinset": itemIndex + 1 }, renderItem(item, itemIndex)))))),
        toggle,
        after));
}
//# sourceMappingURL=index.js.map