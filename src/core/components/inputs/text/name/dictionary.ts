// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/core/dictionary';

/// Types
import { GetDictionaryParams, GetCrossDictionaryParams } from '@/core/types';
import { GetNameErrorsReturn } from './types';

// Dictionary
/// French
const getNameErrors = ( { lang }: GetCrossDictionaryParams ): GetNameErrorsReturn => {
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
        placeholder: `Entrez le nom en français`,
    },
    errors: getNameErrors( { lang: { user: lang, input: 'fr' } } )
} );

/// Arabic
const getArabicDictionary = ( { lang }: GetDictionaryParams ) => ( {
    input: {
        label: 'الإسم',
        placeholder: `أدخل الإسم بالعربية`,
    },
    errors: getNameErrors( { lang: { user: lang, input: 'ar' } } )
} );

/// Get dictionary
export function gethNameDictionary ( { lang }: GetCrossDictionaryParams ) {
    switch ( lang.input ) {
        case 'fr':
            return getFrenchDictionary( { lang: lang.user } );
        
        case 'ar':
            return getArabicDictionary( { lang: lang.user } );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};