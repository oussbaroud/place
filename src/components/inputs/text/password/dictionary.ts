// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { InputDictionaryParams, GetDictionaryParams } from './types';

// Dictionary
/// French
const getFrenchDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `${ !params.new ? '' : 'Nouveau ' }Mot de Passe`,
        placeholder: `Entrez le${ !params.new ? '' : ' nouveau' } mot de passe`
    },
    errors: {
        required: frenchInputErrors.required,
        min: 'Utilisez 10 caractère ou plus',
        max: 'Utilisez 50 caractères ou moin',
        incorrect: frenchInputErrors.incorrect

    },
} );

/// Arabic
const getArabicDictionary = ( params: InputDictionaryParams ) => ( {
    input: {
        label: `${ !params.new ? '' : ' الجديدة' }كلمة المرور`,
        placeholder: `أدخل كلمة المرور${ !params.new ? '' : ' الجديدة' }`
    },
    errors: {
    required: arabicInputErrors.required,
    min: 'استخدم 10 أحرف أو أكثر',
    max: 'استخدم 50 حرف أو أقل',
    incorrect: arabicInputErrors.incorrect
},
} );

// Get dictionary
export function getPasswordDictionary ( params: GetDictionaryParams ) {
    switch ( params.lang ) {
        case 'fr':
            return getFrenchDictionary( params );
        
        case 'ar':
            return getArabicDictionary( params );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};