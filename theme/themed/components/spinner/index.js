import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalSpinner from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Spinner(_a) {
    var { size = 'normal', variant = 'normal' } = _a, props = __rest(_a, ["size", "variant"]);
    const baseComponentProps = useBaseComponent('Spinner');
    return React.createElement(InternalSpinner, Object.assign({ size: size, variant: variant }, props, baseComponentProps));
}
applyDisplayName(Spinner, 'Spinner');
//# sourceMappingURL=index.js.map