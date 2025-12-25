// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
export const englishDictionary = {
    address: {
        label: 'Address'
    },
    budget: {
        label: 'Budget',
    },
    reviews: {
        label: 'Reviews',
    },
    by: {
        label: 'By'
    },
};

/// French
export const frenchDictionary = {
    address: {
        label: 'Adresse'
    },
    budget: {
        label: 'Budget',
    },
    reviews: {
        label: 'Avis',
    },
    by: {
        label: 'Par'
    },
};

/// Arabic
export const arabicDictionary = {
    address: {
        label: 'العنوان'
    },
    budget: {
        label: 'المصروف',

    },
    reviews: {
        label: 'الأراء',
    },
    by: {
        label: 'من طرف'
    },
};

/// Get dictionary
export function getOptionDictionary ( { lang }: GetDictionaryParams ) {
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