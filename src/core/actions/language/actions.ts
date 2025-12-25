'use server'
import 'server-only';

// Import
/// Types
import { Lang } from '@/core/types';
import { UpdateLangParams } from './types';

/// Variables
import { cookie } from './variables';

/// Functions
import { cookies } from 'next/headers';

// Functions
export async function updateLang ( { lang }: UpdateLangParams ) {
    // Update cookie
    const response = await cookies();
    response.set( {
        name: cookie.name,
        value: lang,
        ...cookie.options,
    } );
};

export async function getLang () {
    // Get cookie
    const response = await cookies();
    const lang = response.get( cookie.name )?.value as Lang;
    
    // Return
    return lang || 'ar';
};