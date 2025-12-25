'use client'

// Import
/// Types
import { Context } from './types';

/// Functions
import { createContext } from 'react';
import { getContext } from '@/core/functions/hooks/context/functions';

/// Context
export const CTX = createContext< null | Context >( null );

// Functions
export function useContext () {
    const context = getContext( { context: CTX } );
    return context
};