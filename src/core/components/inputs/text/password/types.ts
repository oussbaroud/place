// Import
/// Types
import { ChangeEvent, RefObject } from "react";
import { Lang } from "@/core/types";

// Types
/// Props
export type PasswordInputState = {
    revealed: boolean;
    value: string;
    errors: string [];
};
export type PasswordInputSetState = (
    updater: ( state: PasswordInputState ) => PasswordInputState
) => void;
export type PasswordInputProps = {
    lang: Lang;
    id?: string;
    new?: boolean;
    isLabelHidden?: boolean;
    isErrorsHidden?: boolean;
    validation?: boolean;
    state: PasswordInputState;
    setState: PasswordInputSetState;
}

/// Dictionary
export interface InputDictionaryParams {
    new?: boolean;
};
export interface GetDictionaryParams extends InputDictionaryParams {
    lang: Lang;
};

/// Validation
export type GetSchemaParams = GetDictionaryParams;

/// Functions
export type OnChangeParams = {
    props: PasswordInputProps;
    event: ChangeEvent< HTMLInputElement >;
};

export type OnClickParams = {
    props: PasswordInputProps;
    inputType: RefObject< string >;
    event: ChangeEvent< HTMLInputElement >;
};