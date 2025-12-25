// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/core/types';

// Types
/// Props
export type FirstNameInputState = {
    value: string;
    errors: string [];
};
export type FirstNameInputSetState = (
    updater: ( state: FirstNameInputState ) => FirstNameInputState
) => void;

export type FirstNameInputProps = {
    lang: {
        user: Lang;
        input: Lang;
    };
    id?: string;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    validation?: boolean;
    state: FirstNameInputState;
    setState: FirstNameInputSetState;
};

/// Dictionary
export type GetFirstNameErrorsReturn = {
    required: string;
    lang: string;
    max: string;
};

/// Functions
export type OnChangeParams = {
    props: FirstNameInputProps;
    event: ChangeEvent< HTMLInputElement >;
};