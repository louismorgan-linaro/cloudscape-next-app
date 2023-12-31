/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { TokenGroupProps } from './interfaces';
import { SomeRequired } from '../internal/types';
type InternalTokenGroupProps = SomeRequired<TokenGroupProps, 'items' | 'alignment'> & InternalBaseComponentProps;
export default function InternalTokenGroup({ alignment, items, onDismiss, limit, i18nStrings, __internalRootRef, ...props }: InternalTokenGroupProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map