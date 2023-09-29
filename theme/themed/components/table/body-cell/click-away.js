// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef } from 'react';
import { nodeBelongs } from '../../internal/utils/node-belongs';
import { useStableCallback } from '@cloudscape-design/component-toolkit/internal';
export function useClickAway(onClick) {
    const awayRef = useRef(null);
    const onClickStable = useStableCallback(onClick);
    useEffect(() => {
        function handleClick(event) {
            if (!nodeBelongs(awayRef.current, event.target)) {
                onClickStable();
            }
        }
        // contains returns wrong result if the next render would remove the element
        // but capture phase happens before the render, so returns correct result
        // Ref: https://github.com/facebook/react/issues/20325
        document.addEventListener('click', handleClick, { capture: true });
        return () => document.removeEventListener('click', handleClick, { capture: true });
    }, [onClickStable]);
    return awayRef;
}
//# sourceMappingURL=click-away.js.map