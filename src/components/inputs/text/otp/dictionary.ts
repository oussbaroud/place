// Import
/// Dictionary
import { arabicInputErrors, functionsErrors, englishInputErrors, frenchInputErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
/// English
const englishDictionary = {
    input: {
        label: '',
        placeholder: ''
    },
    errors: {
        required: englishInputErrors.required,
        pattern: englishInputErrors.pattern,
        length: 'Use 6 characters',
        incorrect: englishInputErrors.incorrect,
        expired: 'Expired, check your email to get the new one'
    },
};

/// French
const frenchDictionary = {
    input: {
        label: 'OTP',
        placeholder: `Entrez l'otp`
    },
    errors: {
        required: frenchInputErrors.required,
        pattern: frenchInputErrors.pattern,
        length: 'Utilisez 6 caractères',
        incorrect: frenchInputErrors.incorrect,
        expired: 'Expiré, vérifiez votre e-mail pour obtenir le nouveau'
    },
};

/// Arabic
const arabicDictionary = {
    input: {
        label: 'رمز التحقق',
        placeholder: 'أدخل رمز التحقق',
    },
    errors: {
        required: arabicInputErrors.required,
        pattern: arabicInputErrors.pattern,
        length: 'إستخدم 6 أحرف',
        incorrect: arabicInputErrors.incorrect,
        expired: 'انتهت صلاحيته، تحقق من بريدك الإلكتروني للحصول على الجديد'
    },
};

// Get dictionary
export function getOTPDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'fr':
            return frenchDictionary;
        
        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};