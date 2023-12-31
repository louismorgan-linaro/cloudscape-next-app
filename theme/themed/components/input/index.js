import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useImperativeHandle, useRef } from 'react';
import { getBaseProps } from '../internal/base-component';
import InternalInput from './internal';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
const Input = React.forwardRef((_a, ref) => {
    var { value, type = 'text', step, inputMode, autoComplete = true, spellcheck, disabled, readOnly, disableBrowserAutocorrect, onKeyDown, onKeyUp, onChange, onBlur, onFocus, ariaRequired, name, placeholder, autoFocus, ariaLabel, ariaLabelledby, ariaDescribedby, invalid, controlId, clearAriaLabel } = _a, rest = __rest(_a, ["value", "type", "step", "inputMode", "autoComplete", "spellcheck", "disabled", "readOnly", "disableBrowserAutocorrect", "onKeyDown", "onKeyUp", "onChange", "onBlur", "onFocus", "ariaRequired", "name", "placeholder", "autoFocus", "ariaLabel", "ariaLabelledby", "ariaDescribedby", "invalid", "controlId", "clearAriaLabel"]);
    const baseComponentProps = useBaseComponent('Input');
    const baseProps = getBaseProps(rest);
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus(...args) {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(...args);
        },
        select() {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
        },
    }), [inputRef]);
    return (React.createElement(InternalInput, Object.assign({ ref: inputRef }, Object.assign(Object.assign(Object.assign({}, baseProps), baseComponentProps), { autoComplete,
        ariaLabel,
        ariaRequired,
        autoFocus,
        disabled,
        disableBrowserAutocorrect,
        name,
        onKeyDown,
        onKeyUp,
        onChange,
        onBlur,
        onFocus,
        placeholder,
        readOnly,
        type,
        step,
        inputMode,
        spellcheck,
        value,
        ariaDescribedby,
        ariaLabelledby,
        invalid,
        controlId,
        clearAriaLabel }), { className: clsx(styles.root, baseProps.className), __inheritFormFieldProps: true })));
});
applyDisplayName(Input, 'Input');
export default Input;
//# sourceMappingURL=index.js.map