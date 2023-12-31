import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useControllable } from '../internal/hooks/use-controllable';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useInternalI18n } from '../i18n/context';
import { FunnelMetrics } from '../internal/analytics';
import { useFunnel } from '../internal/analytics/hooks/use-funnel';
import { getNameFromSelector, getSubStepAllSelector } from '../internal/analytics/selectors';
import WizardForm from './wizard-form';
import WizardNavigation from './wizard-navigation';
import styles from './styles.css.js';
import { useFunnelChangeEvent } from './analytics';
export default function InternalWizard(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { steps, activeStepIndex: controlledActiveStepIndex, submitButtonText, isLoadingNextStep = false, allowSkipTo = false, secondaryActions, onCancel, onSubmit, onNavigate, __internalRootRef } = _a, rest = __rest(_a, ["steps", "activeStepIndex", "submitButtonText", "isLoadingNextStep", "allowSkipTo", "secondaryActions", "onCancel", "onSubmit", "onNavigate", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const [breakpoint, breakpointsRef] = useContainerBreakpoints(['xs']);
    const ref = useMergeRefs(breakpointsRef, __internalRootRef);
    const smallContainer = breakpoint === 'default';
    const [activeStepIndex, setActiveStepIndex] = useControllable(controlledActiveStepIndex, onNavigate, 0, {
        componentName: 'Wizard',
        controlledProp: 'activeStepIndex',
        changeHandler: 'onNavigate',
    });
    const { funnelInteractionId, funnelSubmit, funnelCancel, funnelProps, funnelNextOrSubmitAttempt } = useFunnel();
    const actualActiveStepIndex = activeStepIndex ? Math.min(activeStepIndex, steps.length - 1) : 0;
    const farthestStepIndex = useRef(actualActiveStepIndex);
    farthestStepIndex.current = Math.max(farthestStepIndex.current, actualActiveStepIndex);
    const isVisualRefresh = useVisualRefresh();
    const isLastStep = actualActiveStepIndex >= steps.length - 1;
    const navigationEvent = (requestedStepIndex, reason) => {
        if (funnelInteractionId) {
            const stepNameSelector = `.${styles['form-header-component-wrapper']}`;
            const stepName = getNameFromSelector(stepNameSelector);
            FunnelMetrics.funnelStepNavigation({
                navigationType: reason,
                funnelInteractionId,
                stepNumber: actualActiveStepIndex + 1,
                stepName,
                stepNameSelector,
                destinationStepNumber: requestedStepIndex + 1,
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
        setActiveStepIndex(requestedStepIndex);
        fireNonCancelableEvent(onNavigate, { requestedStepIndex, reason });
    };
    const onStepClick = (stepIndex) => navigationEvent(stepIndex, 'step');
    const onSkipToClick = (stepIndex) => navigationEvent(stepIndex, 'skip');
    const onCancelClick = () => {
        funnelCancel();
        fireNonCancelableEvent(onCancel);
    };
    const onPreviousClick = () => navigationEvent(actualActiveStepIndex - 1, 'previous');
    const onPrimaryClick = () => {
        funnelNextOrSubmitAttempt();
        if (isLastStep) {
            funnelSubmit();
            fireNonCancelableEvent(onSubmit);
        }
        else {
            navigationEvent(actualActiveStepIndex + 1, 'next');
        }
    };
    useFunnelChangeEvent(funnelInteractionId, steps);
    const i18n = useInternalI18n('wizard');
    const skipToButtonLabel = i18n('i18nStrings.skipToButtonLabel', (_b = rest.i18nStrings) === null || _b === void 0 ? void 0 : _b.skipToButtonLabel, format => task => format({ task__title: task.title }));
    const i18nStrings = Object.assign(Object.assign({}, rest.i18nStrings), { skipToButtonLabel, stepNumberLabel: i18n('i18nStrings.stepNumberLabel', (_c = rest.i18nStrings) === null || _c === void 0 ? void 0 : _c.stepNumberLabel, format => stepNumber => format({ stepNumber })), collapsedStepsLabel: i18n('i18nStrings.collapsedStepsLabel', (_d = rest.i18nStrings) === null || _d === void 0 ? void 0 : _d.collapsedStepsLabel, format => (stepNumber, stepsCount) => format({ stepNumber, stepsCount })), navigationAriaLabel: i18n('i18nStrings.navigationAriaLabel', (_e = rest.i18nStrings) === null || _e === void 0 ? void 0 : _e.navigationAriaLabel), cancelButton: i18n('i18nStrings.cancelButton', (_f = rest.i18nStrings) === null || _f === void 0 ? void 0 : _f.cancelButton), previousButton: i18n('i18nStrings.previousButton', (_g = rest.i18nStrings) === null || _g === void 0 ? void 0 : _g.previousButton), nextButton: i18n('i18nStrings.nextButton', (_h = rest.i18nStrings) === null || _h === void 0 ? void 0 : _h.nextButton), optional: i18n('i18nStrings.optional', (_j = rest.i18nStrings) === null || _j === void 0 ? void 0 : _j.optional) });
    if (activeStepIndex && activeStepIndex >= steps.length) {
        warnOnce('Wizard', `You have set \`activeStepIndex\` to ${activeStepIndex} but you have provided only ${steps.length} steps. Its value is ignored and the component uses ${steps.length - 1} instead.`);
    }
    if (allowSkipTo && !skipToButtonLabel) {
        warnOnce('Wizard', `You have set \`allowSkipTo\` but you have not provided \`i18nStrings.skipToButtonLabel\`. The skip-to button will not be rendered.`);
    }
    return (React.createElement("div", Object.assign({}, baseProps, funnelProps, { ref: ref, className: clsx(styles.root, baseProps.className) }),
        React.createElement("div", { className: clsx(styles.wizard, isVisualRefresh && styles.refresh, smallContainer && styles['small-container']) },
            React.createElement(WizardNavigation, { activeStepIndex: actualActiveStepIndex, farthestStepIndex: farthestStepIndex.current, allowSkipTo: allowSkipTo, hidden: smallContainer, i18nStrings: i18nStrings, isVisualRefresh: isVisualRefresh, isLoadingNextStep: isLoadingNextStep, onStepClick: onStepClick, onSkipToClick: onSkipToClick, steps: steps }),
            React.createElement("div", { className: clsx(styles.form, isVisualRefresh && styles.refresh, smallContainer && styles['small-container']) },
                isVisualRefresh && React.createElement("div", { className: clsx(styles.background, 'awsui-context-content-header') }),
                React.createElement(WizardForm, { steps: steps, isVisualRefresh: isVisualRefresh, showCollapsedSteps: smallContainer, i18nStrings: i18nStrings, submitButtonText: submitButtonText, activeStepIndex: actualActiveStepIndex, isPrimaryLoading: isLoadingNextStep, allowSkipTo: allowSkipTo, secondaryActions: secondaryActions, onCancelClick: onCancelClick, onPreviousClick: onPreviousClick, onSkipToClick: onSkipToClick, onPrimaryClick: onPrimaryClick })))));
}
//# sourceMappingURL=internal.js.map