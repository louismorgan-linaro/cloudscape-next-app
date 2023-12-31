import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import InternalGrid from './internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Grid(_a) {
    var { gridDefinition = [], disableGutters = false, children } = _a, restProps = __rest(_a, ["gridDefinition", "disableGutters", "children"]);
    const baseComponentProps = useBaseComponent('Grid');
    const baseProps = getBaseProps(restProps);
    const [breakpoint, ref] = useContainerBreakpoints(undefined);
    return (React.createElement(InternalGrid, Object.assign({}, baseProps, baseComponentProps, { ref: ref, __breakpoint: breakpoint, gridDefinition: gridDefinition, disableGutters: disableGutters }), children));
}
applyDisplayName(Grid, 'Grid');
//# sourceMappingURL=index.js.map