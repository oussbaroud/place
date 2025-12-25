// Import
/// Dictionary
import { getPasswordDictionary } from './dictionary';

/// Types
import { GetSchemaParams } from './types';

/// Module
import { z } from 'zod';

// Schemas
export function getPasswordSchema ( params: GetSchemaParams ) {
    // Dictionary / Errors
    const dictionary = getPasswordDictionary( params );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .min( 10, { message: dictionary.errors.min } )
    .max( 50, { message: dictionary.errors.max } );

    // Return
    return schema;
};