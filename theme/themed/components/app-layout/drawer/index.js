// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import { ToggleButton, CloseButton, togglesConfig } from '../toggles';
import testutilStyles from '../test-classes/styles.css.js';
import styles from './styles.css.js';
import OverflowMenu from './overflow-menu';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
import { useDensityMode } from '@cloudscape-design/component-toolkit/internal';
import { splitItems } from './drawers-helpers';
import { TOOLS_DRAWER_ID } from '../utils/use-drawers';
// We are using two landmarks per drawer, i.e. two NAVs and two ASIDEs, because of several
// known bugs in NVDA that cause focus changes within a container to sometimes not be
// announced. As a result, we use one region for the open button and one region for the
// actual drawer content, always hiding the other one when it's not visible.
// An alternative solution to follow a more classic implementation here to only have one
// button that triggers the opening/closing of the drawer also did not work due to another
// series of bugs in NVDA (together with Firefox) which prevent the changed expanded state
// from being announced.
// Even with this workaround in place, the announcement of the close button when opening a
// panel in NVDA is not working correctly. The suspected root cause is one of the bugs below
// as well.
// Relevant tickets:
// * https://github.com/nvaccess/nvda/issues/6606
// * https://github.com/nvaccess/nvda/issues/5825
// * https://github.com/nvaccess/nvda/issues/5247
// * https://github.com/nvaccess/nvda/pull/8869 (reverted PR that was going to fix it)
export const Drawer = React.forwardRef(({ contentClassName, toggleClassName, closeClassName, width, type, toggleRefs, topOffset, bottomOffset, ariaLabels, drawersAriaLabels, children, isOpen, isMobile, onToggle, onClick, onLoseFocus, drawers, resizeHandle, }, ref) => {
    const openButtonWrapperRef = useRef(null);
    const { TagName, iconName, getLabels } = togglesConfig[type];
    const { mainLabel, closeLabel, openLabel } = drawersAriaLabels !== null && drawersAriaLabels !== void 0 ? drawersAriaLabels : getLabels(ariaLabels);
    const drawerContentWidthOpen = isMobile ? undefined : width;
    const drawerContentWidth = isOpen ? drawerContentWidthOpen : undefined;
    const regularOpenButton = (React.createElement(TagName, { ref: openButtonWrapperRef, "aria-label": mainLabel, className: styles.toggle, "aria-hidden": isOpen },
        React.createElement(ToggleButton, { ref: toggleRefs.toggle, className: toggleClassName, iconName: iconName, ariaLabel: openLabel, onClick: () => onToggle(true), ariaExpanded: isOpen ? undefined : false })));
    return (React.createElement("div", { id: drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId, ref: ref, className: clsx(styles.drawer, {
            [styles['drawer-closed']]: !isOpen,
            [testutilStyles['drawer-closed']]: !isOpen,
            [styles['drawer-mobile']]: isMobile,
        }), style: { width: drawerContentWidth }, onBlur: onLoseFocus
            ? e => {
                if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                    onLoseFocus(e);
                }
            }
            : undefined, onClick: event => {
            var _a;
            if (onClick) {
                onClick(event);
            }
            if (!isOpen) {
                // to prevent calling onToggle from the drawer when it's called from the toggle button
                if (openButtonWrapperRef.current === event.target ||
                    !((_a = openButtonWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                    onToggle(true);
                }
            }
        } },
        React.createElement("div", { style: { width: drawerContentWidth, top: topOffset, bottom: bottomOffset }, className: clsx(styles['drawer-content'], styles['drawer-content-clickable'], contentClassName) },
            !isMobile && regularOpenButton,
            resizeHandle,
            React.createElement(TagName, { "aria-label": mainLabel, "aria-hidden": !isOpen },
                React.createElement(CloseButton, { ref: toggleRefs.close, className: closeClassName, ariaLabel: closeLabel, onClick: () => {
                        onToggle(false);
                        drawers === null || drawers === void 0 ? void 0 : drawers.onChange({ activeDrawerId: undefined });
                    } }),
                children))));
});
const DrawerTrigger = React.forwardRef(({ testUtilsClassName, ariaLabel, ariaExpanded, ariaControls, badge, itemId, isActive, trigger, onClick, }, ref) => (React.createElement("div", { className: clsx(styles['drawer-trigger'], isActive && styles['drawer-trigger-active']), onClick: onClick },
    React.createElement(ToggleButton, { ref: ref, className: testUtilsClassName, iconName: trigger.iconName, iconSvg: trigger.iconSvg, ariaLabel: ariaLabel, ariaExpanded: ariaExpanded, ariaControls: ariaControls, badge: badge, testId: itemId && `awsui-app-layout-trigger-${itemId}` }))));
export const DrawerTriggersBar = ({ isMobile, topOffset, bottomOffset, drawers }) => {
    const containerRef = React.useRef(null);
    const [containerHeight, triggersContainerRef] = useContainerQuery(rect => rect.contentBoxHeight);
    const isCompactMode = useDensityMode(containerRef) === 'compact';
    const getIndexOfOverflowItem = () => {
        if (containerHeight) {
            const ITEM_HEIGHT = isCompactMode ? 34 : 38;
            const overflowSpot = containerHeight / 1.5;
            const index = Math.floor(overflowSpot / ITEM_HEIGHT);
            return index;
        }
        return 0;
    };
    const { visibleItems, overflowItems } = splitItems(drawers === null || drawers === void 0 ? void 0 : drawers.items, getIndexOfOverflowItem(), drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId);
    return (React.createElement("div", { className: clsx(styles.drawer, styles['drawer-closed'], testutilStyles['drawer-closed'], {
            [styles['drawer-mobile']]: isMobile,
            [styles.hide]: (drawers === null || drawers === void 0 ? void 0 : drawers.items.length) === 1 && drawers.activeDrawerId !== undefined,
        }), ref: containerRef },
        React.createElement("div", { ref: triggersContainerRef, style: { top: topOffset, bottom: bottomOffset }, className: clsx(styles['drawer-content'], {
                [styles['drawer-content-clickable']]: (drawers === null || drawers === void 0 ? void 0 : drawers.items.length) === 1,
            }), role: "toolbar", "aria-orientation": "vertical", onClick: () => {
                (drawers === null || drawers === void 0 ? void 0 : drawers.items.length) === 1 &&
                    (drawers === null || drawers === void 0 ? void 0 : drawers.onChange({
                        activeDrawerId: drawers.items[0].id !== drawers.activeDrawerId ? drawers.items[0].id : undefined,
                    }));
            } }, !isMobile && (React.createElement("aside", { "aria-label": drawers === null || drawers === void 0 ? void 0 : drawers.ariaLabel, className: clsx(styles['drawer-triggers-wrapper'], testutilStyles['drawers-desktop-triggers-container']) },
            React.createElement(React.Fragment, null,
                visibleItems.map((item, index) => {
                    var _a;
                    return (React.createElement(DrawerTrigger, { key: index, testUtilsClassName: item.id === TOOLS_DRAWER_ID
                            ? clsx(testutilStyles['drawers-trigger'], testutilStyles['tools-toggle'])
                            : testutilStyles['drawers-trigger'], ariaExpanded: (drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId) === item.id, ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, ariaControls: (drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId) === item.id ? item.id : undefined, trigger: item.trigger, badge: item.badge, itemId: item.id, isActive: (drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId) === item.id, onClick: () => {
                            (drawers === null || drawers === void 0 ? void 0 : drawers.items.length) !== 1 &&
                                (drawers === null || drawers === void 0 ? void 0 : drawers.onChange({
                                    activeDrawerId: item.id !== drawers.activeDrawerId ? item.id : undefined,
                                }));
                        } }));
                }),
                overflowItems.length > 0 && (React.createElement("div", { className: clsx(styles['drawer-trigger']) },
                    React.createElement(OverflowMenu, { ariaLabel: drawers === null || drawers === void 0 ? void 0 : drawers.overflowAriaLabel, items: overflowItems, onItemClick: ({ detail }) => {
                            drawers === null || drawers === void 0 ? void 0 : drawers.onChange({
                                activeDrawerId: detail.id !== drawers.activeDrawerId ? detail.id : undefined,
                            });
                        } })))))))));
};
//# sourceMappingURL=index.js.map