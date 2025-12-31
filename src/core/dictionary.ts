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
    categories: [
        { id: '1', value: 'Place' }, { id: '2', value: 'Event' }, { id: '3', value: 'Meetup' }, { id: '4', value: 'Excursion' },
    ],
    types: {
        place: [ { id: '1', value: 'Park' }, { id: '2', value: 'Forest' }, { id: '3', value: 'Restaurant' } ],
        event: []
    },
    provinces: [ { id: '16', value: 'Algiers' }, { id: '31', value: 'Oran' }, { id: '19', value: 'Setif' }, { id: '15', value: 'Tizi Ouzou' }, { id: '05', value: 'Batna' }, { id: '17', value: 'Djelfa' }, { id: '09', value: 'Blida' }, { id: '02', value: 'Chlef' }, { id: '28', value: 'MSila' }, { id: '13', value: 'Tlemcen' }, { id: '25', value: 'Constantine' }, { id: '06', value: 'Bejaia' }, { id: '21', value: 'Skikda' }, { id: '14', value: 'Tiaret' }, { id: '26', value: 'Medea' }, { id: '35', value: 'Boumerdes' }, { id: '29', value: 'Mascara' }, { id: '43', value: 'Mila' }, { id: '44', value: 'Ain Defla' }, { id: '27', value: 'Mostaganem' }, { id: '48', value: 'Relizane' }, { id: '23', value: 'Annaba' }, { id: '22', value: 'Sidi Bel Abbes' }, { id: '42', value: 'Tipaza' }, { id: '07', value: 'Biskra' }, { id: '10', value: 'Bouira' }, { id: '12', value: 'Tebessa' }, { id: '39', value: 'El Oued' }, { id: '18', value: 'Jijel' }, { id: '04', value: 'Oum El Bouaghi' }, { id: '24', value: 'Guelma' }, { id: '20', value: 'Saida' }, { id: '46', value: 'Ain Temouchent' }, { id: '11', value: 'Tamanrasset' }, { id: '45', value: 'Naama' }, { id: '08', value: 'Bechar' }, { id: '41', value: 'Souk Ahras' }, { id: '32', value: 'El Bayadh' }, { id: '47', value: 'Ghardaia' }, { id: '38', value: 'Tissemsilt' }, { id: '03', value: 'Laghouat' }, { id: '30', value: 'Ouargla' }, { id: '33', value: 'Illizi' }, { id: '49', value: 'Timimoun' }, { id: '50', value: 'Bordj Badji Mokhtar' }, { id: '51', value: 'Ouled Djellal' }, { id: '52', value: 'Beni Abbes' }, { id: '53', value: 'In Salah' }, { id: '54', value: 'In Guezzam' }, { id: '55', value: 'Touggourt' }, { id: '56', value: 'Djanet' }, { id: '57', value: 'El Meghaier' }, { id: '58', value: 'El Meniaa' } ],
    activities: [
        { id: '1', value: 'Strolling' }, { id: '2', value: 'Relaxing' }, { id: '3', value: 'Photo shooting' }, { id: '4', value: 'Shopping' }, { id: '5', value: 'Networking' },
        { id: '6', value: 'Eating' }, { id: '7', value: 'Barbecuing' }, { id: '8', value: 'Picnicking' },
        { id: '9', value: 'Bathing' },
        { id: '10', value: 'Hiking' }, { id: '11', value: 'Skiing' }, { id: '12', value: 'Horseback riding' }, { id: '13', value: 'Sky diving' },
        { id: '14', value: 'Amusement park riding' }, { id: '20', value: 'Karting' },
        { id: '15', value: 'Swimming' }, { id: '16', value: 'Kayaking' }, { id: '17', value: 'Underwater diving' }, { id: '18', value: 'Cruising' },  { id: '19', value: 'Fishing' },
    ],
    budget: [ { id: '1', value: 'Economic' }, { id: '2', value: 'Moderate' }, { id: '3', value: 'Premium' } ],
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
    types: {
        place: [ { id: '1', value: 'Parc' }, { id: '2', value: 'Forêt' }, { id: '3', value: 'Restaurant' }, ],
        event: []
    },
    provinces: [ { id: '16', value: 'Alger' }, { id: '31', value: 'Oran' }, { id: '19', value: 'Sétif' }, { id: '15', value: 'Tizi Ouzou' }, { id: '05', value: 'Batna' }, { id: '17', value: 'Djelfa' }, { id: '09', value: 'Blida' }, { id: '02', value: 'Chlef' }, { id: '28', value: 'M\'Sila' }, { id: '13', value: 'Tlemcen' }, { id: '25', value: 'Constantine' }, { id: '06', value: 'Béjaïa' }, { id: '21', value: 'Skikda' }, { id: '14', value: 'Tiaret' }, { id: '26', value: 'Médéa' }, { id: '35', value: 'Boumerdès' }, { id: '29', value: 'Mascara' }, { id: '43', value: 'Mila' }, { id: '44', value: 'Aïn Defla' }, { id: '27', value: 'Mostaganem' }, { id: '48', value: 'Relizane' }, { id: '23', value: 'Annaba' }, { id: '22', value: 'Sidi Bel Abbès' }, { id: '42', value: 'Tipaza' }, { id: '07', value: 'Biskra' }, { id: '10', value: 'Bouira' }, { id: '12', value: 'Tébessa' }, { id: '39', value: 'El Oued' }, { id: '18', value: 'Jijel' }, { id: '04', value: 'Oum El Bouaghi' }, { id: '24', value: 'Guelma' }, { id: '20', value: 'Saïda' }, { id: '46', value: 'Aïn Témouchent' }, { id: '11', value: 'Tamanrasset' }, { id: '45', value: 'Naâma' }, { id: '08', value: 'Béchar' }, { id: '41', value: 'Souk Ahras' }, { id: '32', value: 'El Bayadh' }, { id: '47', value: 'Ghardaïa' }, { id: '38', value: 'Tissemsilt' }, { id: '03', value: 'Laghouat' }, { id: '30', value: 'Ouargla' }, { id: '33', value: 'Illizi' }, { id: '49', value: 'Timimoun' }, { id: '50', value: 'Bordj Badji Mokhtar' }, { id: '51', value: 'Ouled Djellal' }, { id: '52', value: 'Béni Abbès' }, { id: '53', value: 'In Salah' }, { id: '54', value: 'In Guezzam' }, { id: '55', value: 'Touggourt' }, { id: '56', value: 'Djanet' }, { id: '57', value: 'El Meghaier' }, { id: '58', value: 'El Meniaa' } ],
    activities: [
        { id: '1', value: 'Balader' }, { id: '2', value: 'Détendre' }, { id: '3', value: 'Photo shooting' }, { id: '4', value: 'Shopping' }, { id: '5', value: 'Rencontrer' },
        { id: '6', value: 'Manger' }, { id: '7', value: 'Faire un barbecue' }, { id: '8', value: 'Faire un pique-nique' },
        { id: '9', value: 'Baigner' },
        { id: '10', value: 'Randonner' }, { id: '11', value: 'Skier' }, { id: '12', value: `Faire de l’équitation` }, { id: '13', value: 'Sauter en parachute' },
        { id: '14', value: 'Faire des manèges' }, { id: '20', value: 'Karting' },
        { id: '15', value: 'Nager' }, { id: '16', value: 'Faire du kayak' }, { id: '17', value: `Plonger sous l'eau` }, { id: '18', value: 'Sortir en mer' },  { id: '19', value: 'Pêcher' },
    ],
    budget: [ { id: '1', value: 'Économique' }, { id: '2', value: 'Modéré' }, { id: '3', value: 'Premium' } ],
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
    description: 'إكتشف أفضل الأماكن و الأنشطة في الجزائر',
};

