// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/core/types';

// Types
/// Props
export type OTPInputState = {
    value: string;
    errors: string [];
}
export type OTPInputSetState = (
    updater: ( state: OTPInputState ) => OTPInputState
) => void;

export type OTPInputProps = {
    lang: Lang;
    id?: string;
    new?: boolean;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    validation?: boolean;
    state: OTPInputState;
    setState: OTPInputSetState;
};

/// Functions
export type OnChangeParams = {
    props: OTPInputProps;
    event: ChangeEvent< HTMLInputElement >;
};