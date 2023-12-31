// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalIcon from '../../icon/internal';
import ItemsList from '../items-list';
import Dropdown from '../../internal/components/dropdown';
import useHiddenDescription from '../utils/use-hidden-description';
import Tooltip from '../tooltip.js';
import { getMenuItemProps } from '../utils/menu-item';
const ExpandableCategoryElement = ({ item, onItemActivate, onGroupToggle, targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, disabled, expandToViewport, variant, }) => {
    const highlighted = isHighlighted(item);
    const expanded = isExpanded(item);
    const isKeyboardHighlighted = isKeyboardHighlight(item);
    const triggerRef = React.useRef(null);
    const ref = useRef(null);
    useEffect(() => {
        if (triggerRef.current && highlighted && !expanded) {
            triggerRef.current.focus();
        }
    }, [expanded, highlighted]);
    const onClick = event => {
        var _a;
        if (!disabled) {
            event.preventDefault();
            onGroupToggle(item, event);
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const onHover = (event) => {
        event.preventDefault();
        highlightItem(item);
    };
    const isDisabledWithReason = !!item.disabledReason && item.disabled;
    const { targetProps, descriptionEl } = useHiddenDescription(item.disabledReason);
    const trigger = item.text && (React.createElement("span", Object.assign({ className: clsx(styles.header, styles['expandable-header'], styles[`variant-${variant}`], {
            [styles.disabled]: disabled,
            [styles.highlighted]: highlighted,
            [styles['is-focused']]: isKeyboardHighlighted,
        }), 
        // We are using the roving tabindex technique to manage the focus state of the dropdown.
        // The current element will always have tabindex=0 which means that it can be tabbed to,
        // while all other items have tabindex=-1 so we can focus them when necessary.
        tabIndex: highlighted ? 0 : -1, ref: triggerRef }, getMenuItemProps({ parent: true, expanded, disabled }), (isDisabledWithReason ? targetProps : {})),
        item.text,
        React.createElement("span", { className: clsx(styles['expand-icon'], styles['expand-icon-right']) },
            React.createElement(InternalIcon, { name: "caret-down-filled" }))));
    let content;
    // If the category element is disabled, we do not render a dropdown.
    // Screenreaders are confused by additional sections
    if (isDisabledWithReason) {
        content = (React.createElement(Tooltip, { content: item.disabledReason },
            trigger,
            descriptionEl));
    }
    else if (disabled) {
        content = trigger;
    }
    else {
        content = (React.createElement(Dropdown, { open: expanded, stretchWidth: false, interior: true, expandToViewport: expandToViewport, trigger: trigger }, item.items && expanded && (React.createElement("ul", { role: "menu", "aria-label": item.text, className: clsx(styles['items-list-container']) },
            React.createElement(ItemsList, { items: item.items, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, variant: variant })))));
    }
    return (React.createElement("li", { className: clsx(styles.category, styles[`variant-${variant}`], styles.expandable, {
            [styles.expanded]: expanded,
            [styles.disabled]: disabled,
            [styles.highlighted]: highlighted,
        }), role: "presentation", "data-testid": item.id, ref: ref, onClick: onClick, onMouseEnter: onHover, onTouchStart: onHover }, content));
};
export default ExpandableCategoryElement;
//# sourceMappingURL=expandable-category-element.js.map