// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/core/dictionary';

/// Types
import { CountryCode, InputDictionaryParams, GetDictionaryParams } from './types';

// Dictionary
/// French
//// Country codes
const frenchCountryCodes: CountryCode [] = [ { name: 'Algerie', code: 213 } ];

//// Phone number
const getFrenchDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `${ !params.new ? '' : 'Nouveau ' }Numéro de Téléphone${ params.index ? ( ' ' + params.index + 1 ) : '' }`,
        numberPlaceholder: `Entrez le ${ !params.new ? '' : 'nouveau' } numéro de téléphone`,
        countryCodes: frenchCountryCodes,
        searchPlaceholder: 'Rechercher le pays'
    },
    errors: {
        required: frenchInputErrors.required,
        pattern: `Utilisez l'indicatif du pays séparé par un espace`,
        min: 'Utilisez 9 caractère ou plus',
        max: 'Utilisez 17 caractère ou moin'
    }
} );

/// Arabic
//// Country codes
const arabicCountryCodes: CountryCode [] = [ { name: 'الجزائر', code: 213 } ];

//// Phone number
const getArabicDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `رقم الهاتف${ params.index ? ( ' ' + params.index + 1 ) : '' }${ !params.new ? '' : ' الجديد' }`,
        numberPlaceholder: `أدخل رقم الهاتف${ !params.new ? '' : ' الجديد' }`,
        countryCodes: arabicCountryCodes,
        searchPlaceholder: 'البحث عن البلد'
    },
    errors: {
        required: arabicInputErrors.required,
        pattern: `إستخدم مفتاح الدولة مفصول بمسافة`,
        min: 'إستخدم 9 أحرف أو أكثر',
        max: 'إستخدم 17 حرف أو أقل'
    }
} );

// Get dictionary
export function getPhoneNumberDictionary ( params: GetDictionaryParams ) {
    switch ( params.lang ) {
        case 'fr':
            return getFrenchDictionary( params );
        
        case 'ar':
            return getArabicDictionary( params );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};