import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import { getBaseProps } from '../internal/base-component';
import { fireKeyboardEvent, fireNonCancelableEvent } from '../internal/events';
import { useFormFieldContext } from '../internal/context/form-field-context';
import useForwardFocus from '../internal/hooks/forward-focus';
import clsx from 'clsx';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { convertAutoComplete } from '../input/utils';
const Textarea = React.forwardRef((_a, ref) => {
    var { value, autoComplete = true, disabled, readOnly, disableBrowserAutocorrect, disableBrowserSpellcheck, spellcheck, onKeyDown, onKeyUp, onChange, onBlur, onFocus, ariaRequired, name, rows, placeholder, autoFocus, ariaLabel } = _a, rest = __rest(_a, ["value", "autoComplete", "disabled", "readOnly", "disableBrowserAutocorrect", "disableBrowserSpellcheck", "spellcheck", "onKeyDown", "onKeyUp", "onChange", "onBlur", "onFocus", "ariaRequired", "name", "rows", "placeholder", "autoFocus", "ariaLabel"]);
    const { __internalRootRef } = useBaseComponent('Textarea');
    const { ariaLabelledby, ariaDescribedby, controlId, invalid } = useFormFieldContext(rest);
    const baseProps = getBaseProps(rest);
    const textareaRef = useRef(null);
    useForwardFocus(ref, textareaRef);
    const attributes = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        'aria-required': ariaRequired ? 'true' : undefined,
        'aria-invalid': invalid ? 'true' : undefined,
        name,
        placeholder,
        autoFocus,
        className: clsx(styles.textarea, {
            [styles['textarea-readonly']]: readOnly,
            [styles['textarea-invalid']]: invalid,
        }),
        autoComplete: convertAutoComplete(autoComplete),
        spellCheck: spellcheck,
        disabled,
        readOnly: readOnly ? true : undefined,
        rows: rows || 3,
        onKeyDown: onKeyDown && (event => fireKeyboardEvent(onKeyDown, event)),
        onKeyUp: onKeyUp && (event => fireKeyboardEvent(onKeyUp, event)),
        // We set a default value on the component in order to force it into the controlled mode.
        value: value || '',
        onChange: onChange && (event => fireNonCancelableEvent(onChange, { value: event.target.value })),
        onBlur: onBlur && (() => fireNonCancelableEvent(onBlur)),
        onFocus: onFocus && (() => fireNonCancelableEvent(onFocus)),
    };
    if (disableBrowserAutocorrect) {
        attributes.autoCorrect = 'off';
        attributes.autoCapitalize = 'off';
    }
    if (disableBrowserSpellcheck) {
        attributes.spellCheck = 'false';
    }
    return (React.createElement("span", Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className), ref: __internalRootRef }),
        React.createElement("textarea", Object.assign({ ref: textareaRef, id: controlId }, attributes))));
});
applyDisplayName(Textarea, 'Textarea');
export default Textarea;
//# sourceMappingURL=index.js.map