import React from 'react';
import { OptionsListProps } from '../internal/components/options-list';
import { AutosuggestProps, AutosuggestItem } from './interfaces';
import { AutosuggestItemsState } from './options-controller';
export interface ListProps {
    autosuggestItemsState: AutosuggestItemsState;
    menuProps: Omit<OptionsListProps, 'children'>;
    handleLoadMore: () => void;
    enteredTextLabel?: AutosuggestProps.EnteredTextLabel;
    highlightedA11yProps: Record<string, string | number | boolean>;
    hasDropdownStatus?: boolean;
    highlightText: string;
    listBottom?: React.ReactNode;
    screenReaderContent?: string;
}
export declare const getOptionProps: (index: number, item: AutosuggestItem, filteredItems: readonly AutosuggestItem[], highlightedA11yProps: ListProps['highlightedA11yProps'], highlightedOption?: AutosuggestItem, hasDropdownStatus?: boolean) => {
    className?: string | undefined;
    id?: string | undefined;
    nativeAttributes: Record<string, string | number | boolean>;
    padBottom: boolean;
};
declare const PlainList: ({ autosuggestItemsState, handleLoadMore, menuProps, enteredTextLabel, highlightedA11yProps, hasDropdownStatus, highlightText, listBottom, screenReaderContent, }: ListProps) => JSX.Element;
export default PlainList;
//# sourceMappingURL=plain-list.d.ts.map