// Import
/// Dictionary
import { getFilterDictionary } from './components/filter/dictionary';

/// Types
import { IStateParams } from '@/core/types';
import { State } from './types';

/// Variables
import { iTextInputCOState } from '@/core/components/inputs/text/text/variables';
import { iSelectInputState } from '@/core/components/inputs/select/variables';

// Variables
/// State
export const iState = ( { lang }: IStateParams ): State => {
    // Dictionary
    const dictionary = getFilterDictionary( { lang } );
    
    // Return
    return {
        lang,
        options: [],
        filter: {
            provinces: {
                ...iTextInputCOState,
                options: [ ...dictionary.provinces.input.options ]
            },
            activities: {
                ...iTextInputCOState,
                options: [ ...dictionary.activities.input.options ]
            },
            budget: iSelectInputState,
            errors: []
        },
        errors: []
    };
};