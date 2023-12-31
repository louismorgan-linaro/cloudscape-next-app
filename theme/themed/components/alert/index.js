import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect } from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAlert from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
import { FunnelMetrics } from '../internal/analytics';
import { useFunnel, useFunnelStep, useFunnelSubStep } from '../internal/analytics/hooks/use-funnel';
import { getNameFromSelector, getSubStepAllSelector } from '../internal/analytics/selectors';
const Alert = React.forwardRef((_a, ref) => {
    var { type = 'info', visible = true } = _a, props = __rest(_a, ["type", "visible"]);
    const baseComponentProps = useBaseComponent('Alert');
    const { funnelInteractionId, submissionAttempt, funnelState, errorCount } = useFunnel();
    const { stepNumber, stepNameSelector } = useFunnelStep();
    const { subStepSelector, subStepNameSelector } = useFunnelSubStep();
    useEffect(() => {
        var _a, _b, _c;
        if (funnelInteractionId && visible && type === 'error' && funnelState.current !== 'complete') {
            const stepName = getNameFromSelector(stepNameSelector);
            const subStepName = getNameFromSelector(subStepNameSelector);
            errorCount.current++;
            // We don't want to report an error if it is hidden, e.g. inside an Expandable Section.
            const errorIsVisible = ((_c = (_b = (_a = baseComponentProps.__internalRootRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : 0) > 0;
            if (errorIsVisible) {
                if (subStepSelector) {
                    FunnelMetrics.funnelSubStepError({
                        funnelInteractionId,
                        subStepSelector,
                        subStepName,
                        subStepNameSelector,
                        stepNumber,
                        stepName,
                        stepNameSelector,
                        subStepAllSelector: getSubStepAllSelector(),
                    });
                }
                else {
                    FunnelMetrics.funnelError({
                        funnelInteractionId,
                    });
                }
            }
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                errorCount.current--;
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [funnelInteractionId, visible, submissionAttempt, errorCount]);
    return React.createElement(InternalAlert, Object.assign({ type: type, visible: visible }, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(Alert, 'Alert');
export default Alert;
//# sourceMappingURL=index.js.map