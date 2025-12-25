// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/core/types';

// Types
/// Props
export type AddressInputState = {
    value: string;
    errors: string [];
};
export type AddressInputSetState = (
    updater: ( state: AddressInputState ) => AddressInputState
) => void;

export type AddressInputProps = {
    lang: {
        user: Lang;
        input: Lang;
    };
    id?: string;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    validation?: boolean;
    state: AddressInputState;
    setState: AddressInputSetState;
};

/// Dictionary
export type GetAddressErrorsReturn = {
    required: string;
    lang: string;
    pattern: string;
    max: string;
};

/// Functions
export type OnChangeParams = {
    props: AddressInputProps;
    event: ChangeEvent< HTMLInputElement >;
};