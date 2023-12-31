/// <reference types="react" />
import { BoxProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
type InternalBoxProps = BoxProps & InternalBaseComponentProps;
export default function InternalBox({ variant, tagOverride, margin, padding, display, textAlign, float, fontSize, fontWeight, color, children, __internalRootRef, ...props }: InternalBoxProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map