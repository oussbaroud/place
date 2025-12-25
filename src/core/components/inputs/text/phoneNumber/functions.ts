// Import
/// Dictionary
import { getPhoneNumberDictionary } from './dictionary';

/// Type / Safeguards
import { GetNewOpenedParams, GetNewOptionsParams, GetNewValueParams, OnChangeParams, OnClickParams, PhoneNumberInputProps } from './types';

/// Patterns / Schemas
import { validPhoneNumberPattern } from './patterns';
import { getPhoneNumberSchema } from './validations';

/// Functions
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// Get new value
function getNewValue ( { value, newValue }: GetNewValueParams ) {
    if ( !newValue.includes( ' ' )
    || newValue.match( validPhoneNumberPattern ) ) {
        return newValue;

    } else {
        return value;
    };
};

/// Get new opened
function getNewOpened ( { value }: GetNewOpenedParams ) {
    return !value.includes( ' ' );
};

/// Get new options
function getNewOptions ( { props, opened, options }: GetNewOptionsParams ) {
    // Dictionary
    const dictionary = getPhoneNumberDictionary( props );

    // Return
    return opened ? options : dictionary.input.countryCodes;
};

/// On click
export function onClick ( { props }: OnClickParams ) {
    props.setState( ( state ) => {
        // State
        const value = state.value;

        const opened = state.opened;
        const newOpened = getNewOpened( { value } );

        const options = state.options;
        const newOptions = getNewOptions( { props, opened, options } );

        const errors = state.errors;

        // Return
        return {
            opened: newOpened,
            value: value,
            options: newOptions,
            errors: errors
        };
    } );
};

/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    props.setState( ( state ) => {
        // State
        const value = state.value;
        const newValue: string = getNewValue( { value, newValue: event.target.value } )

        const newOpened = getNewOpened( { value: newValue } );

        const options = state.options;
        const newOptions = getNewOptions( { props, opened: newOpened, options } );

        const newErrors = props.validation
        ? getInputErrors( { schema: getPhoneNumberSchema( props ), value: newValue } )
        : state.errors;

        // Return
        return {
            opened: newOpened,
            value: newValue,
            options: newOptions,
            errors: newErrors
        };
    } );
};