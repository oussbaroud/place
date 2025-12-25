// Import
/// Types
import { GetDictionaryParams, TranslateParams } from './types';

// Dictionary
/// English
export const functionsErrors = {
    getDictionary: {
        lang: 'getDictionary Function Error: Invalid language'
    },
};

export const englishMetaData = {
    title: 'The best places and activities in Algeria',
    description: 'Discover the best places and activities in Algeria',
};

export const englishDate = {
    days: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
} as const;

const englishInputMessages = {
    optional: 'This field is optional'
} as const;

export const englishInputOptions = {
    types: [ 'Park', 'Restaurant' ],
    provinces: [ 'Algiers', 'Blida', 'Medea', 'Tipaza', 'Boumerdes' ],
    activities: [
        'Strolling', 'Shopping', 'Cruising',
        'Relaxing', 'Bathing',
        'Eating', 'Barbecuing', 'Picnicking', 'Camping', 
        'Hiking', 'Swimming', 'Kayaking', 'Underwater diving', 'Sky diving', 'Skiing', 'Horseback riding',
        'Photo shooting', 'Fishing',
        'Networking'
    ],
    budget: [ 'Economic', 'Moderate', 'Premium' ],
    reviews: [ 'Positive', 'Mixed', 'Negative' ],
} as const;

export const englishInputErrors = {
    required: 'This field is required',
    lang: {
        english: 'Use the English language',
        french: 'Use the French language',
        arabic: 'Use the Arabic language'
    },
    enum: 'The value is not valid',
    pattern: 'The value is not valid',
    incorrect: 'The value is incorrect',
    min: {
        time: {
            hour: 'Use 00 or more for the hour',
            minutes: 'Use 00 or more for the minutes'
        }
    },
    max: {
        time: {
            hour: 'Use 23 or less for the hour',
            minutes: 'Use 59 or less for the minutes'
        }
    }
} as const;

const englishDictionary = {
    date: englishDate,
    inputOptions: englishInputOptions,
    inputMessages: englishInputMessages,
    inputErrors: englishInputErrors,
};

/// French
export const frenchMetaData = {
    title: 'Meilleurs endroits et activités en Algérie',
    description: 'Découvrez les meilleurs endroits et activités en Algérie',
};

export const frenchDate = {
    days: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ],
} as const;

export const frenchInputOptions = {
    types: [ 'Parc', 'Restaurant' ],
    provinces: [ 'Alger', 'Blida', 'Medea', 'Tipaza', 'Boumerdes' ],
    activities: [
        'Balader', 'Shopping', 'Sortir en mer',
        'Détendre', 'Baigner',
        'Manger', 'Faire un barbecue', 'Faire un pique-nique', 'Camper',
        'Randonner', 'Nager', 'Faire du kayak', `Plonger sous l'eau`, 'Sauter en parachute', 'Skier', `Faire de l’équitation`,
        'Photo shooting', 'Pêcher',
        'Rencontrer'
    ],
    budget: [ 'Économique', 'Modéré', 'Premium' ],
    reviews: [ 'Positif', 'Mixte', 'Négatif' ],
} as const;

const frenchInputMessages = {
    optional: 'Ce champ est optionnel'
} as const;

export const frenchInputErrors = {
    required: 'Ce champ est obligatoire',
    lang: {
        en: 'Algiers',
        fr: 'Utilisez la langue française',
        ar: 'Utilisez la langue arabe'
    },
    enum: `La valeur n'est pas valide`,
    pattern: `La valeur n'est pas valide`,
    incorrect: 'La Valeur est incorrecte',
    min: {
        time: {
            hour: `Utilisez 00 ou plus pour l'heure`,
            minutes: 'Utilisez 00 ou plus pour les minutes'
        }
    },
    max: {
        time: {
            hour: `Utilisez 23 ou moin pour l'heure`,
            minutes: 'Utilisez 59 ou moin pour les minutes'
        }
    }
} as const;

const frenchDictionary = {
    date: frenchDate,
    inputOptions: frenchInputOptions,
    inputMessages: frenchInputMessages,
    inputErrors: frenchInputErrors,
};

/// Arabic
export const arabicMetaData = {
    title: 'أفضل الأماكن و الأنشطة في الجزائر',
    description: 'إكتشف أفضل الأماكن و الأنشطة في الجزائر'
};

export const arabicDate = {
    days: [ 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت' ],
} as const;

export const arabicInputOptions = {
    types: [ 'حديقة', 'مطعم' ],
    provinces: [ 'الجزائر', 'البليدة', 'المدية', 'تيبازة', 'بومرداس' ],
    activities: [
        'تجوال', 'تسوق', 'رحلة بحرية',
        'إسترخاء', 'إستحمام',
        'أكل', 'شواء', 'الأكل في الهواء الطلق', 'تخييم',
        'مشي على الأقدام', 'العوم', 'تجديف', 'غوص تحت الماء', 'قفز حر', 'التزلج على الثلج', 'ركوب الخيل',
        'تصوير', 'صيد الأسماك',
        'تواصل اجتماعي'
    ],
    budget: [ 'اقتصادي', 'متوسط', 'فاخر' ],
    reviews: [ 'إيجابية', 'مختلطة', 'سلبية' ],
} as const;

const arabicInputMessages = {
    optional: 'هذا المجال اختياري'
};

export const arabicInputErrors = {
    required: 'هذا المدخل إجباري',
    lang: {
        en: '',
        fr: 'إستخدم اللغة الفرنسية',
        ar: 'إستخدم اللغة العربية'
    },
    enum: 'القيمة غير صالحة',
    pattern: 'القيمة غير صالحة',
    incorrect: 'القيمة غير صحيحة',
    min: {
        time: {
            hour: 'إستخدم 00 أو أكثر للساعات',
            minutes: 'إستخدم 00 أو أكثر للدقائق'
        }
    },
    max: {
        time: {
            hour: 'إستخدم 23 أو أقل للساعات',
            minutes: 'إستخدم 59 أو أقل للدقائق'
        }
    }
} as const;

const arabicDictionary = {
    date: arabicDate,
    inputOptions: arabicInputOptions,
    inputMessages: arabicInputMessages,
    inputErrors: arabicInputErrors,
};

// Get dictionary
export function getGlobalDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDictionary;
        
        case 'fr':
            return frenchDictionary;

        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    }
};

// Translation
export function translate< T extends keyof typeof englishInputOptions > ( { lang, key, value }: TranslateParams< T > ) {
    // Dictionary
    const inputDictionary = getGlobalDictionary( { lang: lang.input } );
    const userDictionary = getGlobalDictionary( { lang: lang.user } );

    // Index
    const options: string [] = [ ...inputDictionary.inputOptions[ key ] ];
    const index = options.indexOf( value );

    // If found
    if ( index > -1 ) {
        return userDictionary.inputOptions[ key ][ index ];

    // Else
    } else {
        throw new Error( 'translate Function Error: Inavlid value' );
    };
};

// Get meta data
export function getMetaData ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishMetaData;
        
        case 'fr':
            return frenchMetaData;

        case 'ar':
            return arabicMetaData;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    }
};