// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function getStepInfo(annotations, index) {
    if (index >= 0) {
        let taskIndex = 0;
        for (const task of annotations) {
            if (task.steps.length <= index) {
                index -= task.steps.length;
                taskIndex++;
                continue;
            }
            return { task, step: task.steps[index], localIndex: index, taskIndex };
        }
    }
    return { task: undefined, step: undefined, localIndex: 0, taskIndex: 0 };
}
//# sourceMappingURL=utils.js.map