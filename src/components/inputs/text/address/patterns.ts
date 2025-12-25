// Import
/// Types
import { getValidLangPattern } from '@/patterns';
import { GetPatternParams } from '@/types';

// Patterns
export const getValidAddressPattern = ( { lang }: GetPatternParams ): RegExp => {
    // Language pattern
    const validLangPattern = getValidLangPattern( { lang } );

    // Return
    switch ( lang ) {
        case 'fr':
            return new RegExp( '^' + validLangPattern.source + ',\\s' + validLangPattern.source + '(?:,\\s' + validLangPattern.source + ')*' + '$', 'g' );
    
        case 'ar':
            return new RegExp( '^' + validLangPattern.source + '،\\s' + validLangPattern.source + '(?:،\\s' + validLangPattern.source + ')*' + '$', 'g' );

        default:
            throw new Error( 'getValidAddressPattern Function Error: Invalid language' );
    };
};