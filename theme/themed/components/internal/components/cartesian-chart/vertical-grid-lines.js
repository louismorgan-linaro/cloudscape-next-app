// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import styles from './styles.css.js';
export default memo(VerticalGridLines);
function VerticalGridLines({ ticks, scale, height }) {
    return (React.createElement("g", { "aria-hidden": "true" }, ticks.map(tick => {
        var _a;
        const x = (_a = scale.d3Scale(tick)) !== null && _a !== void 0 ? _a : NaN;
        return isFinite(x) && React.createElement("line", { key: tick, className: styles.grid, x1: x, y1: 0, x2: x, y2: height });
    })));
}
//# sourceMappingURL=vertical-grid-lines.js.map