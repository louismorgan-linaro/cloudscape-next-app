import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalModal from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Modal(_a) {
    var { size = 'medium' } = _a, props = __rest(_a, ["size"]);
    const baseComponentProps = useBaseComponent('Modal');
    return React.createElement(InternalModal, Object.assign({ size: size }, props, baseComponentProps));
}
applyDisplayName(Modal, 'Modal');
//# sourceMappingURL=index.js.map