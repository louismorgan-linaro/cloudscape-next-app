// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef, useState } from 'react';
import { useStableCallback } from '@cloudscape-design/component-toolkit/internal';
import { useControllable } from '../../internal/hooks/use-controllable';
import { fireNonCancelableEvent } from '../../internal/events';
import { awsuiPluginsInternal } from '../../internal/plugins/api';
import { sortByPriority } from '../../internal/plugins/helpers/utils';
import { convertRuntimeDrawers } from '../runtime-api';
import { togglesConfig } from '../toggles';
export const TOOLS_DRAWER_ID = 'awsui-internal-tools';
function getToolsDrawerItem(props) {
    if (props.toolsHide) {
        return null;
    }
    const { iconName, getLabels } = togglesConfig.tools;
    const { mainLabel, closeLabel, openLabel } = getLabels(props.ariaLabels);
    return {
        id: TOOLS_DRAWER_ID,
        content: props.tools,
        resizable: false,
        ariaLabels: {
            triggerButton: openLabel,
            closeButton: closeLabel,
            content: mainLabel,
        },
        trigger: {
            iconName: iconName,
        },
    };
}
function useRuntimeDrawers(disableRuntimeDrawers, activeDrawerId, onActiveDrawerChange) {
    const [runtimeDrawers, setRuntimeDrawers] = useState({ before: [], after: [] });
    const drawerWasOpenRef = useRef(false);
    drawerWasOpenRef.current = drawerWasOpenRef.current || !!activeDrawerId;
    useEffect(() => {
        if (disableRuntimeDrawers) {
            return;
        }
        const unsubscribe = awsuiPluginsInternal.appLayout.onDrawersRegistered(drawers => {
            setRuntimeDrawers(convertRuntimeDrawers(drawers));
            if (!drawerWasOpenRef.current) {
                const defaultActiveDrawer = sortByPriority(drawers).find(drawer => drawer.defaultActive);
                if (defaultActiveDrawer) {
                    onActiveDrawerChange(defaultActiveDrawer.id);
                }
            }
        });
        return () => {
            unsubscribe();
            setRuntimeDrawers({ before: [], after: [] });
        };
    }, [disableRuntimeDrawers, onActiveDrawerChange]);
    return runtimeDrawers;
}
export function useDrawers({ drawers: ownDrawers, __disableRuntimeDrawers: disableRuntimeDrawers, }, toolsProps) {
    var _a, _b, _c, _d;
    const toolsDrawer = getToolsDrawerItem(toolsProps);
    const [activeDrawerId, setActiveDrawerId] = useControllable(ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.activeDrawerId, ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.onChange, undefined, {
        componentName: 'AppLayout',
        controlledProp: 'activeDrawerId',
        changeHandler: 'onChange',
    });
    const [drawerSizes, setDrawerSizes] = useState({});
    const onActiveDrawerChange = useStableCallback((newDrawerId) => {
        setActiveDrawerId(newDrawerId);
        fireNonCancelableEvent(ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.onChange, newDrawerId);
    });
    const runtimeDrawers = useRuntimeDrawers(disableRuntimeDrawers, activeDrawerId, onActiveDrawerChange);
    const combinedDrawers = [...runtimeDrawers.before, ...((_a = ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.items) !== null && _a !== void 0 ? _a : []), ...runtimeDrawers.after];
    if (toolsDrawer && combinedDrawers.length > 0) {
        combinedDrawers.unshift(toolsDrawer);
    }
    // support toolsOpen in runtime-drawers-only mode
    let activeDrawerIdResolved = toolsProps.toolsOpen && ((_b = ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.items) !== null && _b !== void 0 ? _b : []).length === 0 ? TOOLS_DRAWER_ID : activeDrawerId;
    const activeDrawer = combinedDrawers.find(drawer => drawer.id === activeDrawerIdResolved);
    // ensure that id is only defined when the drawer exists
    activeDrawerIdResolved = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.id;
    function onActiveDrawerResize({ id, size }) {
        setDrawerSizes(oldSizes => (Object.assign(Object.assign({}, oldSizes), { [id]: size })));
        fireNonCancelableEvent(ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.onResize, { id, size });
    }
    return {
        ariaLabel: ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.ariaLabel,
        overflowAriaLabel: ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.overflowAriaLabel,
        drawers: combinedDrawers,
        activeDrawer,
        activeDrawerId: activeDrawerIdResolved,
        activeDrawerSize: activeDrawerIdResolved
            ? (_d = (_c = drawerSizes[activeDrawerIdResolved]) !== null && _c !== void 0 ? _c : activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.defaultSize) !== null && _d !== void 0 ? _d : toolsProps.toolsWidth
            : toolsProps.toolsWidth,
        onActiveDrawerChange,
        onActiveDrawerResize,
    };
}
//# sourceMappingURL=use-drawers.js.map