import { SelectProps } from '../../../../select/interfaces';
export declare function prepareOptions(options: SelectProps.Options, filteringType: SelectProps.FilteringType, filteringText: string): {
    filteredOptions: readonly import("../interfaces").DropdownOption[];
    parentMap: Map<import("../interfaces").DropdownOption, import("../interfaces").DropdownOption>;
    totalCount: number;
    matchesCount: number;
};
//# sourceMappingURL=prepare-options.d.ts.map