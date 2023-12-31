// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback } from 'react';
import { KeyCode } from '../../../keycode';
const HOME = 36;
const END = 35;
export const useMenuKeyboard = ({ moveHighlight, selectOption, goHome, goEnd, closeDropdown, preventNativeSpace = false, }) => {
    return useCallback((e) => {
        switch (e.detail.keyCode) {
            case KeyCode.up:
                e.preventDefault();
                moveHighlight(-1);
                break;
            case KeyCode.down:
                e.preventDefault();
                moveHighlight(1);
                break;
            case HOME:
                goHome();
                break;
            case END:
                goEnd();
                break;
            case KeyCode.escape:
                closeDropdown();
                break;
            case KeyCode.enter:
                e.preventDefault();
                selectOption();
                break;
            case KeyCode.space:
                if (preventNativeSpace) {
                    e.preventDefault();
                    selectOption();
                }
        }
    }, [moveHighlight, selectOption, goHome, goEnd, closeDropdown, preventNativeSpace]);
};
export const useTriggerKeyboard = ({ openDropdown, goHome }) => {
    return useCallback((e) => {
        switch (e.detail.keyCode) {
            case KeyCode.up:
            case KeyCode.down:
                e.preventDefault();
                goHome();
                openDropdown();
                break;
            case KeyCode.space:
            case KeyCode.enter:
                e.preventDefault();
                openDropdown();
                break;
        }
    }, [openDropdown, goHome]);
};
//# sourceMappingURL=use-keyboard.js.map