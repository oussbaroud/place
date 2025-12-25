// Import
/// Dictionary
import { getEmailDictionary } from './dictionary';

/// Types
import { GetEmailSchemaParams } from './types';

/// Patterns
import { validEmailPattern } from './patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getEmailSchema ( params: GetEmailSchemaParams ) {
    // Dictionary
    const dictionary = getEmailDictionary( params );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( validEmailPattern, { message: dictionary.errors.pattern } )
    .max( 254, { message: dictionary.errors.max } );

    // Return
    return schema;
};