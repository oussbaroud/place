// Import
/// Dictionary
import { getFirstNameDictionary } from './dictionary';

/// Types
import { GetCrossSchemaParams } from '@/core/types';

/// Patterns
import { getValidNamePattern } from '@/core/patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getFirstNameSchema ( { lang }: GetCrossSchemaParams ) {
    // Dictionary
    const dictionary = getFirstNameDictionary( { lang } );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( getValidNamePattern( { lang: lang.input } ), { message: dictionary.errors.lang } )
    .max( 50, { message: dictionary.errors.max } );

    // Return
    return schema;
};