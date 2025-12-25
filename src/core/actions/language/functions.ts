// Import
/// Types
import { Lang } from '@/core/types';
import { GetSecondaryLangParams } from './types';

// Functions
export function getLang2 ( { lang }: GetSecondaryLangParams ): Lang {
    switch ( lang ) {
        case 'fr':
            return 'ar';
        
        case 'ar':
            return 'fr';
    
        default:
            throw new Error( 'getSecondaryLang Function Error: Invaid language' );
    };
};