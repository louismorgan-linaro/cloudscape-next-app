/// <reference types="react" />
import { ExpandableSectionProps } from './interfaces';
import { ExpandableSectionContainerProps } from './expandable-section-container';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
export type InternalExpandableSectionProps = ExpandableSectionProps & InternalBaseComponentProps & Pick<ExpandableSectionContainerProps, '__funnelSubStepProps' | '__subStepRef'>;
export default function InternalExpandableSection({ expanded: controlledExpanded, defaultExpanded, onChange, variant, children, header, headerText, headerCounter, headerDescription, headerInfo, headerActions, headingTagOverride, disableContentPaddings, headerAriaLabel, __internalRootRef, __funnelSubStepProps, __subStepRef, ...props }: InternalExpandableSectionProps): JSX.Element;
//# sourceMappingURL=internal.d.ts.map