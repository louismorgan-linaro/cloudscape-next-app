import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalBox from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Box(_a) {
    var { variant = 'div', margin = {}, padding = {} } = _a, props = __rest(_a, ["variant", "margin", "padding"]);
    const baseComponentProps = useBaseComponent('Box');
    return React.createElement(InternalBox, Object.assign({ variant: variant, margin: margin, padding: padding }, props, baseComponentProps));
}
applyDisplayName(Box, 'Box');
//# sourceMappingURL=index.js.map