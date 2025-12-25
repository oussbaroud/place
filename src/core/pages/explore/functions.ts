'use client'

// Import
/// Types
import { Context, OnMountParams } from './types';

/// Functions
import { createContext } from 'react';
import { getContext } from '@/core/functions/hooks/context/functions';
import { shuffleArray } from '@/core/functions/data/array/functions';

/// Actions
import { getOptions } from '@/core/actions/options/actions';

/// Context
export const CTX = createContext< null | Context >( null );

// Functions
export function useContext () {
    const context = getContext( { context: CTX } );
    return context
};

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