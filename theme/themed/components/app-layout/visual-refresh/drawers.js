// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import customCssProps from '../../internal/generated/custom-css-properties';
import { InternalButton } from '../../button/internal';
import SplitPanel from './split-panel';
import TriggerButton from './trigger-button';
import { useAppLayoutInternals } from './context';
import splitPanelStyles from '../../split-panel/styles.css.js';
import styles from './styles.css.js';
import sharedStyles from '../styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
import OverflowMenu from '../drawer/overflow-menu';
import { splitItems } from '../drawer/drawers-helpers';
import { TOOLS_DRAWER_ID } from '../utils/use-drawers';
/**
 * The Drawers root component is mounted in the AppLayout index file. It will only
 * render if the drawers are defined, and it will take over the mounting of and
 * rendering of the Tools and SplitPanel (side position) if they exist. If drawers
 * do not exist then the Tools and SplitPanel will be handled by the Tools component.
 */
export default function Drawers() {
    const { disableBodyScroll, drawers, hasDrawerViewportOverlay, hasOpenDrawer, isNavigationOpen, navigationHide, isMobile, } = useAppLayoutInternals();
    const isUnfocusable = hasDrawerViewportOverlay && isNavigationOpen && !navigationHide;
    if (drawers.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: clsx(styles['drawers-container'], {
            [styles['disable-body-scroll']]: disableBodyScroll,
            [styles['has-open-drawer']]: hasOpenDrawer,
            [styles.unfocusable]: isUnfocusable,
        }) },
        React.createElement(SplitPanel.Side, null),
        React.createElement(ActiveDrawer, null),
        !isMobile && React.createElement(DesktopTriggers, null)));
}
function ActiveDrawer() {
    var _a, _b, _c;
    const { activeDrawerId, ariaLabels, drawers, drawersRefs, handleDrawersClick, handleToolsClick, hasDrawerViewportOverlay, isMobile, isNavigationOpen, navigationHide, toolsRefs, loseDrawersFocus, resizeHandle, drawerSize, drawersMaxWidth, drawerRef, } = useAppLayoutInternals();
    const activeDrawer = (_a = drawers.find(item => item.id === activeDrawerId)) !== null && _a !== void 0 ? _a : null;
    const computedAriaLabels = {
        closeButton: activeDrawerId ? (_b = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.ariaLabels) === null || _b === void 0 ? void 0 : _b.closeButton : ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.toolsClose,
        content: activeDrawerId ? (_c = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.ariaLabels) === null || _c === void 0 ? void 0 : _c.content : ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tools,
    };
    const isHidden = !activeDrawerId;
    const isUnfocusable = isHidden || (hasDrawerViewportOverlay && isNavigationOpen && !navigationHide);
    const isToolsDrawer = activeDrawerId === TOOLS_DRAWER_ID;
    const size = Math.min(drawersMaxWidth, drawerSize);
    return (React.createElement("aside", { id: activeDrawerId, "aria-hidden": isHidden, "aria-label": computedAriaLabels.content, className: clsx(styles.drawer, {
            [styles['is-drawer-open']]: activeDrawerId,
            [styles.unfocusable]: isUnfocusable,
            [testutilStyles['active-drawer']]: activeDrawerId,
            [testutilStyles.tools]: isToolsDrawer,
            [sharedStyles['with-motion']]: activeDrawerId,
        }), style: Object.assign({}, (!isMobile && drawerSize && { [customCssProps.drawerSize]: `${size}px` })), ref: drawerRef, onBlur: e => {
            if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                loseDrawersFocus();
            }
        } },
        !isMobile && (activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.resizable) && resizeHandle,
        React.createElement("div", { className: clsx(styles['drawer-close-button']) },
            React.createElement(InternalButton, { ariaLabel: computedAriaLabels.closeButton, className: clsx({
                    [testutilStyles['active-drawer-close-button']]: activeDrawerId,
                    [testutilStyles['tools-close']]: isToolsDrawer,
                }), formAction: "none", iconName: isMobile ? 'close' : 'angle-right', onClick: () => {
                    handleDrawersClick(activeDrawerId !== null && activeDrawerId !== void 0 ? activeDrawerId : undefined);
                    handleToolsClick(false);
                }, ref: isToolsDrawer ? toolsRefs.close : drawersRefs.close, variant: "icon" })),
        React.createElement("div", { className: styles['drawer-content'] }, activeDrawerId && (activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.content))));
}
/**
 * The DesktopTriggers will render the trigger buttons for Tools, Drawers, and the
 * SplitPanel in non mobile viewports. Changes to the activeDrawerId need to be
 * tracked by the previousActiveDrawerId property in order to appropriately apply
 * the ref required to manage focus control.
 */
