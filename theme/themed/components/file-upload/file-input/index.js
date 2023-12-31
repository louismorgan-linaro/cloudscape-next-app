// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import InternalButton from '../../button/internal';
import styles from './styles.css.js';
import { useFormFieldContext } from '../../contexts/form-field';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import { joinStrings } from '../../internal/utils/strings';
import ScreenreaderOnly from '../../internal/components/screenreader-only';
import useForwardFocus from '../../internal/hooks/forward-focus';
import clsx from 'clsx';
export default React.forwardRef(FileInput);
function FileInput(_a, ref) {
    var _b;
    var { accept, ariaRequired, multiple, value, onChange, children } = _a, restProps = __rest(_a, ["accept", "ariaRequired", "multiple", "value", "onChange", "children"]);
    const uploadInputRef = useRef(null);
    const uploadButtonLabelId = useUniqueId('upload-button-label');
    const formFieldContext = useFormFieldContext(restProps);
    const selfControlId = useUniqueId('upload-input');
    const controlId = (_b = formFieldContext.controlId) !== null && _b !== void 0 ? _b : selfControlId;
    useForwardFocus(ref, uploadInputRef);
    const [isFocused, setIsFocused] = useState(false);
    const onUploadButtonClick = () => { var _a; return (_a = uploadInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); };
    const onUploadInputFocus = () => setIsFocused(true);
    const onUploadInputBlur = () => setIsFocused(false);
    const onUploadInputChange = ({ target }) => {
        onChange(target.files ? Array.from(target.files) : []);
    };
    const nativeAttributes = {
        'aria-labelledby': joinStrings(formFieldContext.ariaLabelledby, uploadButtonLabelId),
        'aria-describedby': formFieldContext.ariaDescribedby,
    };
    if (formFieldContext.invalid) {
        nativeAttributes['aria-invalid'] = true;
    }
    if (ariaRequired) {
        nativeAttributes['aria-required'] = true;
    }
    // Synchronizing component's value with the native file input state.
    useEffect(() => {
        // The DataTransfer is not available in jsdom.
        if (window.DataTransfer) {
            const dataTransfer = new DataTransfer();
            for (const file of value) {
                dataTransfer.items.add(file);
            }
            uploadInputRef.current.files = dataTransfer.files;
        }
    }, [value]);
    return (React.createElement("div", { className: styles['file-input-container'] },
        React.createElement("input", Object.assign({ id: controlId, ref: uploadInputRef, type: "file", hidden: false, multiple: multiple, accept: accept, onChange: onUploadInputChange, onFocus: onUploadInputFocus, onBlur: onUploadInputBlur, className: styles['upload-input'] }, nativeAttributes)),
        React.createElement(InternalButton, { iconName: "upload", formAction: "none", onClick: onUploadButtonClick, className: clsx(styles['upload-button'], isFocused && styles['force-focus-outline']), __nativeAttributes: { tabIndex: -1, 'aria-hidden': true } }, children),
        React.createElement(ScreenreaderOnly, { id: uploadButtonLabelId }, children)));
}
//# sourceMappingURL=index.js.map