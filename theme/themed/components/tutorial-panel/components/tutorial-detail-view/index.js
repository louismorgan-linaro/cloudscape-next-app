// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useMemo } from 'react';
import InternalBox from '../../../box/internal';
import { InternalButton } from '../../../button/internal';
import InternalSpaceBetween from '../../../space-between/internal';
import styles from './styles.css.js';
import { fireNonCancelableEvent } from '../../../internal/events/index';
import { CongratulationScreen } from './congratulation-screen';
import { TaskList } from './task-list';
import { useVisualRefresh } from '../../../internal/hooks/use-visual-mode';
export default function TutorialDetailView({ tutorial, onExitTutorial: onExitTutorialHandler, currentStepIndex = 0, onFeedbackClick: onFeedbackClickHandler, i18nStrings, }) {
    const isRefresh = useVisualRefresh();
    const onExitTutorial = useCallback(() => {
        fireNonCancelableEvent(onExitTutorialHandler, { tutorial });
    }, [onExitTutorialHandler, tutorial]);
    const onFeedbackClick = useMemo(() => onFeedbackClickHandler && (() => fireNonCancelableEvent(onFeedbackClickHandler, { tutorial })), [onFeedbackClickHandler, tutorial]);
    return (React.createElement(React.Fragment, null,
        React.createElement(InternalSpaceBetween, { size: "xl" },
            React.createElement("div", { className: styles['tutorial-title'] },
                React.createElement(InternalButton, { variant: "icon", onClick: onExitTutorial, ariaLabel: i18nStrings.labelExitTutorial, formAction: "none", iconName: "arrow-left" }),
                React.createElement(InternalBox, { variant: "h2", fontSize: isRefresh ? 'heading-m' : 'heading-l', padding: { top: 'xxs' }, margin: { left: 's' } }, tutorial.title)),
            React.createElement("div", null,
                React.createElement("div", { role: "status" }, tutorial.completed && (React.createElement(CongratulationScreen, { onFeedbackClick: onFeedbackClick, i18nStrings: i18nStrings }, tutorial.completedScreenDescription))),
                !tutorial.completed && (React.createElement(TaskList, { tasks: tutorial.tasks, onExitTutorial: onExitTutorial, currentGlobalStepIndex: currentStepIndex, i18nStrings: i18nStrings }))))));
}
//# sourceMappingURL=index.js.map