function DesktopTriggers() {
    const { activeDrawerId, drawers, drawersAriaLabel, drawersOverflowAriaLabel, drawersRefs, drawersTriggerCount, handleDrawersClick, handleSplitPanelClick, handleToolsClick, hasOpenDrawer, isSplitPanelOpen, isToolsOpen, splitPanel, splitPanelControlId, splitPanelDisplayed, splitPanelPosition, splitPanelRefs, splitPanelToggle, splitPanelReportedHeaderHeight, splitPanelReportedSize, } = useAppLayoutInternals();
    const hasMultipleTriggers = drawersTriggerCount > 1;
    const hasSplitPanel = splitPanel && splitPanelDisplayed && splitPanelPosition === 'side' ? true : false;
    const previousActiveDrawerId = useRef(activeDrawerId);
    const [containerHeight, triggersContainerRef] = useContainerQuery(rect => rect.contentBoxHeight);
    if (activeDrawerId) {
        previousActiveDrawerId.current = activeDrawerId;
    }
    const splitPanelHeight = isSplitPanelOpen && splitPanelPosition === 'bottom' ? splitPanelReportedSize : splitPanelReportedHeaderHeight;
    const getIndexOfOverflowItem = () => {
        if (containerHeight) {
            const ITEM_HEIGHT = 48;
            const overflowSpot = activeDrawerId && isSplitPanelOpen
                ? (containerHeight - splitPanelReportedHeaderHeight) / 1.5
                : (containerHeight - splitPanelHeight) / 1.5;
            const index = Math.floor(overflowSpot / ITEM_HEIGHT);
            let splitPanelItem = 0;
            if (hasSplitPanel && splitPanelToggle.displayed) {
                splitPanelItem = 1;
            }
            return index - splitPanelItem;
        }
        return 0;
    };
    const { visibleItems, overflowItems } = splitItems(drawers, getIndexOfOverflowItem(), activeDrawerId);
    const overflowMenuHasBadge = !!overflowItems.find(item => item.badge);
    function handleItemClick(itemId) {
        if (itemId === TOOLS_DRAWER_ID) {
            handleToolsClick(!isToolsOpen, true);
        }
        else {
            handleToolsClick(false, true);
        }
        handleDrawersClick(itemId);
    }
    return (React.createElement("aside", { className: clsx(styles['drawers-desktop-triggers-container'], testutilStyles['drawers-desktop-triggers-container'], {
            [styles['has-multiple-triggers']]: hasMultipleTriggers,
            [styles['has-open-drawer']]: hasOpenDrawer,
        }), "aria-label": drawersAriaLabel, ref: triggersContainerRef },
        React.createElement("div", { className: clsx(styles['drawers-trigger-content'], {
                [styles['has-multiple-triggers']]: hasMultipleTriggers,
                [styles['has-open-drawer']]: hasOpenDrawer,
            }), role: "toolbar", "aria-orientation": "vertical" },
            visibleItems.map(item => {
                var _a;
                return (React.createElement(TriggerButton, { ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, ariaExpanded: item.id === activeDrawerId, ariaControls: activeDrawerId === item.id ? item.id : undefined, className: clsx(styles['drawers-trigger'], testutilStyles['drawers-trigger'], item.id === TOOLS_DRAWER_ID && testutilStyles['tools-toggle']), iconName: item.trigger.iconName, iconSvg: item.trigger.iconSvg, key: item.id, onClick: () => handleItemClick(item.id), ref: item.id === previousActiveDrawerId.current ? drawersRefs.toggle : undefined, selected: item.id === activeDrawerId, badge: item.badge, testId: `awsui-app-layout-trigger-${item.id}` }));
            }),
            overflowItems.length > 0 && (React.createElement(OverflowMenu, { items: overflowItems, ariaLabel: drawersOverflowAriaLabel, customTriggerBuilder: ({ onClick, triggerRef, ariaLabel, ariaExpanded, testUtilsClass }) => (React.createElement(TriggerButton, { ref: triggerRef, ariaLabel: ariaLabel, ariaExpanded: ariaExpanded, badge: overflowMenuHasBadge, className: clsx(styles['drawers-trigger'], testutilStyles['drawers-trigger'], testUtilsClass), iconName: "ellipsis", onClick: onClick })), onItemClick: ({ detail }) => {
                    handleItemClick(detail.id);
                } })),
            hasSplitPanel && splitPanelToggle.displayed && (React.createElement(TriggerButton, { ariaLabel: splitPanelToggle.ariaLabel, ariaControls: splitPanelControlId, ariaExpanded: !!isSplitPanelOpen, className: clsx(styles['drawers-trigger'], splitPanelStyles['open-button']), iconName: "view-vertical", onClick: () => handleSplitPanelClick(), selected: hasSplitPanel && isSplitPanelOpen, ref: splitPanelRefs.toggle })))));
}
/**
 * The MobileTriggers will be mounted inside of the AppBar component and
 * only rendered when Drawers are defined in mobile viewports. The same logic
 * will in the AppBar component will suppress the rendering of the legacy
 * trigger button for the Tools drawer.
 */
