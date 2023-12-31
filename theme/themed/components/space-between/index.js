import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalSpaceBetween from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function SpaceBetween(_a) {
    var { direction = 'vertical' } = _a, props = __rest(_a, ["direction"]);
    const baseComponentProps = useBaseComponent('SpaceBetween');
    return React.createElement(InternalSpaceBetween, Object.assign({ direction: direction }, props, baseComponentProps));
}
applyDisplayName(SpaceBetween, 'SpaceBetween');
//# sourceMappingURL=index.js.map