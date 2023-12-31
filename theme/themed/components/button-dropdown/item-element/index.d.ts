/// <reference types="react" />
import { ItemProps } from '../interfaces';
import { ButtonDropdownProps } from '../interfaces';
declare const ItemElement: ({ item, disabled, onItemActivate, highlighted, highlightItem, first, last, hasCategoryHeader, isKeyboardHighlighted, variant, }: ItemProps) => JSX.Element;
export type InternalItemProps = ButtonDropdownProps.Item & {
    badge?: boolean;
};
export default ItemElement;
//# sourceMappingURL=index.d.ts.map