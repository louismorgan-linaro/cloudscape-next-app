// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalDateInput from './internal';
const DateInput = React.forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('DateInput');
    return React.createElement(InternalDateInput, Object.assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(DateInput, 'DateInput');
export default DateInput;
//# sourceMappingURL=index.js.map