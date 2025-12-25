'use server'

// Import
/// Types
import { OnMountParams } from './types';

/// Functions
import { shuffleArray } from '@/core/functions/data/array/functions';

/// Actions
import { getOptions } from '@/core/actions/options/actions';

// Actions
export async function onMount ( { lang, data, setState, setIsPending }: OnMountParams ) {    
    // Get
    const response = await getOptions( { lang } );
    
    // Options
    const options = response.success
    ? shuffleArray( { array: response.options } ) 
    : [];

    // Set ref
    if ( data.current )
    data.current.options = options;

    // Set states
    setState( ( state ) =>
        response.success ? ( {
            ...state,
            options,
            errors: []
        } ) : ( {
            ...state,
            options: [],
            errors: response.errors.errors
        } )
    );

    setIsPending( () => false );
};