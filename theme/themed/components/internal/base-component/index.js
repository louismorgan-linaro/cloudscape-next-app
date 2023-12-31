// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { initAwsUiVersions } from '@cloudscape-design/component-toolkit/internal';
import { PACKAGE_SOURCE, PACKAGE_VERSION } from '../environment';
// these styles needed to be imported for every public component
import './styles.css.js';
initAwsUiVersions(PACKAGE_SOURCE, PACKAGE_VERSION);
export function getBaseProps(props) {
    const baseProps = {};
    Object.keys(props).forEach(prop => {
        if (prop === 'id' || prop === 'className' || prop.match(/^data-/)) {
            baseProps[prop] = props[prop];
        }
    });
    return baseProps;
}
//# sourceMappingURL=index.js.map