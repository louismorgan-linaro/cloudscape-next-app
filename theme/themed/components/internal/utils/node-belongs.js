// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { findUpUntil } from './dom';
import { nodeContains } from '@cloudscape-design/component-toolkit/dom';
/**
 * Checks whether the given node (target) belongs to the container.
 * The function is similar to nodeContains but also accounts for dropdowns with expandToViewport=true.
 *
 * @param container Container node
 * @param target Node that is checked to be a descendant of the container
 */
export function nodeBelongs(container, target) {
    var _a;
    if (!(target instanceof Node)) {
        return false;
    }
    const portal = findUpUntil(target, node => node instanceof HTMLElement && !!node.dataset.awsuiReferrerId);
    const referrer = portal instanceof HTMLElement ? document.getElementById((_a = portal.dataset.awsuiReferrerId) !== null && _a !== void 0 ? _a : '') : null;
    return referrer ? nodeContains(container, referrer) : nodeContains(container, target);
}
//# sourceMappingURL=node-belongs.js.map