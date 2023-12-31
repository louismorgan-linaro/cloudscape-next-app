import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalFormField from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function FormField(_a) {
    var { stretch = false } = _a, props = __rest(_a, ["stretch"]);
    const baseComponentProps = useBaseComponent('FormField');
    return React.createElement(InternalFormField, Object.assign({ stretch: stretch }, props, { __hideLabel: false }, baseComponentProps));
}
applyDisplayName(FormField, 'FormField');
//# sourceMappingURL=index.js.map