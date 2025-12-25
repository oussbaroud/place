// Import
/// Dictionary
import { arabicInputOptions, englishInputOptions, frenchInputOptions, functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
export const englishDictionary = {
    description: {
        label: 'Description'
    },
    activities: {
        label: 'Activities'
    },
    address: {
        label: 'Address'
    },
    budget: {
        label: 'Budget'
    },
    reviews: {
        label: 'Reviews'
    },
    by: {
        label: 'By'
    },
    date: {
        label: 'Date'
    },
    time: {
        label: 'Time'
    },
    location: {
        label: 'Location'
    },
    contact: {
        label: 'Contact'
    },
    errors: {
        notFound: 'No result'
    }
};

/// French
export const frenchDictionary = {
    description: {
        label: 'Description'
    },
    activities: {
        label: 'Activités'
    },
    address: {
        label: 'Adresse'
    },
    budget: {
        label: 'Budget'
    },
    reviews: {
        label: 'Avis'
    },
    by: {
        label: 'Par'
    },
    date: {
        label: 'Date'
    },
    time: {
        label: 'Heure'
    },
    location: {
        label: 'Localisation'
    },
    contact: {
        label: 'Contact'
    },
    errors: {
        notFound: 'Aucun résultat'
    }
};

/// Arabic
export const arabicDictionary = {
    description: {
        label: 'الوصف'
    },
    activities: {
        label: 'النشاطات'
    },
    address: {
        label: 'العنوان'
    },
    budget: {
        label: 'المصروف'
    },
    reviews: {
        label: 'الأراء'
    },
    by: {
        label: 'من طرف'
    },
    date: {
        label: 'التاريخ'
    },
    time: {
        label: 'الوقت'
    },
    location: {
        label: 'الموقع'
    },
    contact: {
        label: 'التواصل'
    },
    errors: {
        notFound: 'لا يوجد نتيجة'
    }
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