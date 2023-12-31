// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import AbstractSwitch from '../internal/components/abstract-switch';
import { fireNonCancelableEvent } from '../internal/events';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
export default React.forwardRef(function RadioButton({ name, label, value, checked, description, disabled, controlId, onChange }, ref) {
    const isVisualRefresh = useVisualRefresh();
    const radioButtonRef = useRef(null);
    const mergedRefs = useMergeRefs(radioButtonRef, ref);
    return (React.createElement(AbstractSwitch, { className: clsx(styles.radio, description && styles['radio--has-description']), controlClassName: styles['radio-control'], outlineClassName: styles.outline, label: label, description: description, disabled: disabled, controlId: controlId, nativeControl: nativeControlProps => (React.createElement("input", Object.assign({}, nativeControlProps, { type: "radio", ref: mergedRefs, name: name, value: value, checked: checked, 
            // empty handler to suppress React controllability warning
            onChange: () => { } }))), onClick: () => {
            var _a;
            (_a = radioButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            if (checked) {
                return;
            }
            fireNonCancelableEvent(onChange, { value });
        }, styledControl: React.createElement("svg", { viewBox: "0 0 100 100", focusable: "false", "aria-hidden": "true" },
            React.createElement("circle", { className: clsx(styles['styled-circle-border'], { [styles['styled-circle-disabled']]: disabled }), strokeWidth: isVisualRefresh ? 12 : 8, cx: 50, cy: 50, r: isVisualRefresh ? 44 : 46 }),
            React.createElement("circle", { className: clsx(styles['styled-circle-fill'], {
                    [styles['styled-circle-disabled']]: disabled,
                    [styles['styled-circle-checked']]: checked,
                }), strokeWidth: 30, cx: 50, cy: 50, r: 35 })) }));
});
//# sourceMappingURL=radio-button.js.map