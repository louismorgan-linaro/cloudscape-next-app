import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { getBaseProps } from '../internal/base-component';
import { useControllable } from '../internal/hooks/use-controllable';
import { useMobile } from '../internal/hooks/use-mobile';
import { fireNonCancelableEvent } from '../internal/events';
import { applyDefaults } from './defaults';
import { Notifications } from './notifications';
import { MobileToolbar } from './mobile-toolbar';
import { useFocusControl } from './utils/use-focus-control';
import useWindowWidth from './utils/use-window-width';
import useContentHeight from './utils/use-content-height';
import styles from './styles.css.js';
import testutilStyles from './test-classes/styles.css.js';
import { findUpUntil } from '../internal/utils/dom';
import { AppLayoutContext } from '../internal/context/app-layout-context';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { SplitPanelContextProvider, } from '../internal/context/split-panel-context';
import { CONSTRAINED_MAIN_PANEL_MIN_HEIGHT, CONSTRAINED_PAGE_HEIGHT, getSplitPanelDefaultSize, MAIN_PANEL_MIN_HEIGHT, } from '../split-panel/utils/size-utils';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import ContentWrapper from './content-wrapper';
import { Drawer, DrawerTriggersBar } from './drawer';
import { ResizableDrawer } from './drawer/resizable-drawer';
import { SideSplitPanelDrawer } from './split-panel-drawer';
import useAppLayoutOffsets from './utils/use-content-width';
import { isDevelopment } from '../internal/is-development';
import { useStableCallback, warnOnce } from '@cloudscape-design/component-toolkit/internal';
import RefreshedAppLayout from './visual-refresh';
import { useInternalI18n } from '../i18n/context';
import { useSplitPanelFocusControl } from './utils/use-split-panel-focus-control';
import { useDrawerFocusControl } from './utils/use-drawer-focus-control';
import { TOOLS_DRAWER_ID, useDrawers } from './utils/use-drawers';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
const AppLayout = React.forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { contentType = 'default', headerSelector = '#b #h', footerSelector = '#b #f' } = _a, rest = __rest(_a, ["contentType", "headerSelector", "footerSelector"]);
    const { __internalRootRef } = useBaseComponent('AppLayout');
    const isRefresh = useVisualRefresh();
    const i18n = useInternalI18n('app-layout');
    const ariaLabels = {
        navigation: i18n('ariaLabels.navigation', (_b = rest.ariaLabels) === null || _b === void 0 ? void 0 : _b.navigation),
        navigationClose: i18n('ariaLabels.navigationClose', (_c = rest.ariaLabels) === null || _c === void 0 ? void 0 : _c.navigationClose),
        navigationToggle: i18n('ariaLabels.navigationToggle', (_d = rest.ariaLabels) === null || _d === void 0 ? void 0 : _d.navigationToggle),
        notifications: i18n('ariaLabels.notifications', (_e = rest.ariaLabels) === null || _e === void 0 ? void 0 : _e.notifications),
        tools: i18n('ariaLabels.tools', (_f = rest.ariaLabels) === null || _f === void 0 ? void 0 : _f.tools),
        toolsClose: i18n('ariaLabels.toolsClose', (_g = rest.ariaLabels) === null || _g === void 0 ? void 0 : _g.toolsClose),
        toolsToggle: i18n('ariaLabels.toolsToggle', (_h = rest.ariaLabels) === null || _h === void 0 ? void 0 : _h.toolsToggle),
    };
    // This re-builds the props including the default values
    const props = Object.assign(Object.assign({ contentType, headerSelector, footerSelector }, rest), { ariaLabels });
    const baseProps = getBaseProps(rest);
    return (React.createElement("div", Object.assign({ ref: __internalRootRef }, baseProps), isRefresh ? React.createElement(RefreshedAppLayout, Object.assign({}, props, { ref: ref })) : React.createElement(OldAppLayout, Object.assign({}, props, { ref: ref }))));
});
const OldAppLayout = React.forwardRef((_a, ref) => {
    var _b;
    var { navigation, navigationWidth = 280, navigationHide, navigationOpen: controlledNavigationOpen, tools, toolsWidth = 290, toolsHide, toolsOpen: controlledToolsOpen, breadcrumbs, notifications, stickyNotifications, contentHeader, disableContentHeaderOverlap, content, contentType = 'default', disableContentPaddings, disableBodyScroll, maxContentWidth, minContentWidth, headerSelector = '#b #h', footerSelector = '#b #f', ariaLabels, splitPanel, splitPanelSize: controlledSplitPanelSize, splitPanelOpen: controlledSplitPanelOpen, splitPanelPreferences: controlledSplitPanelPreferences, onSplitPanelPreferencesChange, onSplitPanelResize, onSplitPanelToggle, onNavigationChange, onToolsChange } = _a, props = __rest(_a, ["navigation", "navigationWidth", "navigationHide", "navigationOpen", "tools", "toolsWidth", "toolsHide", "toolsOpen", "breadcrumbs", "notifications", "stickyNotifications", "contentHeader", "disableContentHeaderOverlap", "content", "contentType", "disableContentPaddings", "disableBodyScroll", "maxContentWidth", "minContentWidth", "headerSelector", "footerSelector", "ariaLabels", "splitPanel", "splitPanelSize", "splitPanelOpen", "splitPanelPreferences", "onSplitPanelPreferencesChange", "onSplitPanelResize", "onSplitPanelToggle", "onNavigationChange", "onToolsChange"]);
    if (isDevelopment) {
        if (controlledToolsOpen && toolsHide) {
            warnOnce('AppLayout', `You have enabled both the \`toolsOpen\` prop and the \`toolsHide\` prop. This is not supported. Set \`toolsOpen\` to \`false\` when you set \`toolsHide\` to \`true\`.`);
        }
    }
    const rootRef = useRef(null);
    const isMobile = useMobile();
    const defaults = applyDefaults(contentType, { maxContentWidth, minContentWidth }, false);
    const [navigationOpen = false, setNavigationOpen] = useControllable(controlledNavigationOpen, onNavigationChange, isMobile ? false : defaults.navigationOpen, { componentName: 'AppLayout', controlledProp: 'navigationOpen', changeHandler: 'onNavigationChange' });
    const [toolsOpen = false, setToolsOpen] = useControllable(controlledToolsOpen, onToolsChange, isMobile ? false : defaults.toolsOpen, { componentName: 'AppLayout', controlledProp: 'toolsOpen', changeHandler: 'onToolsChange' });
    const _c = useDrawers(props, { ariaLabels, tools, toolsOpen, toolsHide, toolsWidth }), { drawers, activeDrawer, activeDrawerSize, activeDrawerId, onActiveDrawerChange, onActiveDrawerResize } = _c, drawersProps = __rest(_c, ["drawers", "activeDrawer", "activeDrawerSize", "activeDrawerId", "onActiveDrawerChange", "onActiveDrawerResize"]);
    const hasDrawers = drawers.length > 0;
    const { refs: navigationRefs, setFocus: focusNavButtons } = useFocusControl(navigationOpen);
    const { refs: toolsRefs, setFocus: focusToolsButtons, loseFocus: loseToolsFocus, } = useFocusControl(toolsOpen || activeDrawer !== undefined, true);
    const { refs: drawerRefs, setFocus: focusDrawersButtons, loseFocus: loseDrawersFocus, setLastInteraction: setDrawerLastInteraction, } = useDrawerFocusControl([activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.resizable], toolsOpen || activeDrawer !== undefined, true);
    const onNavigationToggle = useStableCallback((open) => {
        setNavigationOpen(open);
        focusNavButtons();
        fireNonCancelableEvent(onNavigationChange, { open });
    });
    const onToolsToggle = useCallback((open) => {
        setToolsOpen(open);
        focusToolsButtons();
        fireNonCancelableEvent(onToolsChange, { open });
    }, [setToolsOpen, onToolsChange, focusToolsButtons]);
    const onNavigationClick = (event) => {
        const hasLink = findUpUntil(event.target, node => node.tagName === 'A' && !!node.href);
        if (hasLink) {
            onNavigationToggle(false);
        }
    };
    useEffect(() => {
        // Close navigation drawer on mobile so that the main content is visible
        if (isMobile) {
            onNavigationToggle(false);
        }
    }, [isMobile, onNavigationToggle]);
    const navigationVisible = !navigationHide && navigationOpen;
    const toolsVisible = !toolsHide && toolsOpen;
    const { contentHeightStyle, headerHeight, footerHeight } = useContentHeight(headerSelector, footerSelector, disableBodyScroll);
    const [isSplitpanelForcedPosition, setIsSplitpanelForcedPosition] = useState(false);
    const [notificationsHeight, notificationsRef] = useContainerQuery(rect => rect.contentBoxHeight);
    const anyPanelOpen = navigationVisible || toolsVisible;
    const hasRenderedNotifications = notificationsHeight ? notificationsHeight > 0 : false;
    const stickyNotificationsHeight = stickyNotifications ? notificationsHeight : null;
    const [splitPanelPreferences, setSplitPanelPreferences] = useControllable(controlledSplitPanelPreferences, onSplitPanelPreferencesChange, undefined, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelPreferences',
        changeHandler: 'onSplitPanelPreferencesChange',
    });
    const [splitPanelOpen = false, setSplitPanelOpen] = useControllable(controlledSplitPanelOpen, onSplitPanelToggle, false, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelOpen',
        changeHandler: 'onSplitPanelToggle',
    });
    const splitPanelPosition = (splitPanelPreferences === null || splitPanelPreferences === void 0 ? void 0 : splitPanelPreferences.position) || 'bottom';
    const [splitPanelReportedToggle, setSplitPanelReportedToggle] = useState({
        displayed: false,
        ariaLabel: undefined,
    });
    const splitPanelDisplayed = !!(splitPanel && (splitPanelReportedToggle.displayed || splitPanelOpen));
    const closedDrawerWidth = 40;
    const effectiveNavigationWidth = navigationHide ? 0 : navigationOpen ? navigationWidth : closedDrawerWidth;
    const getEffectiveToolsWidth = () => {
        if (toolsHide && (!splitPanelDisplayed || (splitPanelPreferences === null || splitPanelPreferences === void 0 ? void 0 : splitPanelPreferences.position) !== 'side') && drawers.length === 0) {
            return 0;
        }
        if (activeDrawer && activeDrawerSize) {
            return activeDrawerSize;
        }
        if (toolsOpen) {
            return toolsWidth;
        }
        return closedDrawerWidth;
    };
    const effectiveToolsWidth = getEffectiveToolsWidth();
    const defaultSplitPanelSize = getSplitPanelDefaultSize(splitPanelPosition);
    const [splitPanelSize = defaultSplitPanelSize, setSplitPanelSize] = useControllable(controlledSplitPanelSize, onSplitPanelResize, defaultSplitPanelSize, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelSize',
        changeHandler: 'onSplitPanelResize',
    });
    const mainContentRef = useRef(null);
    const legacyScrollRootRef = useRef(null);
    const { refs: splitPanelRefs, setLastInteraction: setSplitPanelLastInteraction } = useSplitPanelFocusControl([
        splitPanelPreferences,
        splitPanelOpen,
    ]);
    const onSplitPanelPreferencesSet = useCallback((detail) => {
        setSplitPanelPreferences(detail);
        setSplitPanelLastInteraction({ type: 'position' });
        fireNonCancelableEvent(onSplitPanelPreferencesChange, detail);
    }, [setSplitPanelPreferences, onSplitPanelPreferencesChange, setSplitPanelLastInteraction]);
    const onSplitPanelSizeSet = useCallback((detail) => {
        setSplitPanelSize(detail.size);
        fireNonCancelableEvent(onSplitPanelResize, detail);
    }, [setSplitPanelSize, onSplitPanelResize]);
    const onSplitPanelToggleHandler = useCallback(() => {
        setSplitPanelOpen(!splitPanelOpen);
        setSplitPanelLastInteraction({ type: splitPanelOpen ? 'close' : 'open' });
        fireNonCancelableEvent(onSplitPanelToggle, { open: !splitPanelOpen });
    }, [setSplitPanelOpen, splitPanelOpen, onSplitPanelToggle, setSplitPanelLastInteraction]);
    const getSplitPanelMaxWidth = useStableCallback(() => {
        if (!mainContentRef.current || !defaults.minContentWidth) {
            return NaN;
        }
        const width = parseInt(getComputedStyle(mainContentRef.current).width);
        // when disableContentPaddings is true there is less available space,
        // so we subtract space-scaled-2x-xxxl * 2 for left and right padding
        const contentPadding = disableContentPaddings ? 80 : 0;
        const spaceAvailable = width - defaults.minContentWidth - contentPadding;
        const spaceTaken = finalSplitPanePosition === 'side' ? splitPanelSize : 0;
        return Math.max(0, spaceTaken + spaceAvailable);
    });
    const getDrawerMaxWidth = useStableCallback(() => {
        if (!mainContentRef.current || !defaults.minContentWidth) {
            return NaN;
        }
        // Either use the computed width of the drawer or the drawerSize as defined.
        const width = parseInt(getComputedStyle(mainContentRef.current).width || `${activeDrawerSize}`);
        // when disableContentPaddings is true there is less available space,
        // so we subtract space-scaled-2x-xxxl * 2 for left and right padding
        const contentPadding = disableContentPaddings ? 80 : 0;
        const spaceAvailable = width - defaults.minContentWidth - contentPadding;
        return Math.max(0, activeDrawerSize + spaceAvailable);
    });
    const getSplitPanelMaxHeight = useStableCallback(() => {
        if (typeof document === 'undefined') {
            return 0; // render the split panel in its minimum possible size
        }
        else if (disableBodyScroll && legacyScrollRootRef.current) {
            const availableHeight = legacyScrollRootRef.current.clientHeight;
            return availableHeight < CONSTRAINED_PAGE_HEIGHT ? availableHeight : availableHeight - MAIN_PANEL_MIN_HEIGHT;
        }
        else {
            const availableHeight = document.documentElement.clientHeight - headerHeight - footerHeight;
            return availableHeight < CONSTRAINED_PAGE_HEIGHT
                ? availableHeight - CONSTRAINED_MAIN_PANEL_MIN_HEIGHT
                : availableHeight - MAIN_PANEL_MIN_HEIGHT;
        }
    });
    const finalSplitPanePosition = isSplitpanelForcedPosition ? 'bottom' : splitPanelPosition;
    const splitPaneAvailableOnTheSide = splitPanelDisplayed && finalSplitPanePosition === 'side';
    const splitPanelOpenOnTheSide = splitPaneAvailableOnTheSide && splitPanelOpen;
    const toggleButtonsBarWidth = 0;
    const windowWidth = useWindowWidth();
    const { left: leftOffset, right: rightOffset } = useAppLayoutOffsets(rootRef.current);
    const contentWidthWithSplitPanel = windowWidth -
        leftOffset -
        rightOffset -
        effectiveToolsWidth -
        effectiveNavigationWidth -
        (disableContentPaddings ? 0 : toggleButtonsBarWidth);
    const isResizeInvalid = isMobile || (defaults.minContentWidth || 0) > contentWidthWithSplitPanel;
    useEffect(() => {
        const contentWidth = contentWidthWithSplitPanel - splitPanelSize;
        setIsSplitpanelForcedPosition(isMobile || (defaults.minContentWidth || 0) > contentWidth);
        // This is a workaround to avoid a forced position due to splitPanelSize, which is
        // user controlled variable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentWidthWithSplitPanel, activeDrawerSize, defaults.minContentWidth, isMobile]);
    const navigationClosedWidth = navigationHide || isMobile ? 0 : closedDrawerWidth;
    const toolsClosedWidth = toolsHide || isMobile || (!hasDrawers && toolsHide) ? 0 : closedDrawerWidth;
    const contentMaxWidthStyle = !isMobile ? { maxWidth: defaults.maxContentWidth } : undefined;
    const [splitPanelReportedSize, setSplitPanelReportedSize] = useState(0);
    const [splitPanelReportedHeaderHeight, setSplitPanelReportedHeaderHeight] = useState(0);
    const getSplitPanelRightOffset = () => {
        if (isMobile) {
            return 0;
        }
        if (hasDrawers) {
            if (activeDrawer) {
                if (drawers.length === 1) {
                    return activeDrawerSize;
                }
                if (!isResizeInvalid && activeDrawerSize) {
                    return activeDrawerSize + closedDrawerWidth;
                }
                return toolsWidth + closedDrawerWidth;
            }
            return closedDrawerWidth;
        }
        if (!toolsHide && toolsOpen) {
            return toolsWidth;
        }
        return toolsClosedWidth;
    };
    const splitPanelContext = {
        topOffset: headerHeight + (finalSplitPanePosition === 'bottom' ? stickyNotificationsHeight || 0 : 0),
        bottomOffset: footerHeight,
        leftOffset: leftOffset + (isMobile ? 0 : !navigationHide && navigationOpen ? navigationWidth : navigationClosedWidth),
        rightOffset: rightOffset + getSplitPanelRightOffset(),
        position: finalSplitPanePosition,
        size: splitPanelSize,
        getMaxWidth: getSplitPanelMaxWidth,
        getMaxHeight: getSplitPanelMaxHeight,
        disableContentPaddings,
        contentWidthStyles: contentMaxWidthStyle,
        isOpen: splitPanelOpen,
        isMobile,
        isForcedPosition: isSplitpanelForcedPosition,
        onResize: onSplitPanelSizeSet,
        onToggle: onSplitPanelToggleHandler,
        onPreferencesChange: onSplitPanelPreferencesSet,
        setSplitPanelToggle: setSplitPanelReportedToggle,
        reportSize: setSplitPanelReportedSize,
        reportHeaderHeight: setSplitPanelReportedHeaderHeight,
        refs: splitPanelRefs,
    };
    const splitPanelWrapped = splitPanel && (React.createElement(SplitPanelContextProvider, { value: splitPanelContext }, splitPanel));
    const contentWrapperProps = {
        contentType,
        navigationPadding: navigationHide || !!navigationOpen,
        contentWidthStyles: !isMobile
            ? { minWidth: defaults.minContentWidth, maxWidth: defaults.maxContentWidth }
            : undefined,
        toolsPadding: 
        // tools padding is displayed in one of the three cases
        // 1. Nothing on the that screen edge (no tools panel and no split panel)
        toolsHide ||
            (hasDrawers && !activeDrawer && (!splitPanelDisplayed || finalSplitPanePosition !== 'side')) ||
            // 2. Tools panel is present and open
            toolsVisible ||
            // 3. Split panel is open in side position
            splitPanelOpenOnTheSide,
        isMobile,
    };
    useImperativeHandle(ref, () => ({
        openTools: () => onToolsToggle(true),
        closeNavigationIfNecessary: () => {
            if (isMobile) {
                onNavigationToggle(false);
            }
        },
        focusToolsClose: () => focusToolsButtons(true),
        focusSplitPanel: () => { var _a; return (_a = splitPanelRefs.slider.current) === null || _a === void 0 ? void 0 : _a.focus(); },
    }), [onToolsToggle, isMobile, onNavigationToggle, focusToolsButtons, splitPanelRefs.slider]);
    const splitPanelBottomOffset = (_b = (!splitPanelDisplayed || finalSplitPanePosition !== 'bottom'
        ? undefined
        : splitPanelOpen
            ? splitPanelReportedSize
            : splitPanelReportedHeaderHeight)) !== null && _b !== void 0 ? _b : undefined;
    const [mobileBarHeight, mobileBarRef] = useContainerQuery(rect => rect.contentBoxHeight);
    return (React.createElement("div", { className: clsx(styles.root, testutilStyles.root, disableBodyScroll && styles['root-no-scroll']), ref: rootRef },
        React.createElement("div", { className: styles['layout-wrapper'], style: contentHeightStyle },
            isMobile && (!toolsHide || !navigationHide || breadcrumbs) && (React.createElement(MobileToolbar, { anyPanelOpen: anyPanelOpen, toggleRefs: { navigation: navigationRefs.toggle, tools: toolsRefs.toggle }, topOffset: headerHeight, ariaLabels: ariaLabels, navigationHide: navigationHide, toolsHide: toolsHide, onNavigationOpen: () => onNavigationToggle(true), onToolsOpen: () => onToolsToggle(true), unfocusable: anyPanelOpen, mobileBarRef: mobileBarRef, drawers: hasDrawers
                    ? {
                        items: drawers,
                        activeDrawerId: activeDrawerId,
                        onChange: changeDetail => {
                            onActiveDrawerChange(changeDetail.activeDrawerId);
                            if (changeDetail.activeDrawerId !== activeDrawerId) {
                                onToolsToggle(changeDetail.activeDrawerId === TOOLS_DRAWER_ID);
                                focusDrawersButtons();
                                setDrawerLastInteraction({ type: 'open' });
                            }
                        },
                        ariaLabel: drawersProps.ariaLabel,
                        overflowAriaLabel: drawersProps.overflowAriaLabel,
                    }
                    : undefined }, breadcrumbs)),
            React.createElement("div", { className: clsx(styles.layout, disableBodyScroll && styles['layout-no-scroll']) },
                !navigationHide && (React.createElement(Drawer, { contentClassName: testutilStyles.navigation, toggleClassName: testutilStyles['navigation-toggle'], closeClassName: testutilStyles['navigation-close'], ariaLabels: ariaLabels, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, isOpen: navigationOpen, onClick: isMobile ? onNavigationClick : undefined, onToggle: onNavigationToggle, toggleRefs: navigationRefs, type: "navigation", width: navigationWidth }, navigation)),
                React.createElement("main", { ref: legacyScrollRootRef, className: clsx(styles['layout-main'], {
                        [styles['layout-main-scrollable']]: disableBodyScroll,
                        [testutilStyles['disable-body-scroll-root']]: disableBodyScroll,
                        [styles.unfocusable]: isMobile && anyPanelOpen,
                    }) },
                    React.createElement("div", { style: {
                            marginBottom: splitPanelBottomOffset,
                        } },
                        notifications && (React.createElement(Notifications, { disableContentPaddings: disableContentPaddings, testUtilsClassName: testutilStyles.notifications, labels: ariaLabels, topOffset: disableBodyScroll ? 0 : headerHeight, sticky: !isMobile && stickyNotifications, ref: notificationsRef }, notifications)),
                        ((!isMobile && breadcrumbs) || contentHeader) && (React.createElement(ContentWrapper, Object.assign({}, contentWrapperProps),
                            !isMobile && breadcrumbs && (React.createElement("div", { className: clsx(testutilStyles.breadcrumbs, styles['breadcrumbs-desktop']) }, breadcrumbs)),
                            contentHeader && (React.createElement("div", { className: clsx(styles['content-header-wrapper'], !hasRenderedNotifications &&
                                    (isMobile || !breadcrumbs) &&
                                    styles['content-extra-top-padding'], !hasRenderedNotifications && !breadcrumbs && styles['content-header-wrapper-first-child'], !disableContentHeaderOverlap && styles['content-header-wrapper-overlapped']) }, contentHeader)))),
                        React.createElement(ContentWrapper, Object.assign({}, contentWrapperProps, { ref: mainContentRef, disablePaddings: disableContentPaddings, 
                            // eslint-disable-next-line react/forbid-component-props
                            className: clsx(!disableContentPaddings && styles['content-wrapper'], !disableContentPaddings &&
                                (isMobile || !breadcrumbs) &&
                                !contentHeader &&
                                styles['content-extra-top-padding'], testutilStyles.content, !disableContentHeaderOverlap && contentHeader && styles['content-overlapped'], !hasRenderedNotifications &&
                                !breadcrumbs &&
                                !isMobile &&
                                !contentHeader &&
                                styles['content-wrapper-first-child']) }),
                            React.createElement(AppLayoutContext.Provider, { value: {
                                    stickyOffsetTop: 
                                    // We don't support the table header being sticky in case the deprecated disableBodyScroll is enabled,
                                    // therefore we ensure the table header scrolls out of view by offseting a large enough value (9999px)
                                    (disableBodyScroll ? (isMobile ? -9999 : 0) : headerHeight) +
                                        (isMobile ? 0 : stickyNotificationsHeight !== null ? stickyNotificationsHeight : 0),
                                    stickyOffsetBottom: footerHeight + (splitPanelBottomOffset || 0),
                                    mobileBarHeight: mobileBarHeight !== null && mobileBarHeight !== void 0 ? mobileBarHeight : 0,
                                } }, content))),
                    finalSplitPanePosition === 'bottom' && splitPanelWrapped),
                finalSplitPanePosition === 'side' && (React.createElement(SideSplitPanelDrawer, { topOffset: headerHeight, bottomOffset: footerHeight, displayed: splitPanelDisplayed, width: splitPanelOpen && splitPanel ? splitPanelSize : undefined }, splitPanelWrapped)),
                ((hasDrawers && activeDrawerId) || (!hasDrawers && !toolsHide)) &&
                    (hasDrawers ? (React.createElement(ResizableDrawer, { contentClassName: activeDrawerId === TOOLS_DRAWER_ID
                            ? clsx(testutilStyles.tools, testutilStyles['active-drawer'])
                            : testutilStyles['active-drawer'], toggleClassName: testutilStyles['tools-toggle'], closeClassName: activeDrawerId === TOOLS_DRAWER_ID
                            ? testutilStyles['tools-close']
                            : testutilStyles['active-drawer-close-button'], ariaLabels: ariaLabels, width: !isResizeInvalid ? activeDrawerSize : toolsWidth, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, onToggle: onToolsToggle, isOpen: toolsOpen || activeDrawerId !== undefined, toggleRefs: toolsRefs, type: "tools", onLoseFocus: loseDrawersFocus, activeDrawer: activeDrawer, drawers: {
                            items: drawers,
                            activeDrawerId: activeDrawerId,
                            onChange: changeDetail => {
                                onToolsToggle(false);
                                setDrawerLastInteraction({ type: 'close' });
                                onActiveDrawerChange(changeDetail.activeDrawerId);
                            },
                        }, size: !isResizeInvalid ? activeDrawerSize : toolsWidth, onResize: changeDetail => onActiveDrawerResize(changeDetail), refs: drawerRefs, getMaxWidth: getDrawerMaxWidth }, activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.content)) : (React.createElement(Drawer, { contentClassName: testutilStyles.tools, toggleClassName: testutilStyles['tools-toggle'], closeClassName: testutilStyles['tools-close'], ariaLabels: ariaLabels, width: effectiveToolsWidth, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, onToggle: onToolsToggle, isOpen: toolsOpen, toggleRefs: toolsRefs, type: "tools", onLoseFocus: loseToolsFocus }, tools))),
                hasDrawers && (React.createElement(DrawerTriggersBar, { bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, drawers: {
                        items: drawers,
                        activeDrawerId: activeDrawerId,
                        onChange: changeDetail => {
                            if (activeDrawerId !== changeDetail.activeDrawerId) {
                                onToolsToggle(changeDetail.activeDrawerId === TOOLS_DRAWER_ID);
                                focusDrawersButtons();
                                setDrawerLastInteraction({ type: 'open' });
                            }
                            onActiveDrawerChange(changeDetail.activeDrawerId);
                        },
                        ariaLabel: drawersProps.ariaLabel,
                        overflowAriaLabel: drawersProps.overflowAriaLabel,
                    } }))))));
});
applyDisplayName(AppLayout, 'AppLayout');
export default AppLayout;
//# sourceMappingURL=index.js.map