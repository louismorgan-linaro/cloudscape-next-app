import React from 'react';
import { AutosuggestProps } from '../autosuggest/interfaces';
import { InputProps } from '../input/interfaces';
export interface TagControlProps {
    row: number;
    value: string;
    readOnly: boolean;
    defaultOptions: AutosuggestProps.Options;
    placeholder?: string;
    errorText?: string;
    loadingText?: string;
    suggestionText?: string;
    tooManySuggestionText?: string;
    limit: number;
    filteringKey?: string;
    clearAriaLabel?: string;
    enteredTextLabel?: (value: string) => string;
    onChange: (value: string, row: number) => void;
    onBlur?: (row: number) => void;
    onRequest?: (value: string) => Promise<readonly string[]>;
    initialOptionsRef?: React.MutableRefObject<AutosuggestProps.Options>;
}
export declare const TagControl: React.ForwardRefExoticComponent<TagControlProps & React.RefAttributes<InputProps.Ref>>;
export interface UndoButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}
export declare const UndoButton: React.ForwardRefExoticComponent<UndoButtonProps & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=internal.d.ts.map