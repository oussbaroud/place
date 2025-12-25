// Import
/// Dictionary
import { getPhoneNumberDictionary } from './dictionary';

/// Types
import { GetPhoneNumberSchemaParams } from './types';

/// Patterns
import { validPhoneNumberPattern } from './patterns';

/// Module
import { z } from 'zod';

// Schemas
export function getPhoneNumberSchema ( params: GetPhoneNumberSchemaParams ) {
    // Dictionary / Errors
    const dictionary = getPhoneNumberDictionary( params );
 
    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( validPhoneNumberPattern, { message: dictionary.errors.pattern } )
    .min( 9, { message: dictionary.errors.min } )
    .max( 17, { message: dictionary.errors.max } )

    // Return
    return schema;
};