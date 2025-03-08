/// <reference types="react" />
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
export interface HayorgDxExtensionsNavigateToStepProps extends PConnFieldProps {
    text: string;
    stepID: string;
    tooltip?: string;
    variant?: 'link' | 'simple' | 'text';
    compact?: boolean;
    icon?: boolean;
    iconName?: 'pencil' | 'arrow-bend-left' | 'arrow-bend-right' | 'check' | 'undo' | 'plus';
}
declare const _default: (props: Readonly<HayorgDxExtensionsNavigateToStepProps>) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map