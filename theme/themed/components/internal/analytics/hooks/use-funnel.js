// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __awaiter } from "tslib";
import { useContext } from 'react';
import { FunnelContext, FunnelStepContext, FunnelSubStepContext } from '../context/analytics-context';
import { DATA_ATTR_FUNNEL_INTERACTION_ID, DATA_ATTR_FUNNEL_SUBSTEP, getNameFromSelector, getSubStepAllSelector, } from '../selectors';
import { FunnelMetrics } from '../';
import { nodeBelongs } from '../../utils/node-belongs';
/**
 * Custom React Hook to manage and interact with FunnelSubStep.
 * This hook will provide necessary properties and methods required
 * to track and manage interactions with a FunnelSubStep component.
 *
 * The `onFocus` method is used to track the beginning of interaction with the FunnelSubStep.
 * The `onBlur` method is used to track the completion of interaction with the FunnelSubStep.
 * The subStepId is a unique identifier for the funnel sub-step.
 * The subStepRef is a reference to the DOM element of the funnel sub-step.
 */
export const useFunnelSubStep = () => {
    const context = useContext(FunnelSubStepContext);
    const { funnelInteractionId, funnelState, latestFocusCleanupFunction } = useFunnel();
    const { stepNumber, stepNameSelector } = useFunnelStep();
    const { subStepId, subStepSelector, subStepNameSelector, subStepRef, isNestedSubStep, mousePressed, isFocusedSubStep, focusCleanupFunction, } = context;
    if (isNestedSubStep) {
        return context;
    }
    const onFocus = (event) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const element = event.target;
        // Ignore spurious focus events, such as when the browser window is focused again.
        yield new Promise(r => setTimeout(r, 1));
        if (document.activeElement !== element) {
            return;
        }
        if (isFocusedSubStep.current) {
            return;
        }
        isFocusedSubStep.current = true;
        if (funnelInteractionId && subStepId) {
            /*
              If the previously focused substep has provided a cleanup function, we
              call it here on behalf of the previously focused substep.
            */
            (_a = latestFocusCleanupFunction.current) === null || _a === void 0 ? void 0 : _a.call(latestFocusCleanupFunction);
            const subStepName = getNameFromSelector(subStepNameSelector);
            const stepName = getNameFromSelector(stepNameSelector);
            FunnelMetrics.funnelSubStepStart({
                funnelInteractionId,
                subStepSelector,
                subStepNameSelector,
                subStepName,
                stepNumber,
                stepName,
                stepNameSelector,
                subStepAllSelector: getSubStepAllSelector(),
            });
            /*
              This cleanup function will be called when the user leaves this substep.
              The function might be called either:
      
                - by the next focused substep as `latestFocusCleanupFunction`
                  (through a separate instance of the function we're currently in), or
      
                - by the same substep as `focusCleanupFunction`
                  (through the `onMouseUp` handler or the `onBlur` handler).
            */
            let cleanupFunctionHasBeenRun = false;
            focusCleanupFunction.current = () => {
                if (cleanupFunctionHasBeenRun) {
                    return;
                }
                cleanupFunctionHasBeenRun = true;
                if (funnelState.current !== 'cancelled') {
                    FunnelMetrics.funnelSubStepComplete({
                        funnelInteractionId,
                        subStepSelector,
                        subStepNameSelector,
                        subStepName,
                        stepNumber,
                        stepName,
                        stepNameSelector,
                        subStepAllSelector: getSubStepAllSelector(),
                    });
                }
            };
            latestFocusCleanupFunction.current = focusCleanupFunction.current;
        }
    });
    const onBlur = (event) => {
        var _a;
        if (mousePressed.current) {
            /*
             Ignore blur events that are caused by mouse interaction, because these events don't
             always reflect user intention. For example, clicking the label of an interactive form
             element will briefly blur it.
             The mouse-caused events are handled in the global `onMouseUp` handler of the substep
             context instead.
             */
            return;
        }
        if (!subStepRef.current || !event.relatedTarget || !nodeBelongs(subStepRef.current, event.relatedTarget)) {
            isFocusedSubStep.current = false;
            if (funnelInteractionId && subStepId && funnelState.current !== 'cancelled') {
                /*
                 Run this substep's own focus cleanup function if another substep
                 hasn't already done it for us.
                 */
                (_a = focusCleanupFunction.current) === null || _a === void 0 ? void 0 : _a.call(focusCleanupFunction);
            }
        }
    };
    const funnelSubStepProps = funnelInteractionId
        ? {
            [DATA_ATTR_FUNNEL_SUBSTEP]: subStepId,
            onFocus,
            onBlur,
        }
        : {};
    return Object.assign({ funnelSubStepProps }, context);
};
/**
 * Custom React Hook to manage and interact with FunnelStep.
 * This hook will provide necessary properties required to track
 * and manage interactions with a FunnelStep component.
 *
 * The 'data-analytics-funnel-step' property of funnelStepProps is used to track the index of the current step in the funnel.
 * The context contains additional properties of the FunnelStep.
 */
export const useFunnelStep = () => {
    const context = useContext(FunnelStepContext);
    return context;
};
/**
 * Custom React Hook to manage and interact with Funnel.
 * This hook will provide necessary properties required to track
 * and manage interactions with a Funnel component.
 *
 * The 'data-analytics-funnel-interaction-id' property of funnelProps is used to track the unique identifier of the current interaction with the funnel.
 */
export const useFunnel = () => {
    const context = useContext(FunnelContext);
    const funnelProps = context.funnelInteractionId
        ? {
            [DATA_ATTR_FUNNEL_INTERACTION_ID]: context.funnelInteractionId,
        }
        : {};
    return Object.assign({ funnelProps }, context);
};
//# sourceMappingURL=use-funnel.js.map