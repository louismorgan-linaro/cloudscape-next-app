// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import ResizeHandler from '../../split-panel/icons/resize-handler';
import { getLimitedValue } from '../../split-panel/utils/size-utils';
import { usePointerEvents } from './use-pointer-events';
import { useKeyboardEvents } from './use-keyboard-events';
import splitPanelStyles from '../../split-panel/styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
import styles from '../visual-refresh/styles.css.js';
function useResize(drawerRefObject, { activeDrawer, activeDrawerSize, onActiveDrawerResize, drawersRefs, isToolsOpen, drawersMaxWidth }) {
    var _a, _b;
    const toolsWidth = 290;
    const MIN_WIDTH = Math.min((_a = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.defaultSize) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY, toolsWidth);
    const [relativeSize, setRelativeSize] = useState(0);
    const drawerSize = !activeDrawer && !isToolsOpen ? 0 : activeDrawerSize;
    useEffect(() => {
        // effects are called inside out in the components tree
        // wait one frame to allow app-layout to complete its calculations
        const handle = requestAnimationFrame(() => {
            const maxSize = drawersMaxWidth;
            setRelativeSize(((drawerSize - MIN_WIDTH) / (maxSize - MIN_WIDTH)) * 100);
        });
        return () => cancelAnimationFrame(handle);
    }, [drawerSize, drawersMaxWidth, MIN_WIDTH]);
    const setSidePanelWidth = (width) => {
        const maxWidth = drawersMaxWidth;
        const size = getLimitedValue(MIN_WIDTH, width, maxWidth);
        const id = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.id;
        if (id && maxWidth >= MIN_WIDTH) {
            onActiveDrawerResize({ size, id });
        }
    };
    const position = 'side';
    const setBottomPanelHeight = () => { };
    const sizeControlProps = {
        position,
        panelRef: drawerRefObject,
        handleRef: drawersRefs.slider,
        setSidePanelWidth,
        setBottomPanelHeight,
        hasTransitions: true,
    };
    const onSliderPointerDown = usePointerEvents(sizeControlProps);
    const onKeyDown = useKeyboardEvents(sizeControlProps);
    const resizeHandle = (React.createElement("div", { ref: drawersRefs.slider, role: "slider", tabIndex: 0, "aria-label": (_b = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.ariaLabels) === null || _b === void 0 ? void 0 : _b.resizeHandle, "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": relativeSize, className: clsx(splitPanelStyles.slider, splitPanelStyles[`slider-side`], testutilStyles['drawers-slider']), onKeyDown: onKeyDown, onPointerDown: onSliderPointerDown },
        React.createElement(ResizeHandler, { className: clsx(splitPanelStyles['slider-icon'], splitPanelStyles[`slider-icon-side`]) })));
    return { resizeHandle: React.createElement("div", { className: styles['drawer-slider'] }, resizeHandle), drawerSize };
}
export default useResize;
//# sourceMappingURL=use-resize.js.map