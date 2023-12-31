import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import InternalContainer from '../container/internal';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getTabElementId, TabHeaderBar } from './tab-header-bar';
import { useControllable } from '../internal/hooks/use-controllable';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
let lastGeneratedId = 0;
export const nextGeneratedId = () => `awsui-tabs-${lastGeneratedId++}-${Math.round(Math.random() * 10000)}`;
function firstEnabledTab(tabs) {
    const enabledTabs = tabs.filter(tab => !tab.disabled);
    if (enabledTabs.length > 0) {
        return enabledTabs[0];
    }
    return null;
}
export default function Tabs(_a) {
    var _b, _c;
    var { tabs, variant = 'default', onChange, activeTabId: controlledTabId, ariaLabel, ariaLabelledby, disableContentPaddings = false, i18nStrings } = _a, rest = __rest(_a, ["tabs", "variant", "onChange", "activeTabId", "ariaLabel", "ariaLabelledby", "disableContentPaddings", "i18nStrings"]);
    for (const tab of tabs) {
        checkSafeUrl('Tabs', tab.href);
    }
    const { __internalRootRef } = useBaseComponent('Tabs');
    const [idNamespace] = useState(() => nextGeneratedId());
    const [activeTabId, setActiveTabId] = useControllable(controlledTabId, onChange, (_c = (_b = firstEnabledTab(tabs)) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : '', {
        componentName: 'Tabs',
        controlledProp: 'activeTabId',
        changeHandler: 'onChange',
    });
    const baseProps = getBaseProps(rest);
    const content = () => {
        const selectedTab = tabs.filter(tab => tab.id === activeTabId)[0];
        const renderContent = (tab) => {
            const isTabSelected = tab === selectedTab;
            const classes = clsx({
                [styles['tabs-content']]: true,
                [styles['tabs-content-active']]: isTabSelected,
            });
            const contentAttributes = {
                className: classes,
                role: 'tabpanel',
                id: `${idNamespace}-${tab.id}-panel`,
                key: `${idNamespace}-${tab.id}-panel`,
                tabIndex: 0,
                'aria-labelledby': getTabElementId({ namespace: idNamespace, tabId: tab.id }),
            };
            const isContentShown = isTabSelected && !selectedTab.disabled;
            return React.createElement("div", Object.assign({}, contentAttributes), isContentShown && selectedTab.content);
        };
        return (React.createElement("div", { className: clsx(variant === 'container' || variant === 'stacked'
                ? styles['tabs-container-content-wrapper']
                : styles['tabs-content-wrapper'], {
                [styles['with-paddings']]: !disableContentPaddings,
            }) }, tabs.map(renderContent)));
    };
    const header = (React.createElement(TabHeaderBar, { activeTabId: activeTabId, variant: variant, idNamespace: idNamespace, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, tabs: tabs, onChange: changeDetail => {
            setActiveTabId(changeDetail.activeTabId);
            fireNonCancelableEvent(onChange, changeDetail);
        }, i18nStrings: i18nStrings }));
    if (variant === 'container' || variant === 'stacked') {
        return (React.createElement(InternalContainer, Object.assign({ header: header, disableHeaderPaddings: true }, baseProps, { className: clsx(baseProps.className, styles.root), __internalRootRef: __internalRootRef, disableContentPaddings: true, variant: variant === 'stacked' ? 'stacked' : 'default' }), content()));
    }
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles.tabs), ref: __internalRootRef }),
        header,
        content()));
}
applyDisplayName(Tabs, 'Tabs');
//# sourceMappingURL=index.js.map