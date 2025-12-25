// Import
/// Dictionary
import { getLastNameDictionary } from './dictionary';

/// Types
import { GetCrossSchemaParams } from '@/types';

/// Patterns
import { getValidNamePattern } from '@/patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getLastNameSchema ( { lang }: GetCrossSchemaParams ) {
    // Dictionary
    const dictionary = getLastNameDictionary( { lang } );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( getValidNamePattern( { lang: lang.input } ), { message: dictionary.errors.lang } )
    .max( 50, { message: dictionary.errors.max } );

    // Return
    return schema;
};