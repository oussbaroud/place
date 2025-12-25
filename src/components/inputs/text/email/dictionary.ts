// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, englishInputErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { InputDictionaryParams, GetDictionaryParams } from './types';

// Dictionary
/// English
const getEnglishDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: '',
        placeholder: ''
    },
    errors: {
        required: englishInputErrors.required,
        pattern: englishInputErrors.pattern,
        max: 'Use 254 characters or less',
        registered: 'Already used, try another',
        notRegistered: 'Not registered'
    },
} );

/// French
const getFrenchDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `${ !params.new ? '' : 'Nouveau ' }Email`,
        placeholder: `Entrez ${ !params.new ? `l'` : 'le nouveau' } email`
    },
    errors: {
        required: frenchInputErrors.required,
        pattern: frenchInputErrors.pattern,
        max: 'Utilisez 254 caractères ou moin',
        registered: 'Déjà utilisé, essayez-en un autre',
        notRegistered: 'Non inscrit'
    },
} );

/// Arabic
const getArabicDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `البريد الإلكتروني${ !params.new ? '' : ' الجديد' }`,
        placeholder: `أدخل البريد الإلكتروني${ !params.new ? '' : ' الجديد' }`
    },
    errors: {
        required: arabicInputErrors.required,
        pattern: arabicInputErrors.pattern,
        max: 'استخدم 254 حرف أو أقل',
        registered: 'مستخدم، جرب أخر',
        notRegistered: 'غير مسجل'
    },
} );

// Get dictionary
export function getEmailDictionary ( params: GetDictionaryParams ) {
    switch ( params.lang ) {
        case 'en':
            return getEnglishDictionary( params );

        case 'fr':
            return getFrenchDictionary( params );
        
        case 'ar':
            return getArabicDictionary( params );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};