/// <reference types="react" />
import { SegmentedControlProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
type InternalSegmentedControlProps = SegmentedControlProps & InternalBaseComponentProps;
export default function InternalSegmentedControl({ selectedId, options, label, ariaLabelledby, onChange, __internalRootRef, ...props }: InternalSegmentedControlProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map