// Import
/// Dictionary
import { gethNameDictionary } from './dictionary';

/// Types
import { GetCrossSchemaParams } from '@/types';

/// Patterns
import { getValidNamePattern } from '@/patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getNameSchema ( { lang }: GetCrossSchemaParams ) {
    // Dictionary
    const dictionary = gethNameDictionary( { lang } );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( getValidNamePattern( { lang: lang.input } ), { message: dictionary.errors.lang } )
    .max( 50, { message: dictionary.errors.max } );

    // Return
    return schema;
};