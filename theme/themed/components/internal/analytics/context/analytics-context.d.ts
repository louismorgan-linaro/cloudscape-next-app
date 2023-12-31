import { MutableRefObject, RefObject } from 'react';
import { FunnelType } from '../interfaces';
export type FunnelState = 'default' | 'validating' | 'complete' | 'cancelled';
export interface FunnelContextValue {
    funnelInteractionId: string | undefined;
    funnelType: FunnelType;
    optionalStepNumbers: number[];
    totalFunnelSteps: number;
    funnelSubmit: () => void;
    funnelCancel: () => void;
    setFunnelInteractionId: (funnelInteractionId: string) => void;
    submissionAttempt: number;
    funnelNextOrSubmitAttempt: () => void;
    funnelState: RefObject<FunnelState>;
    errorCount: MutableRefObject<number>;
    loadingButtonCount: MutableRefObject<number>;
    latestFocusCleanupFunction: MutableRefObject<undefined | (() => void)>;
    isInFunnel: boolean;
    wizardCount: MutableRefObject<number>;
}
export interface FunnelStepContextValue {
    stepNameSelector: string;
    stepNumber: number;
    funnelStepProps?: Record<string, string | number | boolean | undefined>;
    subStepCount: MutableRefObject<number>;
    isInStep: boolean;
    funnelInteractionId: string | undefined;
    /** This function is called when the list of substeps in this step changes.  */
    onStepChange: () => void;
}
export interface FunnelSubStepContextValue {
    subStepId: string;
    subStepSelector: string;
    subStepNameSelector: string;
    subStepRef: MutableRefObject<HTMLDivElement | null>;
    mousePressed: MutableRefObject<boolean>;
    /**
     * `isFocusedSubStep` is almost the same as checking if document.activeElement
     * is a child of the curren substep. However, `isFocusedSubStep` stays true
     * while the mouse button is pressed down, even though some browsers move the focus
     * to the body element during that time.
     */
    isFocusedSubStep: MutableRefObject<boolean>;
    /**
     * The focus cleanup function should be run when the user leaves the substep.
     */
    focusCleanupFunction: MutableRefObject<undefined | (() => void)>;
    isNestedSubStep: boolean;
    funnelSubStepProps?: Record<string, string | number | boolean | undefined>;
}
export declare const FunnelContext: import("react").Context<FunnelContextValue>;
export declare const FunnelStepContext: import("react").Context<FunnelStepContextValue>;
export declare const FunnelSubStepContext: import("react").Context<FunnelSubStepContextValue>;
//# sourceMappingURL=analytics-context.d.ts.map