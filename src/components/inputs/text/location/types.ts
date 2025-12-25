// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/types';

// Types
/// Props
export type LocationInputState = {
    value: string;
    errors: string [];
};
export type LocationInputSetState = (
    updater: ( state: LocationInputState ) => LocationInputState
) => void;

export type LocationInputProps = {
    lang: Lang;
    id?: string;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    validation?: boolean;
    state: LocationInputState;
    setState: LocationInputSetState;
};

/// Functions
export type OnChangeParams = {
    props: LocationInputProps;
    event: ChangeEvent< HTMLInputElement >;
};