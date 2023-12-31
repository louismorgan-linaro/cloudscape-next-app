// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { useAppLayoutInternals } from './context';
import styles from './styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
export default function Notifications() {
    var _a;
    const { ariaLabels, hasDrawerViewportOverlay, notifications, notificationsElement, stickyNotifications } = useAppLayoutInternals();
    if (!notifications) {
        return null;
    }
    /**
     * The notificationsElement ref is assigned to an inner div to prevent internal bottom margin
     * from affecting the calculated height, which is used for sticky elements below.
     */
    return (React.createElement("div", { role: "region", "aria-label": (_a = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.notifications) !== null && _a !== void 0 ? _a : undefined, className: clsx(styles.notifications, {
            [styles['sticky-notifications']]: stickyNotifications,
            [styles.unfocusable]: hasDrawerViewportOverlay,
        }, testutilStyles.notifications, 'awsui-context-content-header') },
        React.createElement("div", { ref: notificationsElement }, notifications)));
}
//# sourceMappingURL=notifications.js.map