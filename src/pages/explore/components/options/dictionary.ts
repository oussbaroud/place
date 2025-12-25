// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
export const englishDictionary = {
    messages: {
        noResultsFound: 'No results found. Try other filters.'
    }
};

/// French
export const frenchDictionary = {
    messages: {
        noResultsFound: `Aucun résultat trouvé. Essayez d'autres filtres.`
    }
};

/// Arabic
export const arabicDictionary = {
    messages: {
        noResultsFound: 'لم يتم العثور على نتائج. حاول إستخدام تصنيفات أخرى.'
    }
};

/// Get dictionary
export function getOptionsDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDictionary;

        case 'fr':
            return frenchDictionary;
        
        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};