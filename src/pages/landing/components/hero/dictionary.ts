// Import
/// Dictionary
import { functionsErrors } from '@/dictionary';

/// Types
import { GetDictionaryParams } from '@/types';

// Dictionary
export function getHeroDictionary ( { lang }: GetDictionaryParams ) {
    switch ( lang ) {
        case 'en':
            return {
                title: 'Bored?',
                description: 'Discover the best places and activities to do in Algeria',
                action: 'Explore'
            };
        
        case 'fr':
            return {
                title: 'Ennuyé?',
                description: 'Découvrez les meilleurs endroits et activités à faire en Algérie',
                action: 'Explorer'
            };

        case 'ar':
            return {
                title: 'تشعر بالملل؟',
                description: 'إكتشف أفضل الأماكن و الأنشطة التي يمكنك فعلها في الجزائر',
                action: 'إكتشف'
            };
    
        default:
            throw new Error( functionsErrors.getDictionary.lang );
    };
};