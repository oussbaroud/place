// Import
/// Dictionary
import { getOTPDictionary } from './dictionary';

/// Types
import { GetSchemaParams } from '@/types';

/// Patterns
import { validOTPPattern } from './patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getOTPSchema ( { lang }: GetSchemaParams ) {
    // Dictionary / Errors
    const dictionary = getOTPDictionary( { lang } );
    const errors = dictionary.errors;

    // Schema
    const schema = z
    .string( { error: errors.required } )
    .regex( validOTPPattern, { message: errors.pattern } )
    .length( 6, { message: errors.length } );

    // Return
    return schema;
};