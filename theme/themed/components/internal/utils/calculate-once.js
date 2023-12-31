// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function calculateOnce(callback) {
    let result = undefined;
    return () => {
        if (result === undefined) {
            result = callback();
        }
        return result;
    };
}
//# sourceMappingURL=calculate-once.js.map