// Import
/// Dictionary
import { functionsErrors } from '@/core/dictionary';

/// Types
import { GetDictionaryParams } from '@/core/types';

// Dictionary
/// English
export const englishDictionary = {
    fewOptions: 'We are a Algerian startup, few options are available to explore. We are adding new ones every day.'
};

/// French
export const frenchDictionary = {
    fewOptions: 'Nous sommes une startup algérienne, les options disponibles sont encore limitées. Nous en ajoutons de nouvelles chaque jour.'
};

/// Arabic
export const arabicDictionary = {
    fewOptions: 'نحن شركة جزائرية ناشئة، وخياراتنا المتاحة محدودة. نعمل على إضافة خيارات جديدة يومياً.'
};

/// Get dictionary
export function getMessageDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return englishDictionary;

        case 'fr':
            return frenchDictionary;
        
        case 'ar':
            return arabicDictionary;
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};