import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalStatusIndicator from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function StatusIndicator(_a) {
    var { type = 'success', wrapText = true } = _a, props = __rest(_a, ["type", "wrapText"]);
    const baseComponentProps = useBaseComponent('StatusIndicator');
    return React.createElement(InternalStatusIndicator, Object.assign({ type: type, wrapText: wrapText }, props, baseComponentProps));
}
applyDisplayName(StatusIndicator, 'StatusIndicator');
//# sourceMappingURL=index.js.map