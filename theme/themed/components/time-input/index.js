import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTimeInput from './internal';
const TimeInput = React.forwardRef((_a, ref) => {
    var { format = 'hh:mm:ss', use24Hour = true, autoComplete = true } = _a, props = __rest(_a, ["format", "use24Hour", "autoComplete"]);
    const baseComponentProps = useBaseComponent('TimeInput');
    return (React.createElement(InternalTimeInput, Object.assign({ format: format, use24Hour: use24Hour, autoComplete: autoComplete }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(TimeInput, 'TimeInput');
export default TimeInput;
//# sourceMappingURL=index.js.map