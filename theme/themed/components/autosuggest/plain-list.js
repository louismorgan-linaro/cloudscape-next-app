// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import OptionsList from '../internal/components/options-list';
import { scrollElementIntoView } from '../internal/utils/scrollable-containers';
import { getBaseProps } from '../internal/base-component';
import AutosuggestOption from './autosuggest-option';
import styles from './styles.css.js';
export const getOptionProps = (index, item, filteredItems, highlightedA11yProps, highlightedOption, hasDropdownStatus) => {
    const nativeAttributes = item === highlightedOption ? highlightedA11yProps : {};
    const baseOptionProps = getBaseProps(nativeAttributes);
    const isLastItem = index === filteredItems.length - 1;
    const isNotEnteredTextItem = filteredItems.length > 1;
    const padBottom = !hasDropdownStatus && isNotEnteredTextItem && isLastItem;
    return Object.assign({ nativeAttributes, padBottom }, baseOptionProps);
};
const PlainList = ({ autosuggestItemsState, handleLoadMore, menuProps, enteredTextLabel, highlightedA11yProps, hasDropdownStatus, highlightText, listBottom, screenReaderContent, }) => {
    const listRef = useRef(null);
    useEffect(() => {
        var _a;
        const item = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-mouse-target="${autosuggestItemsState.highlightedIndex}"]`);
        if (autosuggestItemsState.highlightType === 'keyboard' && item) {
            scrollElementIntoView(item);
        }
    }, [autosuggestItemsState.highlightType, autosuggestItemsState.highlightedIndex]);
    return (React.createElement(OptionsList, Object.assign({}, menuProps, { onLoadMore: handleLoadMore, open: true, ref: listRef, 
        // to prevent closing the list when clicking the scrollbar on IE11
        nativeAttributes: { unselectable: 'on' } }),
        autosuggestItemsState.items.map((item, index) => {
            const optionProps = getOptionProps(index, item, autosuggestItemsState.items, highlightedA11yProps, autosuggestItemsState.highlightedOption, hasDropdownStatus);
            return (React.createElement(AutosuggestOption, Object.assign({ highlightText: highlightText, option: item, highlighted: item === autosuggestItemsState.highlightedOption, current: item.value === highlightText, key: index, "data-mouse-target": index, enteredTextLabel: enteredTextLabel, screenReaderContent: screenReaderContent, highlightType: autosuggestItemsState.highlightType }, optionProps)));
        }),
        listBottom ? (React.createElement("li", { role: "option", className: styles['list-bottom'] }, listBottom)) : null));
};
export default PlainList;
//# sourceMappingURL=plain-list.js.map