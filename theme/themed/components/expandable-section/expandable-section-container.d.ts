import { InternalContainerProps } from '../container/internal';
import React from 'react';
import { ExpandableSectionProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
export interface ExpandableSectionContainerProps extends InternalBaseComponentProps {
    className?: string;
    header: React.ReactNode;
    children?: React.ReactNode;
    variant: ExpandableSectionProps.Variant;
    expanded: boolean | undefined;
    disableContentPaddings: boolean | undefined;
    __funnelSubStepProps?: InternalContainerProps['__funnelSubStepProps'];
    __subStepRef?: InternalContainerProps['__subStepRef'];
}
export declare const ExpandableSectionContainer: ({ className, children, header, variant, expanded, disableContentPaddings, __internalRootRef, __funnelSubStepProps, __subStepRef, ...rest }: ExpandableSectionContainerProps) => JSX.Element;
//# sourceMappingURL=expandable-section-container.d.ts.map