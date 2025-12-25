// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/types';

// Types
/// Props
export type LastNameInputState = {
    value: string;
    errors: string [];
};
export type LastNameInputSetState = (
    updater: ( state: LastNameInputState ) => LastNameInputState
) => void;

export type LastNameInputProps = {
    lang: {
        user: Lang;
        input: Lang;
    };
    id?: string;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    validation?: boolean;
    state: LastNameInputState;
    setState: LastNameInputSetState;
};

/// Dictionary
export type GetLastNameErrorsReturn = {
    required: string;
    lang: string;
    max: string;
};

/// Functions
export type OnChangeParams = {
    props: LastNameInputProps;
    event: ChangeEvent< HTMLInputElement >;
};