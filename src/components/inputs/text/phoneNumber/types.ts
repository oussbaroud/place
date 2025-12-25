// Import
/// Types
import { ChangeEvent } from 'react';
import { Lang } from '@/types';

// Types
/// Country codes
export type CountryCode = { 
    name: string;
    code: number;
};

/// Props
export type PhoneNumberInputState = {
    opened: boolean;
    value: string;
    options: CountryCode [];
    errors: string [];
};
export type PhoneNumberInputSetState = (
    updater: ( state: PhoneNumberInputState ) => PhoneNumberInputState
) => void;

export interface PhoneNumberInputProps {
    lang: Lang;
    new?: boolean;
    id?: string;
    index?: number;
    validation?: boolean;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    state: PhoneNumberInputState;
    setState: PhoneNumberInputSetState;
    remove?: () => void;
};

/// Dictionary
export interface InputDictionaryParams {
    new?: boolean;
    index?: number;
};
export interface GetDictionaryParams extends InputDictionaryParams {
    lang: Lang;
};

/// Validation
export type GetPhoneNumberSchemaParams = GetDictionaryParams;

/// Functions
export type GetNewValueParams = {
    value: string;
    newValue: string;
};

export type GetNewOpenedParams = {
    value: string;
};

export type GetNewOptionsParams = {
    props: PhoneNumberInputProps;
    opened: boolean;
    options: CountryCode [];
};

export type OnClickParams = {
    props: PhoneNumberInputProps;
};

export type OnChangeParams = {
    props: PhoneNumberInputProps;
    event: ChangeEvent< HTMLInputElement >;
};