import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useContext, useEffect } from 'react';
import styles from './styles.css.js';
import { hotspotContext as hotspotContextType } from '../annotation-context/context';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Hotspot(_a) {
    var { children, hotspotId, side = 'right', direction = 'top' } = _a, restProps = __rest(_a, ["children", "hotspotId", "side", "direction"]);
    const { __internalRootRef } = useBaseComponent('Hotspot');
    const baseProps = getBaseProps(restProps);
    const hotspotContext = useContext(hotspotContextType);
    const content = hotspotContext.getContentForId(hotspotId, direction);
    const { unregisterHotspot, registerHotspot } = hotspotContext;
    useEffect(() => {
        registerHotspot(hotspotId);
        return () => unregisterHotspot(hotspotId);
    }, [hotspotId, unregisterHotspot, registerHotspot]);
    if (children) {
        return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles.wrapper), ref: __internalRootRef }),
            React.createElement("div", { className: styles.elementWrapper }, children),
            React.createElement("div", { className: clsx(styles.markerWrapper, styles[`placement-${side}`]), onClick: e => e.stopPropagation() }, content)));
    }
    return (React.createElement("span", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles.inlineWrapper), ref: __internalRootRef, onClick: e => e.stopPropagation() }), content));
}
applyDisplayName(Hotspot, 'Hotspot');
//# sourceMappingURL=index.js.map