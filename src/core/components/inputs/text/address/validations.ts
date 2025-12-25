// Import
/// Dictionary
import { getAddressDictionary } from './dictionary';

/// Types
import { GetCrossSchemaParams } from '@/core/types';

/// Patterns
import { getValidLangPattern } from '@/core/patterns';
import { getValidAddressPattern } from './patterns';

/// Module
import { z } from 'zod'

// Schemas
export function getAddressSchema ( { lang }: GetCrossSchemaParams ) {
    // Dictionary
    const dictionary = getAddressDictionary( { lang } );

    // Schema
    const schema = z
    .string( { error: dictionary.errors.required } )
    .regex( getValidLangPattern( { lang: lang.input } ), { message: dictionary.errors.lang } )
    .regex( getValidAddressPattern( { lang: lang.input } ), { message: dictionary.errors.pattern } )
    .max( 100, { message: dictionary.errors.max } );

    // Return
    return schema;
};