export const arabicDate = {
    days: [ 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت' ],
} as const;

export const arabicInputOptions = {
    types: {
        place: [ { id: '1', value: 'حديقة' }, { id: '2', value: 'غابة' }, { id: '3', value: 'مطعم' } ],
        event: []
    },
    provinces: [ { id: '16', value: 'الجزائر' }, { id: '31', value: 'وهران' }, { id: '19', value: 'سطيف' }, { id: '15', value: 'تيزي وزو' }, { id: '05', value: 'باتنة' }, { id: '17', value: 'الجلفة' }, { id: '09', value: 'البليدة' }, { id: '02', value: 'الشلف' }, { id: '28', value: 'المسيلة' }, { id: '13', value: 'تلمسان' }, { id: '25', value: 'قسنطينة' }, { id: '06', value: 'بجاية' }, { id: '21', value: 'سكيكدة' }, { id: '14', value: 'تيارت' }, { id: '26', value: 'المدية' }, { id: '35', value: 'بومرداس' }, { id: '29', value: 'معسكر' }, { id: '43', value: 'ميلة' }, { id: '44', value: 'عين الدفلى' }, { id: '27', value: 'مستغانم' }, { id: '48', value: 'غليزان' }, { id: '23', value: 'عنابة' }, { id: '22', value: 'سيدي بلعباس' }, { id: '42', value: 'تيبازة' }, { id: '07', value: 'بسكرة' }, { id: '10', value: 'البويرة' }, { id: '12', value: 'تبسة' }, { id: '39', value: 'الوادي' }, { id: '18', value: 'جيجل' }, { id: '04', value: 'أم البواقي' }, { id: '24', value: 'قالمة' }, { id: '20', value: 'سعيدة' }, { id: '46', value: 'عين تموشنت' }, { id: '11', value: 'تمنراست' }, { id: '45', value: 'النعامة' }, { id: '08', value: 'بشار' }, { id: '41', value: 'سوق أهراس' }, { id: '32', value: 'البيض' }, { id: '47', value: 'غرداية' }, { id: '38', value: 'تيسمسيلت' }, { id: '03', value: 'الأغواط' }, { id: '30', value: 'ورقلة' }, { id: '33', value: 'إليزي' }, { id: '49', value: 'تيميمون' }, { id: '50', value: 'برج باجي مختار' }, { id: '51', value: 'أولاد جلال' }, { id: '52', value: 'بني عباس' }, { id: '53', value: 'عين صالح' }, { id: '54', value: 'عين قزام' }, { id: '55', value: 'تقرت' }, { id: '56', value: 'جانت' }, { id: '57', value: 'المغير' }, { id: '58', value: 'المنيعة' } ],
    activities: [
        { id: '1', value: 'تجوال' }, { id: '2', value: 'إسترخاء' }, { id: '3', value: 'تصوير' }, { id: '4', value: 'تسوق' }, { id: '5', value: 'تواصل اجتماعي' },
        { id: '6', value: 'أكل' }, { id: '7', value: 'شواء' }, { id: '8', value: 'الأكل في الهواء الطلق' },
        { id: '9', value: 'إستحمام' },
        { id: '10', value: 'مشي على الأقدام' }, { id: '11', value: 'التزلج على الثلج' }, { id: '12', value: 'ركوب الخيل' }, { id: '13', value: 'قفز حر' },
        { id: '14', value: 'ركوب الملاهي' }, { id: '20', value: 'كارتينغ' },
        { id: '15', value: 'العوم' }, { id: '16', value: 'تجديف' }, { id: '17', value: 'غوص تحت الماء' }, { id: '18', value: 'رحلة بحرية' },  { id: '19', value: 'صيد الأسماك' },
    ],
    budget: [ { id: '1', value: 'اقتصادي' }, { id: '2', value: 'متوسط' }, { id: '3', value: 'فاخر' } ],
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