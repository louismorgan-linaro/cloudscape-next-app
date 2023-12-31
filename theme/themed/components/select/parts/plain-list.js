// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import OptionsList from '../../internal/components/options-list';
import React, { forwardRef, useImperativeHandle } from 'react';
import { renderOptions } from '../utils/render-options';
import { scrollElementIntoView } from '../../internal/utils/scrollable-containers';
import styles from './styles.css.js';
const PlainList = ({ menuProps, getOptionProps, filteredOptions, filteringValue, highlightType, checkboxes, hasDropdownStatus, listBottom, useInteractiveGroups, screenReaderContent, }, ref) => {
    const menuRef = menuProps.ref;
    useImperativeHandle(ref, () => (index) => {
        var _a;
        const item = (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-mouse-target="${index}"]`);
        if (highlightType === 'keyboard' && item) {
            scrollElementIntoView(item);
        }
    }, [highlightType, menuRef]);
    return (React.createElement(OptionsList, Object.assign({}, menuProps),
        renderOptions({
            options: filteredOptions,
            getOptionProps,
            filteringValue,
            highlightType,
            checkboxes,
            hasDropdownStatus,
            useInteractiveGroups,
            screenReaderContent,
        }),
        listBottom ? (React.createElement("li", { role: "option", className: styles['list-bottom'] }, listBottom)) : null));
};
export default forwardRef(PlainList);
//# sourceMappingURL=plain-list.js.map