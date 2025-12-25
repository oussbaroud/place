// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
const englishDictionary = {
    errors: {
        connection: 'Cache connection error, try again later'
    },
};

/// French
const frenchDictionary = {
    errors: {
        connection: 'Erreur de connexion en cache, réessayez plus tard'
    },
};

/// Arabic
const arabicDictionary = {
    errors: {
        connection: 'خطأ في الاتصال بذاكرة التخزين المؤقت، حاول مرة أخرى لاحقًا'
    },
};

/// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDictionary;
            
        case 'fr':
            return frenchDictionary;
        
        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( englishFunctionsErrors.getDictionary.lang );
    };
};