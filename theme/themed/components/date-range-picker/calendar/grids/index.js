// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import { KeyCode } from '../../../internal/keycode';
import { isSameMonth, isAfter, isBefore, addMonths, min, max } from 'date-fns';
import InternalSpaceBetween from '../../../space-between/internal';
import { Grid } from './grid';
import styles from '../../styles.css.js';
import { hasValue } from '../../../internal/utils/has-value';
import { useDateCache } from '../../../internal/hooks/use-date-cache';
import { moveNextDay, movePrevDay, moveNextWeek, movePrevWeek, getBaseDate } from '../../../calendar/utils/navigation';
import { findDateToFocus } from '../utils';
function isVisible(date, baseDate, isSingleGrid) {
    if (isSingleGrid) {
        return isSameMonth(date, baseDate);
    }
    const previousMonth = addMonths(baseDate, -1);
    return isSameMonth(date, previousMonth) || isSameMonth(date, baseDate);
}
export const Grids = ({ baseDate, selectedStartDate, selectedEndDate, focusedDate, onFocusedDateChange, isDateEnabled, isSingleGrid, onSelectDate, onChangeMonth, locale, startOfWeek, todayAriaLabel, headingIdPrefix, }) => {
    const containerRef = useRef(null);
    const [gridHasFocus, setGridHasFocus] = useState(false);
    const focusedDateRef = useRef(null);
    const dateCache = useDateCache();
    baseDate = dateCache(baseDate);
    focusedDate = focusedDate ? dateCache(focusedDate) : null;
    useEffect(() => {
        if (focusedDate && !isVisible(focusedDate, baseDate, isSingleGrid)) {
            const direction = isAfter(focusedDate, baseDate) ? -1 : 1;
            const newMonth = !isSingleGrid && direction === -1 ? addMonths(baseDate, -1) : baseDate;
            const nearestBaseDate = getBaseDate(newMonth, isDateEnabled);
            const newFocusedDate = findDateToFocus(focusedDate, nearestBaseDate, isDateEnabled);
            onFocusedDateChange(newFocusedDate);
        }
    }, [baseDate, focusedDate, isSingleGrid, isDateEnabled, onFocusedDateChange]);
    const onGridKeyDownHandler = (e) => {
        let updatedFocusDate;
        if (focusedDate === null) {
            return;
        }
        switch (e.keyCode) {
            case KeyCode.space:
            case KeyCode.enter:
                e.preventDefault();
                if (focusedDate) {
                    onSelectDate(focusedDate);
                }
                return;
            case KeyCode.right:
                e.preventDefault();
                updatedFocusDate = moveNextDay(focusedDate, isDateEnabled);
                break;
            case KeyCode.left:
                e.preventDefault();
                updatedFocusDate = movePrevDay(focusedDate, isDateEnabled);
                break;
            case KeyCode.up:
                e.preventDefault();
                updatedFocusDate = movePrevWeek(focusedDate, isDateEnabled);
                break;
            case KeyCode.down:
                e.preventDefault();
                updatedFocusDate = moveNextWeek(focusedDate, isDateEnabled);
                break;
            default:
                return;
        }
        const updatedDateIsVisible = isVisible(updatedFocusDate, baseDate, isSingleGrid);
        if (!updatedDateIsVisible) {
            const newMonthIsOnLeftSide = !isSingleGrid && isBefore(updatedFocusDate, baseDate);
            onChangeMonth(newMonthIsOnLeftSide ? addMonths(updatedFocusDate, 1) : updatedFocusDate);
        }
        onFocusedDateChange(updatedFocusDate);
    };
    useEffect(() => {
        // focus current date if the focus is already inside the calendar
        if (focusedDate !== null && gridHasFocus) {
            if (focusedDateRef.current && focusedDateRef.current !== document.activeElement) {
                focusedDateRef.current.focus();
            }
        }
    }, [focusedDate, gridHasFocus]);
    const onGridBlur = (event) => {
        var _a;
        /*
         IE11 does not support event.relatedTarget, but sets document.activeElement to the newly
         focused element before the onBlur handler is called.
    
         However, other browsers do not make any guarantees for the value of document.activeElement
         during the execution of an onBlur handler. Therefore, we have to use event.relatedTarget
         instead.
         */
        const newFocusTarget = event.relatedTarget || document.activeElement;
        const newFocusTargetIsInGrid = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(newFocusTarget);
        if (newFocusTarget && !newFocusTargetIsInGrid && gridHasFocus) {
            setGridHasFocus(false);
        }
    };
    const onGridFocus = () => {
        if (!gridHasFocus) {
            setGridHasFocus(true);
        }
    };
    const isRangeVisible = (selectedStartDate && selectedEndDate) || gridHasFocus;
    const rangeEnds = [selectedStartDate !== null && selectedStartDate !== void 0 ? selectedStartDate : focusedDate, selectedEndDate !== null && selectedEndDate !== void 0 ? selectedEndDate : focusedDate].filter(hasValue);
    const rangeStartDate = min(rangeEnds);
    const rangeEndDate = max(rangeEnds);
    return (React.createElement("div", { ref: containerRef, onFocus: onGridFocus, onBlur: onGridBlur },
        React.createElement(InternalSpaceBetween, { size: "xs", direction: "horizontal" },
            !isSingleGrid && (React.createElement(Grid, { className: styles['first-grid'], baseDate: addMonths(baseDate, -1), selectedEndDate: selectedEndDate, selectedStartDate: selectedStartDate, rangeStartDate: isRangeVisible ? rangeStartDate : null, rangeEndDate: isRangeVisible ? rangeEndDate : null, focusedDate: focusedDate, focusedDateRef: focusedDateRef, isDateEnabled: isDateEnabled, onSelectDate: onSelectDate, onGridKeyDownHandler: onGridKeyDownHandler, onFocusedDateChange: onFocusedDateChange, locale: locale, startOfWeek: startOfWeek, todayAriaLabel: todayAriaLabel, ariaLabelledby: `${headingIdPrefix}-prevmonth` })),
            React.createElement(Grid, { className: styles['second-grid'], baseDate: baseDate, selectedEndDate: selectedEndDate, selectedStartDate: selectedStartDate, rangeStartDate: isRangeVisible ? rangeStartDate : null, rangeEndDate: isRangeVisible ? rangeEndDate : null, focusedDate: focusedDate, focusedDateRef: focusedDateRef, isDateEnabled: isDateEnabled, onSelectDate: onSelectDate, onGridKeyDownHandler: onGridKeyDownHandler, onFocusedDateChange: onFocusedDateChange, locale: locale, startOfWeek: startOfWeek, todayAriaLabel: todayAriaLabel, ariaLabelledby: `${headingIdPrefix}-currentmonth` }))));
};
//# sourceMappingURL=index.js.map