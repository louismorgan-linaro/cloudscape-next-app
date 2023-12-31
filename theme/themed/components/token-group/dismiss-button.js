// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalIcon from '../icon/internal';
export default forwardRef(DismissButton);
function DismissButton({ disabled, dismissLabel, onDismiss }, ref) {
    return (React.createElement("button", { ref: ref, type: "button", className: clsx(styles['dismiss-button']), disabled: disabled, onClick: onDismiss, "aria-label": dismissLabel },
        React.createElement(InternalIcon, { name: "close" })));
}
//# sourceMappingURL=dismiss-button.js.map