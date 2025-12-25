// Import
/// Dictionary
import { getPhoneNumberDictionary } from '../../dictionary';

/// Types
import { CountryCode } from '../../types';
import { GetOptionsParams, GetOptionStyleParams, OnChangeParams, OnClickParams } from './types';

/// Styles
import styles from '@/components/inputs/options.module.css';

// Functions
/// Get option style
export function getOptionStyle ( { props, countryCode }: GetOptionStyleParams ): string {
    // Type
    const typeClass = styles.optionType3;

    // Selected
    const value = props.state.value;
    const valueCountryCode = parseInt( value.split( ' ' )[ 0 ] );

    const isSelected: boolean = valueCountryCode === countryCode;
    const selectedClass = isSelected || props.state.options.length === 1 ? styles.selectedOption : '';

    // Return
    return typeClass + ' ' + selectedClass;
};

/// On click
export function onClick ( { props, countryCode }: OnClickParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const opened = false;
        const newValue = '+' + countryCode + ' ';
        const newOptions = state.options;
        const errors = state.errors;

        return {
            opened: opened,
            value: newValue,
            options: newOptions,
            errors: errors
        };
    } );

    // Focus
    props.input.current?.focus();
};

/// get options
function getOptions ( { props, value }: GetOptionsParams ) {
    // Dictionary
    const dictionary = getPhoneNumberDictionary( props );

    // Options
    const newOptions: CountryCode [] = dictionary.input.countryCodes.filter( ( country ) => country.name.toLowerCase().includes( value.toLowerCase() ) ).sort( ( a, b ) => a.name.toLowerCase().indexOf( value.toLowerCase() ) - b.name.toLowerCase().indexOf( value.toLowerCase() ) );
    return newOptions;
};

/// On change ( input search )
export function onChange ( { props, event }: OnChangeParams ) {
    // Target
    const targetValue = event.target.value;

    // Set state
    props.setState( ( state ) => {
        // State
        const opened = state.opened;
        const newValue = state.value;
        const newOptions = getOptions( { props, value: targetValue } );
        const errors = state.errors;

        return {
            opened: opened,
            value: newValue,
            options: newOptions,
            errors: errors
        };
    } );
};