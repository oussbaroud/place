// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/types';

// Types
/// Props
export type NameInputState = {
    value: string;
    errors: string [];
};
export type NameInputSetState = (
    updater: ( state: NameInputState ) => NameInputState
) => void;

export type NameInputProps = {
    lang: {
        user: Lang;
        input: Lang;
    };
    id?: string;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    validation?: boolean;
    state: NameInputState;
    setState: NameInputSetState;
};

/// Dictionary
export type GetNameErrorsReturn = {
    required: string;
    lang: string;
    max: string;
};

/// Functions
export type OnChangeParams = {
    props: NameInputProps;
    event: ChangeEvent< HTMLInputElement >;
};