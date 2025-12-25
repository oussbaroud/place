// Import
/// Types / Safeguards
import { isTextInputFieldCOOProps, isTextInputFieldSOOProps } from '../../types';
import { GetNewOpenedParams, GetNewValueParams, GetNewValuesParams, OnChangeParams } from './types';

/// Patterns
import { validLineBreakPattern } from '@/patterns';

/// Functions
import { getInputErrors } from '@/functions/validations/functions';

// Functions
/// Get new opened
function getNewOpened ( { props, value }: GetNewOpenedParams ) {
    if ( isTextInputFieldCOOProps( props ) ) {
        return value !== props.default;

    } else {
        return true;
    };
}

/// Get new values
function getNewValues ( { props, targetValue, targetChecked, value, values }: GetNewValuesParams ) {
    // If field
    if ( isTextInputFieldCOOProps( props ) ) {
        // If default value
        if ( targetValue === props.default ) {
            return [];

        // Else
        } else {
            // Values
            const newValues = [ ...values ].filter( ( value ) => value !== props.default );

            // If checked
            if ( targetChecked ) {
                // Add value
                newValues.push( targetValue );
                return newValues;

            // If unchecked
            } else {
                // Index
                const index = newValues.indexOf( targetValue );

                // If found
                if ( index > -1 ) {
                    // Remove value
                    newValues.splice( index, 1 );
                    return newValues;

                // If not found
                } else {
                    throw new Error ( `handleValues Function Error: Text field option not found at value: ${ targetValue }, index: ${ index }` )
                };
            };
        };

    // If area
    } else {
        // Values
        const vValues = value.split( validLineBreakPattern );
        const newValues = [ ...values ];

        // Add value
        if ( vValues[ vValues.length - 1 ] ) {
            newValues[ values.length - 1 ] = targetValue;

        } else {
            newValues.push( targetValue );
        };

        // Return
        return newValues;
    };
};

/// Get new value
function getNewValue ( { props, targetValue, targetChecked, value, values }: GetNewValueParams ) {
    // If default
    if ( targetValue === props.default ) {
        return '';

    // If not default
    } else {
        // If field
        if ( isTextInputFieldCOOProps( props ) ) {
            // If separation declared
            if ( props.separation ) {
                // If current value not empty
                if ( value ) {
                    return value + props.separation + targetValue;

                // If previous empty
                } else {
                    return targetValue;
                };

            // Else
            } else {
                // If default value
                if ( targetValue === props.default && targetChecked ) {
                    return targetValue;

                // Else
                } else {
                    return '';
                };
            };

        // If area
        } else {
            return [ ...values, '' ].join( '\n' );
        };     
    };
};

/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Target
    const target = event.currentTarget;
    const targetValue = target.value;
    const targetChecked = target.checked;

    // Set state
    if ( isTextInputFieldSOOProps( props ) ) {
        props.setState( ( state ) => {
            // State
            const newOpened = false;
            const newValue = targetValue;
            const newOptions = state.options;
            const newErrors = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;

            // Return
            return {
                opened: newOpened,
                value: newValue,
                options: newOptions,
                errors: newErrors
            };
        } );

    } else {
        props.setState( ( state ) => {
            // State
            const value = state.value;

            const newOpened = getNewOpened( { props, value: targetValue } );
            const newOptions = state.options;

            const values = state.values;
            const newValues = getNewValues( { props, targetValue, targetChecked, value, values } );

            const newValue = getNewValue( { props, targetValue, targetChecked, value, values: newValues } );
            const newErrors = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;

            // Return
            return {
                opened: newOpened,
                value: newValue,
                options: newOptions,
                values: newValues,
                errors: newErrors
            };
        } );   
    };

    // Focus on input
    props.input.current?.focus();
};