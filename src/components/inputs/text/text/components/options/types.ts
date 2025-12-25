// Import
/// Types
import { RefObject } from 'react';
import { ZodArray, ZodString } from 'zod';
import { TextInputCOSetState, TextInputCOState, TextInputSOSetState, TextInputSOState } from '../../types';

// Types
/// Props
type TextFieldInput = RefObject< null | HTMLInputElement | HTMLTextAreaElement >;
interface TextInputOptionsBaseProps {
    input: TextFieldInput;
    default?: string;
    schema?: ZodString | ZodArray< ZodString >;
};

//// Field
export interface TextInputFieldSOOProps extends TextInputOptionsBaseProps {
    type: 'field-so';
    state: TextInputSOState;
    setState: TextInputSOSetState;
};
export interface TextInputFieldCOOProps extends TextInputOptionsBaseProps {
    type: 'field-co';
    separation?: ', ' | '. ';
    state: TextInputCOState;
    setState: TextInputCOSetState;
};

//// Area
export interface TextInputAreaCOOProps extends TextInputOptionsBaseProps {
    type: 'area-co';
    state: TextInputCOState;
    setState: TextInputCOSetState;
};

//// Union
export type TextInputOptionsProps = TextInputFieldSOOProps | TextInputFieldCOOProps | TextInputAreaCOOProps;
export type TextInputCOOProps = TextInputFieldCOOProps | TextInputAreaCOOProps;

/// Context
export type Context = {
    props: TextInputOptionsProps;
    optionsId: string;
};

/// Functions
export type GetCheckedParams = {
    props: TextInputCOOProps;
    option: string;
};

export type GetOptionStyleParams = {
    props: TextInputOptionsProps;
    option: string;
};

// Safeguards
/// Props
export function isTextInputFieldSOOProps( props: TextInputOptionsProps ): props is TextInputFieldSOOProps {
    return props.type === 'field-so';
};
export function isTextInputFieldCOOProps( props: TextInputOptionsProps ): props is TextInputFieldCOOProps {
    return props.type === 'field-co';
};

export function isTextInputAreaCOOProps( props: TextInputOptionsProps ): props is TextInputAreaCOOProps {
    return props.type === 'area-co';
};