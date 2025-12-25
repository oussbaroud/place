// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams, GetCrossDictionaryParams } from '@/types';
import { GetAddressErrorsReturn } from './types';

// Dictionary
/// French
const getExample = ( { lang }: GetCrossDictionaryParams ) => {
    switch ( lang.input ) {
        case 'fr':
            return `Place du 1er Mai, Sidi M'hamed, Alger`;
        
        case 'ar':
            return 'ساحة أول ماي، سيدي امحمد، الجزائر العاصمة';
    };
};
const getErrors = ( { lang }: GetCrossDictionaryParams ): GetAddressErrorsReturn => {
    switch ( lang.user ) {
        case 'fr':
        return {
            required: frenchInputErrors.required,
            lang: frenchInputErrors.lang[ lang.input ],
            pattern: `Entrez l'adresse complète, ex: ${ getExample( { lang } ) }`,
            max: 'Utilisez 100 caractères ou moin'
        };
        
        case 'ar':
        return {
            required: arabicInputErrors.required,
            lang: arabicInputErrors.lang[ lang.input ],
            pattern: `أدخل العنوان الكامل، مثال: ${ getExample( { lang } ) }`,
            max: 'استخدم 100 حرف أو أقل'
        };

        default:
        throw new Error( functionsErrors.getDictionary.lang );
    };
};
const getFrenchDictionary = ( { lang }: GetDictionaryParams ) => ( {
    input: {
        label: 'Adresse',
        placeholder: `Entrez l'Adresse en français`,
    },
    errors: getErrors( { lang: { user: lang, input: 'fr' } } )
} );

/// Arabic
const getArabicDictionary = ( { lang }: GetDictionaryParams ) => ( {
    input: {
        label: 'العنوان',
        placeholder: 'أدخل العنوان بالعربية',
    },
    errors: getErrors( { lang: { user: lang, input: 'ar' } } )
} );

/// Get dictionary
export function getAddressDictionary ( { lang }: GetCrossDictionaryParams ) {
    switch ( lang.input ) {
        case 'fr':
            return getFrenchDictionary( { lang: lang.user } );
        
        case 'ar':
            return getArabicDictionary( { lang: lang.user } );
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};