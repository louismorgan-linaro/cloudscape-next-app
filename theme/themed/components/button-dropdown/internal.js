import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getBaseProps } from '../internal/base-component';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import Dropdown from '../internal/components/dropdown';
import ItemsList from './items-list';
import { useButtonDropdown } from './utils/use-button-dropdown';
import OptionsList from '../internal/components/options-list';
import { InternalButton } from '../button/internal';
import { useMobile } from '../internal/hooks/use-mobile';
import useForwardFocus from '../internal/hooks/forward-focus';
import InternalBox from '../box/internal';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode/index.js';
import { useFunnel } from '../internal/analytics/hooks/use-funnel.js';
const InternalButtonDropdown = React.forwardRef((_a, ref) => {
    var _b;
    var { items, variant = 'normal', loading = false, loadingText, disabled = false, expandableGroups = false, children, onItemClick, onItemFollow, customTriggerBuilder, expandToViewport, ariaLabel, title, description, preferCenter, mainAction, __internalRootRef } = _a, props = __rest(_a, ["items", "variant", "loading", "loadingText", "disabled", "expandableGroups", "children", "onItemClick", "onItemFollow", "customTriggerBuilder", "expandToViewport", "ariaLabel", "title", "description", "preferCenter", "mainAction", "__internalRootRef"]);
    const isInRestrictedView = useMobile();
    const dropdownId = useUniqueId('dropdown');
    for (const item of items) {
        checkSafeUrl('ButtonDropdown', item.href);
    }
    if (mainAction) {
        checkSafeUrl('ButtonDropdown', mainAction.href);
    }
    if (isDevelopment) {
        if (mainAction && variant !== 'primary' && variant !== 'normal') {
            warnOnce('ButtonDropdown', 'Main action is only supported for "primary" and "normal" component variant.');
        }
    }
    const isMainAction = mainAction && (variant === 'primary' || variant === 'normal');
    const isVisualRefresh = useVisualRefresh();
    const { isOpen, targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, onKeyDown, onKeyUp, onItemActivate, onGroupToggle, toggleDropdown, closeDropdown, setIsUsingMouse, } = useButtonDropdown({
        items,
        onItemClick,
        onItemFollow,
        onReturnFocus: () => { var _a; return (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        expandToViewport,
        hasExpandableGroups: expandableGroups,
        isInRestrictedView,
    });
    const handleMouseEvent = () => {
        setIsUsingMouse(true);
    };
    const baseProps = getBaseProps(props);
    const mainActionRef = useRef(null);
    const triggerRef = useRef(null);
    useForwardFocus(ref, isMainAction ? mainActionRef : triggerRef);
    const clickHandler = () => {
        if (!loading && !disabled) {
            // Prevent moving highlight on mobiles to avoid disabled state reason popup if defined.
            toggleDropdown({ moveHighlightOnOpen: !isInRestrictedView });
        }
    };
    const canBeOpened = !loading && !disabled;
    const triggerVariant = variant === 'navigation' ? undefined : variant === 'inline-icon' ? 'inline-icon' : variant;
    const iconProps = variant === 'icon' || variant === 'inline-icon'
        ? {
            iconName: 'ellipsis',
        }
        : {
            iconName: 'caret-down-filled',
            iconAlign: 'right',
            __iconClass: canBeOpened && isOpen ? styles['rotate-up'] : styles['rotate-down'],
        };
    const baseTriggerProps = Object.assign(Object.assign({ className: clsx(styles['trigger-button'], styles['test-utils-button-trigger']) }, iconProps), { variant: triggerVariant, loading,
        loadingText,
        disabled, onClick: (event) => {
            event.preventDefault();
            clickHandler();
        }, ariaLabel, ariaExpanded: canBeOpened && isOpen, formAction: 'none', __nativeAttributes: {
            'aria-haspopup': true,
        } });
    const triggerId = useUniqueId('awsui-button-dropdown__trigger');
    const triggerHasBadge = () => {
        const flatItems = items.flatMap(item => {
            if ('items' in item) {
                return item.items;
            }
            return item;
        });
        return (variant === 'icon' &&
            !!(flatItems === null || flatItems === void 0 ? void 0 : flatItems.find(item => {
                if ('badge' in item) {
                    return item.badge;
                }
            })));
    };
    let trigger = null;
    if (customTriggerBuilder) {
        trigger = (React.createElement("div", { className: styles['dropdown-trigger'] }, customTriggerBuilder({
            testUtilsClass: styles['test-utils-button-trigger'],
            ariaExpanded: canBeOpened && isOpen,
            onClick: clickHandler,
            triggerRef,
            ariaLabel,
            disabled,
            isOpen,
        })));
    }
    else if (isMainAction) {
        const { text, iconName, iconAlt, iconSvg, iconUrl, external, externalIconAriaLabel } = mainAction, mainActionProps = __rest(mainAction, ["text", "iconName", "iconAlt", "iconSvg", "iconUrl", "external", "externalIconAriaLabel"]);
        const mainActionIconProps = external
            ? { iconName: 'external', iconAlign: 'right' }
            : { iconName, iconAlt, iconSvg, iconUrl };
        const mainActionAriaLabel = externalIconAriaLabel
            ? `${(_b = mainAction.ariaLabel) !== null && _b !== void 0 ? _b : mainAction.text} ${mainAction.externalIconAriaLabel}`
            : undefined;
        trigger = (React.createElement("div", { role: "group", "aria-label": ariaLabel, className: styles['split-trigger-wrapper'] },
            React.createElement("div", { className: clsx(styles['trigger-item'], styles['split-trigger']), 
                // Close dropdown upon main action click unless event is cancelled.
                onClick: closeDropdown, 
                // Prevent keyboard events from propagation to the button dropdown handler.
                onKeyDown: e => e.stopPropagation(), onKeyUp: e => e.stopPropagation() },
                React.createElement(InternalButton, Object.assign({ ref: mainActionRef }, mainActionProps, mainActionIconProps, { className: styles['trigger-button'], variant: variant, ariaLabel: mainActionAriaLabel, formAction: "none" }), text)),
            React.createElement("div", { className: clsx(styles['trigger-item'], styles['dropdown-trigger'], isVisualRefresh && styles['visual-refresh']) },
                React.createElement(InternalButton, Object.assign({ ref: triggerRef }, baseTriggerProps)))));
    }
    else {
        trigger = (React.createElement("div", { className: styles['dropdown-trigger'] },
            React.createElement(InternalButton, Object.assign({ ref: triggerRef, id: triggerId }, baseTriggerProps, { badge: triggerHasBadge() }), children)));
    }
    const hasHeader = title || description;
    const headerId = useUniqueId('awsui-button-dropdown__header');
    const shouldLabelWithTrigger = !ariaLabel && !mainAction && variant !== 'icon' && variant !== 'inline-icon';
    const { loadingButtonCount } = useFunnel();
    useEffect(() => {
        if (loading) {
            loadingButtonCount.current++;
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                loadingButtonCount.current--;
            };
        }
    }, [loading, loadingButtonCount]);
    return (React.createElement("div", Object.assign({}, baseProps, { onKeyDown: onKeyDown, onKeyUp: onKeyUp, onMouseDown: handleMouseEvent, onMouseMove: handleMouseEvent, className: clsx(styles['button-dropdown'], styles[`variant-${variant}`], baseProps.className), "aria-owns": expandToViewport && isOpen ? dropdownId : undefined, ref: __internalRootRef }),
        React.createElement(Dropdown, { open: canBeOpened && isOpen, stretchWidth: false, stretchTriggerHeight: variant === 'navigation', expandToViewport: expandToViewport, preferCenter: preferCenter, onDropdownClose: () => toggleDropdown(), trigger: trigger, dropdownId: dropdownId },
            hasHeader && (React.createElement("div", { className: styles.header, id: headerId },
                title && (React.createElement("div", { className: styles.title },
                    React.createElement(InternalBox, { fontSize: "heading-s", fontWeight: "bold", color: "inherit", tagOverride: "h2", margin: { vertical: 'n', horizontal: 'n' } }, title))),
                description && (React.createElement(InternalBox, { fontSize: "body-s" },
                    React.createElement("span", { className: styles.description }, description))))),
            React.createElement(OptionsList, { open: canBeOpened && isOpen, position: "static", role: "menu", decreaseTopMargin: true, ariaLabel: ariaLabel, ariaLabelledby: hasHeader ? headerId : shouldLabelWithTrigger ? triggerId : undefined, statusType: "finished" },
                React.createElement(ItemsList, { items: items, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, hasExpandableGroups: expandableGroups, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, expandToViewport: expandToViewport, variant: variant })))));
});
export default InternalButtonDropdown;
//# sourceMappingURL=internal.js.map