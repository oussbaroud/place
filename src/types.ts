// Import
// Types
import { Dispatch, RefObject, SetStateAction } from 'react';
import { ZodError, ZodObject, ZodRawShape, ZodType } from 'zod';

// Types
export type IsPending = [ boolean, DispatchSetState< boolean > ];
export type AnyObject = { [ key: string ]: any; };
export type DispatchSetState< T > = Dispatch< SetStateAction < T > >;
export type PathSetState< T > = ( ( updater: ( state: T ) => T ) => void );
export type PathSetRef< T > = ( ( updater: ( state: T ) => T ) => void );


export type ZodSafeParseReturn< Input = unknown, Output = unknown > =
| { success: true; data: Output }
| { success: false; error: ZodError< Input > };

export type Lang = 'en' | 'fr' | 'ar' ;
export type InputItems = 'label' | 'placeholder';

export type Path = PropertyKey [];
export type Errors = { path: Path; message: string; } [];

export type DivRef = undefined | RefObject< null | HTMLDivElement >;
export type DivsRef = RefObject< null | HTMLDivElement > [];

export type GetDictionaryParams = { lang: Lang; new?: boolean; index?: number; };
export type GetCrossDictionaryParams = { lang: { user: Lang; input: Lang; }; new?: boolean; index?: number; };
export type GetPatternParams = { lang: Lang; };
export type GetSchemaParams = { lang: Lang; };
export type GetCrossSchemaParams = { lang: { user: Lang; input: Lang; }; };

export type TranslateParams< T > = { lang: { user: Lang; input: Lang; }; key: T; value: string; };

export type IStateParams = { lang: Lang; };
export type IRefParams = { title: DivRef; };

export type ErrorsObject = { errors: string []; };

// Safeguards
/// Arrays
export function getIsArray ( value: any ): value is Array< any > {
    return (
        Array.isArray( value ) &&
        value.length > 0
    );
};

/// Object
export function getIsObject ( value: any ): value is Record< string, any > {
    return (
        typeof value === 'object' &&
        value !== null &&
        Object.getPrototypeOf( value ) === Object.prototype &&
        Object.keys( value ).length > 0
    );
};
export function getIsZodObject ( schema: ZodType ): schema is ZodObject< ZodRawShape > {
    return schema instanceof ZodObject;
};

/// Ref
export function getIsRef ( value: any ): value is RefObject< any > {
    return (
        typeof value === 'object' &&
        value !== null &&
        'current' in value
    );
};

/// Html Element
export function getIsHTMLElement ( value: any ): value is HTMLElement {
    return value instanceof HTMLElement
};

/// Path
export function getIsValidPath ( { value, path }: { value: any; path: Path; } ): boolean {
    // Current
    let current = value;

    // For every key
    for ( const key of path ) {
        // If undefined
        if ( !current[ key ] ) {
            return false;
        };

        // Update current
        current = current[ key ];
    };

    // Return
    return true;
};

/// Same
export function getIsSameType ( { value1, value2 }: { value1: any; value2: any; } ): boolean {
    const value1IsArray = getIsArray( value1 );
    const value2IsArray = getIsArray( value2 );
    
    if ( value1 == null || value2 == null ) {
        return value1 === value2

    } else if ( value1IsArray || value2IsArray ) {
        return value1IsArray === value2IsArray;

    } else {
        return (
            typeof value1 === typeof value2 &&
            value1.constructor === value2.constructor
        );
    };
};