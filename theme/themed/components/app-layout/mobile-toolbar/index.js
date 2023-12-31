// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { ToggleButton, togglesConfig } from '../toggles';
import OverflowMenu from '../drawer/overflow-menu';
import styles from './styles.css.js';
import sharedStyles from '../styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
import { splitItems } from '../drawer/drawers-helpers';
import { TOOLS_DRAWER_ID } from '../utils/use-drawers';
const MobileToggle = React.forwardRef(({ className, ariaLabels, type, disabled, onClick }, ref) => {
    const { TagName, iconName, getLabels } = togglesConfig[type];
    const { mainLabel, openLabel } = getLabels(ariaLabels);
    return (React.createElement(TagName, { className: clsx(styles['mobile-toggle'], styles[`mobile-toggle-type-${type}`]), "aria-hidden": disabled, "aria-label": mainLabel, onClick: e => e.target === e.currentTarget && onClick() },
        React.createElement(ToggleButton, { ref: ref, className: className, iconName: iconName, onClick: onClick, ariaLabel: openLabel, disabled: disabled, ariaExpanded: disabled })));
});
export function MobileToolbar({ ariaLabels = {}, toggleRefs, topOffset, navigationHide, toolsHide, anyPanelOpen = false, unfocusable, children, onNavigationOpen, onToolsOpen, drawers, mobileBarRef, }) {
    useEffect(() => {
        if (anyPanelOpen) {
            document.body.classList.add(styles['block-body-scroll']);
            return () => {
                document.body.classList.remove(styles['block-body-scroll']);
            };
        }
        else {
            document.body.classList.remove(styles['block-body-scroll']);
        }
    }, [anyPanelOpen]);
    const { overflowItems, visibleItems } = splitItems(drawers === null || drawers === void 0 ? void 0 : drawers.items, 2, drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId);
    return (React.createElement("div", { ref: mobileBarRef, className: clsx(styles['mobile-bar'], testutilStyles['mobile-bar'], unfocusable && sharedStyles.unfocusable), style: { top: topOffset } },
        !navigationHide && (React.createElement(MobileToggle, { ref: toggleRefs.navigation, type: "navigation", className: testutilStyles['navigation-toggle'], ariaLabels: ariaLabels, disabled: anyPanelOpen, onClick: onNavigationOpen })),
        React.createElement("div", { className: styles['mobile-bar-breadcrumbs'] }, children && React.createElement("div", { className: testutilStyles.breadcrumbs }, children)),
        !toolsHide && !drawers && (React.createElement(MobileToggle, { ref: toggleRefs.tools, type: "tools", className: testutilStyles['tools-toggle'], ariaLabels: ariaLabels, disabled: anyPanelOpen, onClick: onToolsOpen })),
        drawers && (React.createElement("aside", { "aria-label": drawers.ariaLabel, className: clsx(styles['drawers-container'], testutilStyles['drawers-mobile-triggers-container']) },
            visibleItems.map((item, index) => {
                var _a;
                return (React.createElement("div", { className: clsx(styles['mobile-toggle'], styles['mobile-toggle-type-drawer']), key: index, onClick: () => drawers.onChange({ activeDrawerId: item.id }) },
                    React.createElement(ToggleButton, { className: item.id === TOOLS_DRAWER_ID
                            ? clsx(testutilStyles['drawers-trigger'], testutilStyles['tools-toggle'])
                            : testutilStyles['drawers-trigger'], iconName: item.trigger.iconName, iconSvg: item.trigger.iconSvg, badge: item.badge, ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, ariaExpanded: drawers.activeDrawerId === item.id, testId: `awsui-app-layout-trigger-${item.id}` })));
            }),
            overflowItems.length > 0 && (React.createElement("div", { className: clsx(styles['mobile-toggle'], styles['mobile-toggle-type-drawer']) },
                React.createElement(OverflowMenu, { ariaLabel: drawers.overflowAriaLabel, items: overflowItems, onItemClick: ({ detail }) => {
                        drawers.onChange({
                            activeDrawerId: detail.id !== drawers.activeDrawerId ? detail.id : undefined,
                        });
                    } })))))));
}
//# sourceMappingURL=index.js.map