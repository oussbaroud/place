// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams, GetCrossDictionaryParams } from '@/types';
import { GetLastNameErrorsReturn } from './types';

// Dictionary
/// French
const getErrors = ( { lang }: GetCrossDictionaryParams ): GetLastNameErrorsReturn => {
    switch ( lang.user ) {
        case 'fr':
        return {
            required: frenchInputErrors.required,
            lang: frenchInputErrors.lang[ lang.input ],
            max: 'Utilisez 50 caractères ou moin'
        };
        
        case 'ar':
        return {
            required: arabicInputErrors.required,
            lang: arabicInputErrors.lang[ lang.input ],
            max: 'استخدم 50 حرف أو أقل'
        };

        default:
        throw new Error( functionsErrors.getDictionary.lang );
    };
};
const getFrenchDictionary = ( { lang }: GetDictionaryParams ) => ( {
    input: {
        label: 'Nom',
        placeholder: 'Entrez votre nom',
    },
    errors: getErrors( { lang: { user: lang, input: 'fr' } } )
} );

/// Arabic
const getArabicDictionary = ( { lang }: GetDictionaryParams ) => ( {
    input: {
        label: 'اللقب',
        placeholder: 'أدخل لقبك',
    },
    errors: getErrors( { lang: { user: lang, input: 'ar' } } )
} );

/// Get dictionary
export function getLastNameDictionary ( { lang }: GetCrossDictionaryParams ) {
    switch ( lang.input ) {
        case 'fr':
            return getFrenchDictionary( { lang: lang.user } );
        
        case 'ar':
            return getArabicDictionary( { lang: lang.user } );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};