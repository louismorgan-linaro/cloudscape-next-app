// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import Icon from '../../icon/internal';
import styles from './styles.css.js';
function TriggerButton({ ariaLabel, className, iconName, iconSvg, ariaExpanded, ariaControls, onClick, testId, badge, selected = false, }, ref) {
    return (React.createElement("div", { className: clsx(styles['trigger-wrapper']) },
        React.createElement("button", { "aria-expanded": ariaExpanded, "aria-controls": ariaControls, "aria-haspopup": true, "aria-label": ariaLabel, className: clsx(styles.trigger, {
                [styles.selected]: selected,
                [styles.badge]: badge,
            }, className), onClick: onClick, ref: ref, type: "button", "data-testid": testId },
            React.createElement("span", { className: clsx(badge && styles['trigger-badge-wrapper']) },
                React.createElement(Icon, { name: iconName, svg: iconSvg }))),
        badge && React.createElement("div", { className: clsx(styles.dot) })));
}
export default React.forwardRef(TriggerButton);
//# sourceMappingURL=trigger-button.js.map