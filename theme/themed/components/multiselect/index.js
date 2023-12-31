import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalMultiselect from './internal';
const Multiselect = React.forwardRef((_a, ref) => {
    var { options = [], filteringType = 'none', statusType = 'finished', selectedOptions = [], keepOpen = true, hideTokens = false } = _a, restProps = __rest(_a, ["options", "filteringType", "statusType", "selectedOptions", "keepOpen", "hideTokens"]);
    const baseComponentProps = useBaseComponent('Multiselect');
    return (React.createElement(InternalMultiselect, Object.assign({ options: options, filteringType: filteringType, statusType: statusType, selectedOptions: selectedOptions, keepOpen: keepOpen, hideTokens: hideTokens }, restProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Multiselect, 'Multiselect');
export default Multiselect;
//# sourceMappingURL=index.js.map