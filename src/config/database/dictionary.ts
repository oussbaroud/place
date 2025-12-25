// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
export const englishDatabaseDictionary = {
    errors: {
        connection: 'Database connection error, try again later'
    },
};

/// French
export const frenchDatabaseDictionary = {
    errors: {
        connection: 'Erreur de connexion à la base de données, réessayez plus tard'
    },
};

/// Arabic
export const arabicDatabaseDictionary = {
    errors: {
        connection: 'خطأ في الاتصال بقاعدة البيانات، حاول مرة أخرى لاحقًا'
    },
};

/// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDatabaseDictionary;
            
        case 'fr':
            return frenchDatabaseDictionary;
        
        case 'ar':
            return arabicDatabaseDictionary;
    
        default:
            throw new Error( englishFunctionsErrors.getDictionary.lang );
    };
};