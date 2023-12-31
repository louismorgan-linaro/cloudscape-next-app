import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import Option from '../internal/components/option';
import { fireNonCancelableEvent } from '../internal/events';
import checkControlled from '../internal/hooks/check-controlled';
import { getBaseProps } from '../internal/base-component';
import clsx from 'clsx';
import styles from './styles.css.js';
import TokenList from '../internal/components/token-list';
import { Token } from './token';
export default function InternalTokenGroup(_a) {
    var { alignment, items, onDismiss, limit, i18nStrings, __internalRootRef } = _a, props = __rest(_a, ["alignment", "items", "onDismiss", "limit", "i18nStrings", "__internalRootRef"]);
    checkControlled('TokenGroup', 'items', items, 'onDismiss', onDismiss);
    const [removedItemIndex, setRemovedItemIndex] = useState(null);
    const baseProps = getBaseProps(props);
    const hasItems = items.length > 0;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, hasItems && styles['has-items']), ref: __internalRootRef }),
        React.createElement(TokenList, { alignment: alignment, items: items, limit: limit, renderItem: (item, itemIndex) => (React.createElement(Token, { ariaLabel: item.label, dismissLabel: item.dismissLabel, onDismiss: () => {
                    fireNonCancelableEvent(onDismiss, { itemIndex });
                    setRemovedItemIndex(itemIndex);
                }, disabled: item.disabled },
                React.createElement(Option, { option: item, isGenericGroup: false }))), i18nStrings: i18nStrings, removedItemIndex: removedItemIndex })));
}
//# sourceMappingURL=internal.js.map