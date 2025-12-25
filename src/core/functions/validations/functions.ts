// Import
/// Types / Safe Guards
import { ZodType } from 'zod';
import { Errors, getIsArray, getIsValidPath, getIsSameType, getIsObject } from '@/core/types';
import { BubbleErrorsPathParams, ExtendErrorsPathParams, GetInputErrorsParams, GetInputErrorsReturn, GetParseErrorsParams, GetStateErrorsParams, GetStateErrorsReturn, HasErrorsBeforePathParams, IsErrorsHiddenParams, IsLanguageMatchParams, SetStateErrorsParams, ValidateParams } from './types';

/// Functions
import { formatErrors, formatState, traverseStateErrors } from '@/core/functions/data/functions';

// Functions
/// Bubble errors path
export function bubbleErrorsPath ( { errors, paths }: BubbleErrorsPathParams ): Errors {
    return errors.map( ( error ) => {
        const newPath = paths.find( ( path ) => path.every( ( key, keyIndex ) => key === error.path[ keyIndex ] || ( key === 'number' && typeof error.path[ keyIndex ] === 'number' ) ) );
        return newPath ? { ...error, path: newPath } : error;
    } );
};

/// Extend errors path
export function extendErrorsPath ( { errors, extension }: ExtendErrorsPathParams ) {
    return errors.map( ( error ) => ( { ...error, path: [ ...extension, ...error.path ] } ) ) ;
};

/// Is language match 
export function isLanguageMatch< T extends undefined | string | string [] > ( { value1, value2 }: IsLanguageMatchParams< T > ) {
    // Valid
    const valid = getIsArray( value1 ) && getIsArray( value2 )
    ? value1.length === value2.length
    : getIsSameType( { value1, value2 } );

    // Return
    return valid;
};

/// Get input errors
export function getInputErrors< T extends undefined | ZodType > ( { schema, value }: GetInputErrorsParams< T > ): GetInputErrorsReturn< T > {
    const result = schema?.safeParse( value );
    const errors = result
    ? getParseErrors( { result } ).map( ( error ) => error.message )
    : [];
    
    return errors as T extends undefined ? undefined : string [];
};

/// Get parse errors
export function getParseErrors ( { result }: GetParseErrorsParams ) {
    return !result.success
    ? result.error?.issues.map( ( error ) => ( { path: error.path, message: error.message } ) )
    : [];
};

/// Get state errors
export function getStateErrors< T extends any > ( { schema, state }: GetStateErrorsParams< T > ): GetStateErrorsReturn< T > {
    const errors = formatErrors( { errors: schema.safeParse( formatState( { state } ) ).error } );

    return errors as GetStateErrorsReturn< T >;
};

/// Set state errors
export function setStateErrors ( { setState, errors }: SetStateErrorsParams ): any {
    // Set state
    setState( ( state: any ) => {
        // State / Has change
        const [ newState, hasChange ] = traverseStateErrors( { state, errors } );

        // Return
        if ( hasChange ) {
            return newState;

        } else {
            return state;
        };
    } );
};

/// Validate
export function validate ( { lang, state, setState, getSchema }: ValidateParams ) {
    // Validation
    const schema = getSchema( { lang } );
    const errors = getStateErrors( { schema, state } );

    // Set state
    setStateErrors( { setState, errors } );
};

/// Has errors before path
export function hasErrorsBeforePath ( { value, path }: HasErrorsBeforePathParams ): boolean {
    if ( getIsArray( value ) ) {
        const currentPath = path[ 0 ] as number;

        for ( let subValueIndex = 0; subValueIndex < value.length; subValueIndex++ ) {
            const subValue = value[ subValueIndex ];

            if (
                ( path.length === 1 && subValueIndex === currentPath ) ||
                ( path.length > 1 && subValueIndex > currentPath )
            ) {
                break;

            } else {
                const newPath = subValueIndex === currentPath ? path.slice( 1 ) : [];
                const result = hasErrorsBeforePath( { value: subValue, path: newPath } );

                if ( result )
                return true;
            };
        };
        
        return false;

    } else if ( getIsObject( value ) ) {
        if ( 'errors' in value && 'value' in value ) {
            return value.errors.length > 0;

        } else {
            const entries = Object.entries( value );

            const currentPath = path[ 0 ] as string;
            const currentPathIndex = entries.findIndex( ( [ key ] ) => key === currentPath );

            for ( const [ subValueIndex, [ subValueKey, subValue ] ] of entries.entries() ) {
                if ( 
                    ( path.length === 1 && subValueIndex === currentPathIndex ) ||
                    ( path.length > 1 && subValueIndex > currentPathIndex )
                 ) {
                    break;

                } else if ( subValueKey === 'errors' ) {
                    continue;

                } else {
                    const newPath = subValueKey === currentPath ? path.slice( 1 ) : [];
                    const result = hasErrorsBeforePath( { value: subValue, path: newPath } );

                    if ( result )
                    return true;
                };
            };
            
            return false;
        };

    } else {
        return false;
    };
};

/// Is errors hidden
export function getIsErrorsHidden ( { state, path }: IsErrorsHiddenParams ): boolean {
    const isValidPath = getIsValidPath( { value: state, path } );

    if ( !isValidPath )
    throw new Error( 'isErrorsHidden Function Error: Unvalid path' );

    return hasErrorsBeforePath( { value: state, path } );
};