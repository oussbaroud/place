// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/types';

// Types
/// Props
export type EmailInputState = {
    value: string;
    errors: string [];
};
export type EmailInputSetState = (
    updater: ( state: EmailInputState ) => EmailInputState
) => void;

export type EmailInputProps = {
    lang: Lang;
    id?: string;
    new?: boolean;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    validation?: boolean;
    state: EmailInputState;
    setState: EmailInputSetState;
};

/// Dictionary
export interface InputDictionaryParams {
    new?: boolean;
};
export interface GetDictionaryParams extends InputDictionaryParams {
    lang: Lang;
};

/// Validation
export type GetEmailSchemaParams = GetDictionaryParams;

/// Functions
export type OnChangeParams = {
    props: EmailInputProps;
    event: ChangeEvent< HTMLInputElement >;
};