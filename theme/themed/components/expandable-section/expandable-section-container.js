import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import InternalContainer from '../container/internal';
import React from 'react';
export const ExpandableSectionContainer = (_a) => {
    var { className, children, header, variant, expanded, disableContentPaddings, __internalRootRef, __funnelSubStepProps, __subStepRef } = _a, rest = __rest(_a, ["className", "children", "header", "variant", "expanded", "disableContentPaddings", "__internalRootRef", "__funnelSubStepProps", "__subStepRef"]);
    if (variant === 'container' || variant === 'stacked') {
        return (React.createElement(InternalContainer, Object.assign({}, rest, { className: className, header: header, variant: variant === 'stacked' ? 'stacked' : 'default', disableContentPaddings: disableContentPaddings || !expanded, disableHeaderPaddings: true, __hiddenContent: !expanded, __internalRootRef: __internalRootRef, __funnelSubStepProps: __funnelSubStepProps, __subStepRef: __subStepRef }), children));
    }
    return (React.createElement("div", Object.assign({ className: className }, rest, { ref: __internalRootRef }),
        header,
        children));
};
//# sourceMappingURL=expandable-section-container.js.map