export function MobileTriggers() {
    const { activeDrawerId, drawers, drawersAriaLabel, drawersOverflowAriaLabel, drawersRefs, isToolsOpen, handleToolsClick, handleDrawersClick, hasDrawerViewportOverlay, isMobile, } = useAppLayoutInternals();
    const previousActiveDrawerId = useRef(activeDrawerId);
    if (!isMobile || drawers.length === 0) {
        return null;
    }
    if (activeDrawerId) {
        previousActiveDrawerId.current = activeDrawerId;
    }
    const splitIndex = 2;
    const { visibleItems, overflowItems } = splitItems(drawers, splitIndex, activeDrawerId);
    function handleItemClick(itemId) {
        if (itemId === TOOLS_DRAWER_ID) {
            handleToolsClick(!isToolsOpen, true);
        }
        else {
            handleToolsClick(false, true);
        }
        handleDrawersClick(itemId);
    }
    return (React.createElement("aside", { "aria-hidden": hasDrawerViewportOverlay, className: clsx(styles['drawers-mobile-triggers-container'], testutilStyles['drawers-mobile-triggers-container'], {
            [styles.unfocusable]: hasDrawerViewportOverlay,
        }), "aria-label": drawersAriaLabel },
        visibleItems.map(item => {
            var _a;
            return (React.createElement(InternalButton, { ariaExpanded: item.id === activeDrawerId, ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, className: clsx(styles['drawers-trigger'], testutilStyles['drawers-trigger'], item.id === TOOLS_DRAWER_ID && testutilStyles['tools-toggle']), disabled: hasDrawerViewportOverlay, ref: item.id === previousActiveDrawerId.current ? drawersRefs.toggle : undefined, formAction: "none", iconName: item.trigger.iconName, iconSvg: item.trigger.iconSvg, badge: item.badge, key: item.id, onClick: () => handleItemClick(item.id), variant: "icon", __nativeAttributes: { 'aria-haspopup': true, 'data-testid': `awsui-app-layout-trigger-${item.id}` } }));
        }),
        overflowItems.length > 0 && (React.createElement(OverflowMenu, { items: overflowItems, ariaLabel: drawersOverflowAriaLabel, onItemClick: ({ detail }) => {
                handleItemClick(detail.id);
            } }))));
}
//# sourceMappingURL=drawers.js.map