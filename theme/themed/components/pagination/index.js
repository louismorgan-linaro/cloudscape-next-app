// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalPagination from './internal';
export default function Pagination(props) {
    const baseComponentProps = useBaseComponent('Pagination');
    return React.createElement(InternalPagination, Object.assign({}, props, baseComponentProps));
}
applyDisplayName(Pagination, 'Pagination');
//# sourceMappingURL=index.js.map