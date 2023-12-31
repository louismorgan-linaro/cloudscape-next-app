import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalTable, { InternalTableAsSubstep } from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
import { AnalyticsFunnelSubStep } from '../internal/analytics/components/analytics-funnel';
const Table = React.forwardRef((_a, ref) => {
    var { items = [], selectedItems = [], variant = 'container', contentDensity = 'comfortable' } = _a, props = __rest(_a, ["items", "selectedItems", "variant", "contentDensity"]);
    const baseComponentProps = useBaseComponent('Table');
    const tableProps = Object.assign(Object.assign(Object.assign({ items,
        selectedItems,
        variant,
        contentDensity }, props), baseComponentProps), { ref });
    if (variant === 'borderless' || variant === 'embedded') {
        return React.createElement(InternalTable, Object.assign({}, tableProps));
    }
    return (React.createElement(AnalyticsFunnelSubStep, null,
        React.createElement(InternalTableAsSubstep, Object.assign({}, tableProps))));
});
applyDisplayName(Table, 'Table');
export default Table;
//# sourceMappingURL=index.js.map