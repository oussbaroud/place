// Import
/// Patterns
import { validLineBreakPattern } from '@/patterns';
import { UpperCaseFirstLetterParams, UpperCaseParams } from './types';

// Functions
/// Upper case first letter
export function upperCaseFirstLetter ( { value }: UpperCaseFirstLetterParams ): string {
    return value[ 0 ].toUpperCase() + value.slice( 1 );
};

/// Upper case every word first letter
export function upperCase ( { value }: UpperCaseParams ): string {
    return value
    .split( ' ' )
    .map( ( value ) => value ? upperCaseFirstLetter( { value } ) : '' )
    .join( ' ' ).split( validLineBreakPattern )
    .map( ( value ) => value ? upperCaseFirstLetter( { value } ) : '' )
    .join( '\n' );
};