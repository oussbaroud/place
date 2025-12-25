// Import
/// Dictionary
import { getGlobalDictionary } from '@/dictionary';

/// Types / Safeguards
import { DateToDateStringParams, IsEqualsDatesParams } from './types';

/// Function
import { upperCaseFirstLetter } from '../string/functions';

// Functions
/// Date to date string
export function dateToDateString ( { lang, value }: DateToDateStringParams ) {
    // Variables
    const locale = `${ lang }-DZ`;
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    } as const;
    
    // Return
    return upperCaseFirstLetter( { value: value.toLocaleDateString( locale, options ) } );
};

/// Date to hour
export function dateToTime ( { lang, value }: DateToDateStringParams ) {
    // Variables
    const locale = `${ lang }-DZ`;
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    } as const;

    // Return
    return value.toLocaleTimeString( locale, options );
};

export function isDatesSameDay ( { values }: IsEqualsDatesParams ) {
    // Date
    const date0 = values[ 0 ];

    // Return
    return values.every( ( date ) =>
        date.getFullYear() === date0.getFullYear() &&
        date.getMonth() === date0.getMonth() &&
        date.getDate() === date0.getDate()
    );
};