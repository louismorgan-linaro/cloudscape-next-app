/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { IconProps } from './interfaces';
type InternalIconProps = IconProps & InternalBaseComponentProps & {
    badge?: boolean;
};
declare const InternalIcon: ({ name, size, variant, url, alt, svg, badge, __internalRootRef, ...props }: InternalIconProps) => JSX.Element;
export { InternalIconProps };
export default InternalIcon;
//# sourceMappingURL=internal.d.ts.map