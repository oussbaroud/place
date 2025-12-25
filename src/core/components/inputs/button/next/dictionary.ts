// Import
/// Dictionary
import { functionsErrors } from '@/core/dictionary';

/// Types
import { GetDictionaryParams } from '@/core/types';

// Dictionary
export const frenchNextButton = {
    value: 'Suivant'
};
export const arabicNextButton = {
    value: 'التالي'
};

// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchNextButton;
        
        case 'ar':
            return arabicNextButton;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    }
}