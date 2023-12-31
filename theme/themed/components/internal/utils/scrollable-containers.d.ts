export interface Dimensions {
    height: number;
    width: number;
    top: number;
    left: number;
}
export declare const getOverflowParents: (element: HTMLElement) => HTMLElement[];
export declare const getOverflowParentDimensions: ({ element, excludeClosestParent, expandToViewport, canExpandOutsideViewport, }: {
    element: HTMLElement;
    excludeClosestParent: boolean;
    expandToViewport: boolean;
    canExpandOutsideViewport: boolean;
}) => Dimensions[];
type ScrollIntoViewOptions = Parameters<HTMLElement['scrollIntoView']>[0];
/**
 * Calls `scrollIntoView` on the provided element with sensible defaults. If
 * the element does not existed or does not support the `scrollIntoView`
 * method, it will do nothing. This wrapper is created to support environments
 * where the native function is not available like JSDom (feature request:
 * https://github.com/jsdom/jsdom/issues/1422).
 *
 * @param element to be scrolled into view
 * @param options native options for `scrollIntoView`
 */
export declare function scrollElementIntoView(element: HTMLElement | undefined, options?: ScrollIntoViewOptions): void;
export {};
//# sourceMappingURL=scrollable-containers.d.ts.map