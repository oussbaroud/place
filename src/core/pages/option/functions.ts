'use client'

// Import
/// Dictionary
import { getOptionDictionary } from './dictionary';

/// Types
import { OnMountParams } from './types';

/// Actions
import { getOption } from '@/core/actions/options/actions';

// Functions
export async function onMount ( { lang, id, setState, setIsPending }: OnMountParams ) {
    // Dictionary
    const dictionary = getOptionDictionary( { lang } );
    
    // Get
    const response = await getOption( { lang, id } );

    // Set states
    setState( () =>
        response.success ? ( {
            option: response.option,
            errors: response.option ? [] : [ dictionary.errors.notFound ]
        } ) : ( {
            option: null,
            errors: response.errors.errors
        } )
    );

    setIsPending( () => false );
};