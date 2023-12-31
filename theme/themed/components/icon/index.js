import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalIcon from './internal';
export default function Icon(_a) {
    var { size = 'normal', variant = 'normal' } = _a, props = __rest(_a, ["size", "variant"]);
    const baseComponentProps = useBaseComponent('Icon');
    return React.createElement(InternalIcon, Object.assign({ size: size, variant: variant }, props, baseComponentProps));
}
applyDisplayName(Icon, 'Icon');
//# sourceMappingURL=index.js.map