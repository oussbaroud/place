'use client'

// Import
/// Types
import { GlobalContext, GetContextParams } from './types';

/// Functions
import { createContext, useContext } from 'react';

/// Context
export const CTX = createContext< null | GlobalContext >( null );

// Functions
/// Handle use context
export function getContext< T > ( { context }:  GetContextParams< T > ) {
    const value = useContext( context );

    if ( value !== undefined && value !== null ) {
        return value;

    } else {
        throw new Error( 'Context must be assigned to the provider value' );
    };
};

/// Global use context
export function useGlobalContext () {
    const context = getContext( { context: CTX } );
    return context
};