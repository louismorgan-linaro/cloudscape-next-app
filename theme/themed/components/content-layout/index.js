// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalContentLayout from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function ContentLayout(props) {
    const baseComponentProps = useBaseComponent('ContentLayout');
    return React.createElement(InternalContentLayout, Object.assign({}, props, baseComponentProps));
}
applyDisplayName(ContentLayout, 'ContentLayout');
//# sourceMappingURL=index.js.map