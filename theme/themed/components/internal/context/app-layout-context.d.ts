/// <reference types="react" />
export interface AppLayoutContextProps {
    stickyOffsetBottom: number;
    stickyOffsetTop: number;
    mobileBarHeight?: number;
    setHasStickyBackground?: (hasBackground: boolean) => void;
}
export declare const AppLayoutContext: import("react").Context<AppLayoutContextProps>;
export declare function useAppLayoutContext(): AppLayoutContextProps;
//# sourceMappingURL=app-layout-context.d.ts.map