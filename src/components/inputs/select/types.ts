// Import
/// Types
import { getIsArray, Lang } from '@/types';
import { ZodEnum } from 'zod';

// Types
/// Props
export type SelectInputState = {
    opened: boolean;
    value: string;
    errors: string [];
};
export type SelectInputSetState = (
    updater: ( state: SelectInputState ) => SelectInputState
) => void;

export type SelectInputProps = {
    lang: Lang;
    id?: string;
    label: string;
    isLabelHidden?: true;
    placeholder: string;
    notes?: string [];
    options: string [];
    default?: string;
    isErrorsHidden?: boolean;
    isHidden?: boolean;
    state: SelectInputState;
    setState: SelectInputSetState;
    schema?: ZodEnum< Readonly< Record< string, string > > >;
};

/// Functions
export type OnClickParams = {
    props: SelectInputProps;
};

// Safeguards
/// State
export function isSelectInputState ( object: any ): object is SelectInputState {
    // Keys
    const allowedKeys = [ 'opened', 'value', 'errors' ];
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
        getIsArray( object.errors ) &&
        object.errors.every( ( error: any ) => typeof error === 'string' )
    );
};