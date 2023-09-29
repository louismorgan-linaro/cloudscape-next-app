import React from 'react';
import { FunnelStepContextValue, FunnelSubStepContextValue } from '../context/analytics-context';
import { FunnelProps, FunnelStepProps, StepConfiguration } from '../interfaces';
export declare const FUNNEL_VERSION = "1.2";
type AnalyticsFunnelProps = {
    children?: React.ReactNode;
    stepConfiguration?: StepConfiguration[];
} & Pick<FunnelProps, 'funnelType' | 'optionalStepNumbers' | 'totalFunnelSteps'>;
export declare const AnalyticsFunnel: (props: AnalyticsFunnelProps) => JSX.Element;
export declare const CREATION_EDIT_FLOW_DONE_EVENT_NAME = "awsui-creation-edit-flow-done";
type AnalyticsFunnelStepProps = {
    children?: React.ReactNode | ((props: FunnelStepContextValue) => React.ReactNode);
} & Pick<FunnelStepProps, 'stepNumber' | 'stepNameSelector'>;
export declare const AnalyticsFunnelStep: (props: AnalyticsFunnelStepProps) => JSX.Element;
interface AnalyticsFunnelSubStepProps {
    children?: React.ReactNode | ((props: FunnelSubStepContextValue) => React.ReactNode);
}
export declare const AnalyticsFunnelSubStep: ({ children }: AnalyticsFunnelSubStepProps) => JSX.Element;
export {};
//# sourceMappingURL=analytics-funnel.d.ts.map