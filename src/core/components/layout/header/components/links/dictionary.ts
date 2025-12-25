// Import
/// Types
import { GetDictionaryParams } from '@/core/types';

/// Dictionary
import { functionsErrors } from '@/core/dictionary';

// Dictionary
/// French
const frenchDictionary = {
    visitor: {
        login: 'Se Connecter'
    },
    user: {
        agencies: 'Agences',
        settings: 'Paramètres',
    },
    agency: {
        offers: 'Offres',
        hr: 'Ressources Humaines',
        subscription: 'Abonnement',
        settings: 'Paramètres',
    },
};

/// Arabic
const arabicDictionary = {
    visitor: {
        login: 'تسجيل الدخول'
    },    
    user: {
        agencies: 'الوكالات',
        settings: 'الإعدادات',
    },
    agency: {
        offers: 'العروض',
        hr: 'الموارد البشرية',
        subscription: 'الإشتراك',
        settings: 'الإعدادات',
    },
};

// Get dictionary
export function getDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchDictionary;
        
        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};