// Import
/// Types
import { GetDictionaryParams } from '@/types';

/// Dictionary
import { functionsErrors } from '@/dictionary';

// Dictionary
/// English
const englishDictionary = {
    logo: 'Kharja'
};

/// French
const frenchDictionary = {
    logo: 'Kharja'
};

/// Arabic
const arabicDictionary = {
    logo: 'خرجة'
};

// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDictionary;
        
        case 'fr':
            return frenchDictionary

        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};