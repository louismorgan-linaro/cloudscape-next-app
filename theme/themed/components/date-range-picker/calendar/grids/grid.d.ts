import React from 'react';
import { DateRangePickerProps, DayIndex } from '../../interfaces';
/**
 * Calendar grid supports two mechanisms of keyboard navigation:
 * - Native screen-reader table navigation (semantic table markup);
 * - Keyboard arrow-keys navigation (a custom key-down handler).
 *
 * The implementation largely follows the w3 example (https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog) and shares the following issues:
 * - (table navigation) Chrome+VO - weekday is announced twice when navigating to the calendar's header;
 * - (table navigation) Safari+VO - "dimmed" state is announced twice;
 * - (table navigation) Firefox/Chrome+NVDA - cannot use table navigation if any cell has a focus;
 * - (keyboard navigation) Firefox+NVDA - every day is announced as "not selected";
 * - (keyboard navigation) Safari/Chrome+VO - weekdays are not announced;
 * - (keyboard navigation) Safari/Chrome+VO - days are not announced as interactive (clickable or selectable);
 * - (keyboard navigation) Safari/Chrome+VO - day announcements are not interruptive and can be missed if navigating fast.
 */
export interface GridProps {
    baseDate: Date;
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
    rangeStartDate: Date | null;
    rangeEndDate: Date | null;
    focusedDate: Date | null;
    focusedDateRef: React.RefObject<HTMLTableCellElement>;
    onSelectDate: (date: Date) => void;
    onGridKeyDownHandler: (e: React.KeyboardEvent) => void;
    onFocusedDateChange: React.Dispatch<React.SetStateAction<Date | null>>;
    isDateEnabled: DateRangePickerProps.IsDateEnabledFunction;
    locale: string;
    startOfWeek: DayIndex;
    todayAriaLabel?: string;
    ariaLabelledby: string;
    className?: string;
}
export declare function Grid({ baseDate, selectedStartDate, selectedEndDate, rangeStartDate, rangeEndDate, focusedDate, focusedDateRef, onSelectDate, onGridKeyDownHandler, onFocusedDateChange, isDateEnabled, locale, startOfWeek, todayAriaLabel, ariaLabelledby, className, }: GridProps): JSX.Element;
//# sourceMappingURL=grid.d.ts.map