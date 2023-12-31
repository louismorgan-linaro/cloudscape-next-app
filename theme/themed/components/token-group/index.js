import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTokenGroup from './internal';
export default function TokenGroup(_a) {
    var { items = [], alignment = 'horizontal' } = _a, props = __rest(_a, ["items", "alignment"]);
    const baseComponentProps = useBaseComponent('TokenGroup');
    return React.createElement(InternalTokenGroup, Object.assign({ items: items, alignment: alignment }, props, baseComponentProps));
}
applyDisplayName(TokenGroup, 'TokenGroup');
//# sourceMappingURL=index.js.map