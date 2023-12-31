import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import clsx from 'clsx';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Badge(_a) {
    var { color = 'grey', children } = _a, rest = __rest(_a, ["color", "children"]);
    const { __internalRootRef } = useBaseComponent('Badge');
    const baseProps = getBaseProps(rest);
    const className = clsx(baseProps.className, styles.badge, styles[`badge-color-${color}`]);
    return (React.createElement("span", Object.assign({}, baseProps, { className }, { ref: __internalRootRef }), children));
}
applyDisplayName(Badge, 'Badge');
//# sourceMappingURL=index.js.map