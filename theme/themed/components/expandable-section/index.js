import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalExpandableSection from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
import { AnalyticsFunnelSubStep } from '../internal/analytics/components/analytics-funnel';
import { useFunnelSubStep } from '../internal/analytics/hooks/use-funnel';
export default function ExpandableSection(_a) {
    var { variant = 'default' } = _a, props = __rest(_a, ["variant"]);
    const baseComponentProps = useBaseComponent('ExpandableSection');
    if (variant === 'container' || variant === 'stacked') {
        return (React.createElement(AnalyticsFunnelSubStep, null,
            React.createElement(InternalExpandableSectionAsSubstep, Object.assign({ variant: variant }, props, baseComponentProps))));
    }
    else {
        return React.createElement(InternalExpandableSection, Object.assign({ variant: variant }, props, baseComponentProps));
    }
}
function InternalExpandableSectionAsSubstep(props) {
    const { subStepRef, funnelSubStepProps } = useFunnelSubStep();
    return React.createElement(InternalExpandableSection, Object.assign({}, props, { __subStepRef: subStepRef, __funnelSubStepProps: funnelSubStepProps }));
}
applyDisplayName(ExpandableSection, 'ExpandableSection');
//# sourceMappingURL=index.js.map