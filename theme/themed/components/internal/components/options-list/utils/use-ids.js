// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export const getOptionId = (menuId, index) => {
    if (index < 0) {
        return undefined;
    }
    return `${menuId}-option-${index}`;
};
//# sourceMappingURL=use-ids.js.map