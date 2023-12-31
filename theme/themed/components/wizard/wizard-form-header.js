// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { useDynamicOverlap } from '../internal/hooks/use-dynamic-overlap';
import styles from './styles.css.js';
export default function WizardFormHeader({ children, isVisualRefresh }) {
    const overlapElement = useDynamicOverlap();
    return (React.createElement("div", { className: clsx(styles['form-header'], isVisualRefresh && styles['form-header-refresh'], isVisualRefresh && 'awsui-context-content-header'), ref: overlapElement },
        React.createElement("div", { className: clsx(styles['form-header-content']) }, children)));
}
//# sourceMappingURL=wizard-form-header.js.map