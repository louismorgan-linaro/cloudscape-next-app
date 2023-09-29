import React from 'react';
import { IconProps } from '../../icon/interfaces';
export interface AppLayoutButtonProps {
    className?: string;
    ariaLabel: string | undefined;
    ariaExpanded?: boolean;
    ariaControls?: string;
    iconName?: IconProps.Name;
    iconSvg?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    testId?: string;
    badge?: boolean;
}
//# sourceMappingURL=interfaces.d.ts.map