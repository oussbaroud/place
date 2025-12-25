'use client'

// Import
/// Types
import { Context, OnMountParams } from './types';

/// Functions
import { createContext } from 'react';
import { shuffleArray } from '@/functions/data/array/functions';
import { getContext } from '@/functions/hooks/context/functions';

/// Context
export const CTX = createContext< null | Context >( null );

/// Actions
import { getOptions } from '@/actions/options/actions';

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