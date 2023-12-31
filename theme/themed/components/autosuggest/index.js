import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalAutosuggest from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
const Autosuggest = React.forwardRef((_a, ref) => {
    var { filteringType = 'auto', statusType = 'finished', disableBrowserAutocorrect = false } = _a, props = __rest(_a, ["filteringType", "statusType", "disableBrowserAutocorrect"]);
    const baseComponentProps = useBaseComponent('Autosuggest');
    const externalProps = getExternalProps(props);
    return (React.createElement(InternalAutosuggest, Object.assign({ filteringType: filteringType, statusType: statusType, disableBrowserAutocorrect: disableBrowserAutocorrect }, externalProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Autosuggest, 'Autosuggest');
export default Autosuggest;
//# sourceMappingURL=index.js.map