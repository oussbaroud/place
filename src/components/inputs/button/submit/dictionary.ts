// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
export const frenchSubmitButton = {
    value: 'Confirmer'
};
export const arabicSubmitButton = {
    value: 'تأكيد'
};

// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchSubmitButton;
        
        case 'ar':
            return arabicSubmitButton;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    }
}