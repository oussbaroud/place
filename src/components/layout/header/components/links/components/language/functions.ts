// Import
/// Types
import { MouseEvent } from 'react';
import { Lang } from '@/types';
import { Value } from './types';

/// Actions
import { updateLang } from '@/actions/language/actions';

// Functions
export function getValue ( lang: Lang ): Value {
    switch ( lang ) {
        case 'fr':
            return 'العربية';
    
        case 'ar':
            return 'Français';

        default:
            throw new Error( 'handleValue Function Error: Invalid language' );
    };
};

function getLang ( value: Value ): Lang {
    switch ( value ) {
        case 'Français':
            return 'fr';
    
        case 'العربية':
            return 'ar';

        default:
            throw new Error( 'handleLanguage Function Error: Invalid value' );
    };
};

export async function onClick ( event: MouseEvent< HTMLInputElement > ) {
    // Language
    const value = event.currentTarget.value as Value;
    const lang = getLang( value );

    // Update
    await updateLang( { lang } );

    // Refresh
    window.location.reload();
};