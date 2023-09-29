// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useRef } from 'react';
import clsx from 'clsx';
import { TICK_LENGTH, TICK_LINE_HEIGHT, TICK_MARGIN } from './constants';
import styles from './styles.css.js';
import { formatTicks, getVisibleTicks } from './label-utils';
import { useInternalI18n } from '../../../i18n/context';
export function useBottomLabels({ ticks, scale, tickFormatter, }) {
    const virtualTextRef = useRef(null);
    const cacheRef = useRef({});
    const getLabelSpace = (label) => {
        if (cacheRef.current[label] !== undefined) {
            return cacheRef.current[label];
        }
        if (virtualTextRef.current && virtualTextRef.current.getComputedTextLength) {
            virtualTextRef.current.textContent = label;
            cacheRef.current[label] = virtualTextRef.current.getComputedTextLength();
            return cacheRef.current[label];
        }
        return 0;
    };
    const formattedTicks = formatTicks({ ticks, scale, getLabelSpace, tickFormatter });
    if (virtualTextRef.current) {
        virtualTextRef.current.textContent = '';
    }
    let height = TICK_LENGTH + TICK_MARGIN;
    for (const { lines } of formattedTicks) {
        height = Math.max(height, TICK_LENGTH + TICK_MARGIN + lines.length * TICK_LINE_HEIGHT);
    }
    return { virtualTextRef, formattedTicks, height };
}
export default memo(BottomLabels);
// Renders the visible tick labels on the bottom axis, as well as their grid lines.
function BottomLabels({ axis = 'x', width, height, scale, title, ariaRoleDescription, offsetLeft = 0, offsetRight = 0, virtualTextRef, formattedTicks, }) {
    const i18n = useInternalI18n('[charts]');
    const xOffset = scale.isCategorical() && axis === 'x' ? Math.max(0, scale.d3Scale.bandwidth() - 1) / 2 : 0;
    const from = 0 - offsetLeft - xOffset;
    const until = width + offsetRight - xOffset;
    const balanceLabels = axis === 'x' && scale.scaleType !== 'log';
    const visibleTicks = getVisibleTicks(formattedTicks, from, until, balanceLabels);
    return (React.createElement("g", { transform: `translate(0,${height})`, className: styles['labels-bottom'], "aria-label": title, role: "list", "aria-roledescription": i18n('i18nStrings.chartAriaRoleDescription', ariaRoleDescription), "aria-hidden": true },
        visibleTicks.map(({ position, lines }, index) => isFinite(position) && (React.createElement("g", { key: index, transform: `translate(${position + xOffset},0)`, className: clsx(styles.ticks, styles['ticks--bottom'], {
                [styles['ticks--x']]: axis === 'x',
                [styles['ticks--y']]: axis === 'y',
            }), role: "listitem", "aria-label": lines.join('\n') },
            React.createElement("line", { className: styles.ticks__line, x1: 0, x2: 0, y1: 0, y2: TICK_LENGTH, "aria-hidden": "true" }),
            lines.map((line, lineIndex) => (React.createElement("text", { className: styles.ticks__text, key: lineIndex, x: 0, y: TICK_LENGTH + TICK_MARGIN + lineIndex * TICK_LINE_HEIGHT }, line)))))),
        React.createElement("text", { ref: virtualTextRef, x: 0, y: 0, style: { visibility: 'hidden' }, "aria-hidden": "true" })));
}
//# sourceMappingURL=bottom-labels.js.map