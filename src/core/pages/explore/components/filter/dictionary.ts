// Import
/// Dictionary
import { arabicInputOptions, englishInputOptions, frenchInputOptions, functionsErrors } from '@/core/dictionary';

/// Types
import { GetDictionaryParams } from '@/core/types';

// Dictionary
/// English
export const englishDictionary = {
    provinces: {
        input: {
            label: 'Wilaya',
            placeholder: 'Enter the province',
            options: [ 'Not important', ...englishInputOptions.provinces.map( ( object ) => object.value ) ],
            default: `Not important`,

        }
    },
    activities: {
        input: {
            label: 'Activities',
            placeholder: 'Enter the activities',
            options: [ 'Not important', ...englishInputOptions.activities.map( ( object ) => object.value ) ],
            default: `Not important`,
        }
    },
    budget: {
        input: {
            label: 'Budget',
            placeholder: 'Enter the budget',
            options: [ 'Not important', ...englishInputOptions.budget.map( ( object ) => object.value ) ],
            default: 'Not important',
        }
    },
};

/// French
export const frenchDictionary = {
    provinces: {
        input: {
            label: 'Wilaya',
            placeholder: 'Enter la wilaya',
            options: [ 'Pas important', ...frenchInputOptions.provinces.map( ( object ) => object.value ) ],
            default: 'Pas important',

        }
    },
    activities: {
        input: {
            label: 'Activités',
            placeholder: 'Enter les activités',
            options: [ 'Pas important', ...frenchInputOptions.activities.map( ( object ) => object.value ) ],
            default: 'Pas important',
        }
    },
    budget: {
        input: {
            label: 'Budget',
            placeholder: 'Enter le budget',
            options: [ 'Pas important', ...frenchInputOptions.budget.map( ( object ) => object.value ) ],
            default: 'Pas important',
        }
    },
};

/// Arabic
export const arabicDictionary = {
    provinces: {
        input: {
            label: 'الولاية',
            placeholder: 'أدخل الولاية',
            options: [ 'غير مهم', ...arabicInputOptions.provinces.map( ( object ) => object.value ) ],
            default: 'غير مهم',
        }
    },
    activities: {
        input: {
            label: 'النشاطات',
            placeholder: 'أدخل النشاطات',
            options: [ 'غير مهم', ...arabicInputOptions.activities.map( ( object ) => object.value ) ],
            default: 'غير مهم',
        }
    },
    budget: {
        input: {
            label: 'المصروف',
            placeholder: 'أدخل المصروف',
            options: [ 'غير مهم', ...arabicInputOptions.budget.map( ( object ) => object.value ) ],
            default: 'غير مهم',
        }
    },
};

/// Get dictionary
export function getFilterDictionary ( { lang }: GetDictionaryParams ) {
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