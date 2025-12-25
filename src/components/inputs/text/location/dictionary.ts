// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// French
const frenchLocation = {
    input: {
        label: 'Localisation',
        placeholder: 'Entrez le lien google maps',
    },
    errors: {
        required: frenchInputErrors.required,
        pattern: frenchInputErrors.pattern,
        max: 'Utilisez 500 caractères ou moin'
    }
};

/// Arabic
const arabicLocation = {
    input: {
        label: 'الموقع',
        placeholder: 'أدخل رابط خرائط جوجل',
    },
    errors: {
        required: arabicInputErrors.required,
        pattern: arabicInputErrors.pattern,
        max: 'استخدم 500 حرف أو أقل'
    }
};

/// Get dictionary
export function getLocationDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchLocation;
        
        case 'ar':
            return arabicLocation;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};