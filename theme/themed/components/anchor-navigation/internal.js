import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import testUtilsStyles from './test-classes/styles.css.js';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import useScrollSpy from './use-scroll-spy.js';
import { fireCancelableEvent, fireNonCancelableEvent, isPlainLeftClick } from '../internal/events/index';
import { getBaseProps } from '../internal/base-component/index.js';
export default function InternalAnchorNavigation(_a) {
    var { anchors, ariaLabelledby, onFollow, onActiveHrefChange, activeHref = '', __internalRootRef = null, scrollSpyOffset = 0 } = _a, props = __rest(_a, ["anchors", "ariaLabelledby", "onFollow", "onActiveHrefChange", "activeHref", "__internalRootRef", "scrollSpyOffset"]);
    const baseProps = getBaseProps(props);
    const hrefs = useMemo(() => anchors.map(anchor => anchor.href), [anchors]);
    const onFollowHandler = useCallback((anchor, sourceEvent) => {
        fireCancelableEvent(onFollow, anchor, sourceEvent);
    }, [onFollow]);
    const currentActiveHref = useScrollSpy({
        hrefs,
        scrollSpyOffset,
        activeHref,
    });
    useEffect(() => {
        if (currentActiveHref) {
            const newActiveAnchor = anchors.find(anchor => anchor.href === currentActiveHref);
            fireNonCancelableEvent(onActiveHrefChange, newActiveAnchor);
        }
    }, [onActiveHrefChange, anchors, currentActiveHref]);
    return (React.createElement("nav", Object.assign({}, baseProps, { ref: __internalRootRef, "aria-labelledby": ariaLabelledby, className: clsx(baseProps.className, styles.root, testUtilsStyles.root) }),
        React.createElement("ol", { className: clsx(styles['anchor-list'], testUtilsStyles['anchor-list']) }, anchors.map((anchor, index) => {
            return (React.createElement(Anchor, { onFollow: onFollowHandler, isActive: anchor.href === currentActiveHref, key: index, index: index, anchor: anchor }));
        }))));
}
const Anchor = ({ anchor, onFollow, isActive, index }) => {
    checkSafeUrl('SideNavigation', anchor.href);
    const onClick = useCallback((event) => {
        if (isPlainLeftClick(event)) {
            onFollow(anchor, event);
        }
    }, [onFollow, anchor]);
    const activeItemClasses = clsx(styles['anchor-item--active'], testUtilsStyles['anchor-item--active']);
    return (React.createElement("li", { "data-itemid": `anchor-item-${index + 1}`, className: clsx(styles['anchor-item'], isActive && activeItemClasses) },
        React.createElement("a", Object.assign({ onClick: onClick, className: clsx(styles['anchor-link'], testUtilsStyles['anchor-link'], isActive && styles['anchor-link--active']) }, (isActive ? { 'aria-current': true } : {}), { href: anchor.href }),
            React.createElement("span", { className: clsx(styles['anchor-link-text'], testUtilsStyles['anchor-link-text']), style: { paddingLeft: `${anchor.level * 16 + 2}px` } }, anchor.text),
            anchor.info && (React.createElement("span", { className: clsx(styles['anchor-link-info'], testUtilsStyles['anchor-link-info']) }, anchor.info)))));
};
//# sourceMappingURL=internal.js.map