/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { TopNavigationProps } from './interfaces';
import { SomeRequired } from '../internal/types';
export type InternalTopNavigationProps = SomeRequired<TopNavigationProps, 'utilities'> & InternalBaseComponentProps;
export default function InternalTopNavigation({ __internalRootRef, identity, i18nStrings, utilities, search, ...restProps }: InternalTopNavigationProps): JSX.Element;
//# sourceMappingURL=internal.d.ts.map