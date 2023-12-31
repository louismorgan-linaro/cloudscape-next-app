// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { addDays, differenceInYears, isSameMonth, startOfMonth } from 'date-fns';
export function moveNextDay(startDate, isDateEnabled) {
    return moveDate(startDate, isDateEnabled, 1);
}
export function movePrevDay(startDate, isDateEnabled) {
    return moveDate(startDate, isDateEnabled, -1);
}
export function moveNextWeek(startDate, isDateEnabled) {
    return moveDate(startDate, isDateEnabled, 7);
}
export function movePrevWeek(startDate, isDateEnabled) {
    return moveDate(startDate, isDateEnabled, -7);
}
// Returns first enabled date of the month corresponding the given date.
// If all month's days are disabled the first day of the month is returned.
export function getBaseDate(date, isDateEnabled) {
    const startDate = startOfMonth(date);
    if (isDateEnabled(startDate)) {
        return startDate;
    }
    const firstEnabledDate = moveDate(startDate, isDateEnabled, 1);
    return isSameMonth(startDate, firstEnabledDate) ? firstEnabledDate : startDate;
}
// Iterates dates forwards or backwards until the next active date is found.
// If there is no active date in a year range the start date is returned.
function moveDate(startDate, isDateEnabled, step) {
    let current = addDays(startDate, step);
    while (!isDateEnabled(current)) {
        if (Math.abs(differenceInYears(startDate, current)) > 1) {
            return startDate;
        }
        current = addDays(current, step);
    }
    return current;
}
//# sourceMappingURL=navigation.js.map