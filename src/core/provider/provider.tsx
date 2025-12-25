'use client';

// Import
/// Types
import { ProviderProps } from './types';

// Context
import { CTX } from '@/core/functions/hooks/context/functions';

// Provider
export default function Provider ( { lang, children }: ProviderProps ) {  
  // Return
  return (
    <CTX.Provider value={ { lang } }>
      { children }
    </CTX.Provider>
  );
};