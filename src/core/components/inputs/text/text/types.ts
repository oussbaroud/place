// Import
/// Types
import { ChangeEvent } from 'react';
import { ZodArray, ZodString } from 'zod';
import { getIsArray, Lang } from '@/core/types';

// Types
/// State
export interface TextInputState {
    value: string;
    errors: string [];
}
export interface TextInputSOState extends TextInputState {
    opened: boolean;
    options: string [];
}
export interface TextInputCOState extends TextInputSOState {
    values: string [];
}

/// Set State
export type TextInputSetState = ( 
    updater: ( state: TextInputState ) => TextInputState
) => void;
export type TextInputSOSetState = (
    updater: ( state: TextInputSOState ) => TextInputSOState
) => void;
export type TextInputCOSetState = (
    updater: ( state: TextInputCOState ) => TextInputCOState
) => void;

/// Props
export interface TextInputBaseProps {
    lang: {
        user: Lang;
        input: Lang;
    };
    id?: string;
    label: string;
    isLabelHidden?: boolean;
    placeholder: string;
    notes?: string [];
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    isOptional?: boolean;
    edit?: ( { value }: { value: string } ) => string;
    pattern?: RegExp;
    schema?: ZodString | ZodArray< ZodString >;
};

export interface TextInputFieldProps extends TextInputBaseProps {
    type: 'field';
    state: TextInputState;
    setState: TextInputSetState;
};
export interface TextInputFieldSOProps extends TextInputBaseProps {
    type: 'field-so';
    options: string [];
    default?: string;
    state: TextInputSOState;
    setState: TextInputSOSetState;
};
export interface TextInputFieldCOProps extends TextInputBaseProps {
    type: 'field-co';
    options: string [];
    default?: string;
    separation?: ', ' | '. ';
    state: TextInputCOState;
    setState: TextInputCOSetState;
};

export interface TextInputAreaProps extends TextInputBaseProps {
    type: 'area';
    state: TextInputState;
    setState: TextInputSetState;
};
export interface TextInputAreaCOProps extends TextInputBaseProps {
    type: 'area-co';
    options: string [];
    default?: string;
    state: TextInputCOState;
    setState: TextInputCOSetState;
};

export type TextInputProps = TextInputFieldProps | TextInputFieldSOProps | TextInputFieldCOProps | TextInputAreaProps | TextInputAreaCOProps;

/// Functions
export type GetValueParams = {
    props: TextInputProps;
};

export type GetClickNewOpenedParams = {
    opened: boolean;
    options: string [];
};
export type OnClickParams = {
    props: TextInputProps;
};

export type GetPatternValueParams = {
    props: TextInputProps;
    value: string;
    newValue: string;
};
export type GetEditValueParams = {
    props: TextInputProps;
    newValue: string;
};
export type GetChangeNewValueParams = {
    props: TextInputProps;
    value: string;
    targetValue: string;
};
export type GetFilterOptionsParams = {
    options: string [];
    value: string;
};
export type GetChangeNewOptionsParams = {
    props: TextInputProps;
    newValue: string;
};
export type GetChangeNewOpenedParams = {
    props: TextInputProps;
    newOptions: string [];
};
export type GetChangeNewValuesParams = {
    props: TextInputProps;
    newValue: string;
    values: string [];
};
export type OnChangeParams = {
    props: TextInputProps;
    event: ChangeEvent< HTMLInputElement | HTMLTextAreaElement >;
};

// Safeguards
/// State
export function isTextInputState ( object: any ): object is TextInputState {
    // Keys
    const allowedKeys = [ 'value', 'errors' ];
    const objKeys = Object.keys( object );

    // Return
    return (
        // Object
        object &&
        typeof object === 'object' &&

        // Keys
        objKeys.every( ( key ) => allowedKeys.includes( key ) ) &&
        allowedKeys.every( ( key ) => objKeys.includes( key ) ) &&

        // Types
        typeof object.value === 'string' &&
        getIsArray( object.errors ) &&
        object.errors.every( ( error: any ) => typeof error === 'string' )
  );
};

export function isTextInputSOState ( object: any ): object is TextInputSOState {
    // Keys
    const allowedKeys = [ 'opened', 'value', 'options', 'errors' ];
    const objKeys = Object.keys( object );

    // Return
    return (
        // Object
        object &&
        typeof object === 'object' &&

        // Keys
        objKeys.every( ( key ) => allowedKeys.includes( key ) ) &&
        allowedKeys.every( ( key ) => objKeys.includes( key ) ) &&

        // Types
        typeof object.opened === 'boolean' &&
        typeof object.value === 'string' &&
        getIsArray( object.options ) &&
        object.options.every( ( option: any ) => typeof option === 'string' ) &&
        getIsArray( object.errors ) &&
        object.errors.every( ( error: any ) => typeof error === 'string' )
  );
};

export function isTextInputCOState ( object: any ): object is TextInputCOState {
    // Keys
    const allowedKeys = [ 'opened', 'value', 'values', 'options', 'errors' ];
    const objKeys = Object.keys( object );

    // Return
    return (
        // Object
        object &&
        typeof object === 'object' &&

        // Keys
        objKeys.every( ( key ) => allowedKeys.includes( key ) ) &&
        allowedKeys.every( ( key ) => objKeys.includes( key ) ) &&

        // Types
        typeof object.opened === 'boolean' &&
        typeof object.value === 'string' &&
        getIsArray( object.values ) &&
        object.values.every( ( value: any ) => typeof value === 'string' ) &&
        getIsArray( object.options ) &&
        object.options.every( ( option: any ) => typeof option === 'string' ) &&
        getIsArray( object.errors ) &&
        object.errors.every( ( error: any ) => typeof error === 'string' )
  );
};

/// Props
export function isTextInputFieldProps( props: TextInputProps ): props is TextInputFieldProps {
    return props.type === 'field';
};
export function isTextInputFieldSOProps( props: TextInputProps ): props is TextInputFieldSOProps {
    return props.type === 'field-so';
};
export function isTextInputFieldCOProps( props: TextInputProps ): props is TextInputFieldCOProps {
    return props.type === 'field-co';
};

export function isTextInputAreaProps( props: TextInputProps ): props is TextInputAreaProps {
    return props.type === 'area';
};
export function isTextInputAreaCOProps( props: TextInputProps ): props is TextInputAreaCOProps {
    return props.type === 'area-co';
};