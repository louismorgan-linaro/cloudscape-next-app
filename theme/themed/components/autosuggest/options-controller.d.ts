import { AutosuggestItem, AutosuggestProps } from './interfaces';
import { HighlightedOptionHandlers, HighlightedOptionState } from '../internal/components/options-list/utils/use-highlight-option';
type Options = AutosuggestProps.Options;
export interface UseAutosuggestItemsProps {
    options: Options;
    filterValue: string;
    filterText: string;
    filteringType: AutosuggestProps.FilteringType;
    hideEnteredTextLabel?: boolean;
    onSelectItem: (option: AutosuggestItem) => void;
}
export interface AutosuggestItemsState extends HighlightedOptionState<AutosuggestItem> {
    items: readonly AutosuggestItem[];
    showAll: boolean;
    getItemGroup: (item: AutosuggestItem) => undefined | AutosuggestProps.OptionGroup;
}
export interface AutosuggestItemsHandlers extends HighlightedOptionHandlers<AutosuggestItem> {
    setShowAll(value: boolean): void;
    selectHighlightedOptionWithKeyboard(): boolean;
    highlightVisibleOptionWithMouse(index: number): void;
    selectVisibleOptionWithMouse(index: number): void;
}
export declare const useAutosuggestItems: ({ options, filterValue, filterText, filteringType, hideEnteredTextLabel, onSelectItem, }: UseAutosuggestItemsProps) => [AutosuggestItemsState, AutosuggestItemsHandlers];
export {};
//# sourceMappingURL=options-controller.d.ts.map