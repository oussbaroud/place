// Import
/// Dictionary
import { getLocationDictionary } from './dictionary';

/// Types
import { GetSchemaParams } from '@/types';

/// Patterns
import { validLocationPattern } from './patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getLocationSchema ( { lang }: GetSchemaParams ) {
    // Dictionary
    const dictionary = getLocationDictionary( { lang } );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( validLocationPattern, { message: dictionary.errors.pattern } )
    .max( 500, { message: dictionary.errors.max } );

    // Return
    return schema;
};