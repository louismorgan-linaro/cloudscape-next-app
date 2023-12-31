import React from 'react';
import { InternalDrawerProps } from '../drawer/interfaces';
import { AppLayoutProps } from '../interfaces';
export declare const TOOLS_DRAWER_ID = "awsui-internal-tools";
interface ToolsProps {
    toolsHide: boolean | undefined;
    toolsOpen: boolean | undefined;
    toolsWidth: number;
    tools: React.ReactNode | undefined;
    ariaLabels: AppLayoutProps.Labels | undefined;
}
export declare function useDrawers({ drawers: ownDrawers, __disableRuntimeDrawers: disableRuntimeDrawers, }: InternalDrawerProps & {
    __disableRuntimeDrawers?: boolean;
}, toolsProps: ToolsProps): {
    ariaLabel: string | undefined;
    overflowAriaLabel: string | undefined;
    drawers: import("../drawer/interfaces").DrawerItem[];
    activeDrawer: import("../drawer/interfaces").DrawerItem | undefined;
    activeDrawerId: string | undefined;
    activeDrawerSize: number;
    onActiveDrawerChange: (newDrawerId: string | undefined) => void;
    onActiveDrawerResize: ({ id, size }: {
        id: string;
        size: number;
    }) => void;
};
export {};
//# sourceMappingURL=use-drawers.d.ts.map