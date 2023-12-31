/// <reference types="react" />
import { ButtonDropdownProps, InternalButtonDropdownProps } from '../../button-dropdown/interfaces';
import { CancelableEventHandler } from '../../internal/events';
import { DrawerItem } from './interfaces';
interface OverflowMenuProps {
    items: DrawerItem[];
    onItemClick: CancelableEventHandler<ButtonDropdownProps.ItemClickDetails>;
    customTriggerBuilder?: InternalButtonDropdownProps['customTriggerBuilder'];
    ariaLabel?: string;
}
export default function OverflowMenu({ items, onItemClick, customTriggerBuilder, ariaLabel }: OverflowMenuProps): JSX.Element;
export {};
//# sourceMappingURL=overflow-menu.d.ts.map