// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
export const frenchPreButton = {
    value: 'Précédent'
};
export const arabicPreButton = {
    value: 'السابق'
};

// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchPreButton;
        
        case 'ar':
            return arabicPreButton;
    
        default:
            throw new Error( englishFunctionsErrors.getDictionary.lang );
    }
}