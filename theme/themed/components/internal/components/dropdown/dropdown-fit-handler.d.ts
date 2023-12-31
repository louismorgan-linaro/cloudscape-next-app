import { Dimensions } from '../../utils/scrollable-containers';
interface AvailableSpace {
    above: number;
    below: number;
    left: number;
    right: number;
}
export interface DropdownPosition {
    height: string;
    width: string;
    dropUp: boolean;
    dropLeft: boolean;
    left: string;
}
export interface InteriorDropdownPosition extends DropdownPosition {
    bottom: string;
    top: string;
}
export declare const defaultMaxDropdownWidth: number;
export declare const getAvailableSpace: ({ trigger, overflowParents, stretchWidth, stretchHeight, isMobile, }: {
    trigger: HTMLElement;
    overflowParents: ReadonlyArray<Dimensions>;
    stretchWidth?: boolean | undefined;
    stretchHeight?: boolean | undefined;
    isMobile?: boolean | undefined;
}) => AvailableSpace;
export declare const getInteriorAvailableSpace: ({ trigger, overflowParents, isMobile, }: {
    trigger: HTMLElement;
    overflowParents: ReadonlyArray<Dimensions>;
    isMobile?: boolean | undefined;
}) => AvailableSpace;
export declare const getWidths: ({ triggerElement, dropdownElement, desiredMinWidth, stretchBeyondTriggerWidth, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    desiredMinWidth?: number | undefined;
    stretchBeyondTriggerWidth?: boolean | undefined;
}) => {
    idealWidth: number;
    minWidth: number;
    triggerWidth: number;
};
export declare const hasEnoughSpaceToStretchBeyondTriggerWidth: ({ triggerElement, dropdownElement, desiredMinWidth, expandToViewport, stretchWidth, stretchHeight, isMobile, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    desiredMinWidth?: number | undefined;
    expandToViewport: boolean;
    stretchWidth: boolean;
    stretchHeight: boolean;
    isMobile: boolean;
}) => boolean;
export declare const getDropdownPosition: ({ triggerElement, dropdownElement, overflowParents, minWidth: desiredMinWidth, preferCenter, stretchWidth, stretchHeight, isMobile, stretchBeyondTriggerWidth, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    overflowParents: ReadonlyArray<Dimensions>;
    minWidth?: number | undefined;
    preferCenter?: boolean | undefined;
    stretchWidth?: boolean | undefined;
    stretchHeight?: boolean | undefined;
    isMobile?: boolean | undefined;
    stretchBeyondTriggerWidth?: boolean | undefined;
}) => DropdownPosition;
export declare const getInteriorDropdownPosition: (trigger: HTMLElement, dropdown: HTMLElement, overflowParents: ReadonlyArray<Dimensions>, isMobile?: boolean) => InteriorDropdownPosition;
export declare const calculatePosition: (dropdownElement: HTMLDivElement, triggerElement: HTMLDivElement, verticalContainerElement: HTMLDivElement, interior: boolean, expandToViewport: boolean, preferCenter: boolean, stretchWidth: boolean, stretchHeight: boolean, isMobile: boolean, minWidth?: number, stretchBeyondTriggerWidth?: boolean) => [DropdownPosition, DOMRect];
export {};
//# sourceMappingURL=dropdown-fit-handler.d.ts.map