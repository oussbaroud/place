// Import
/// Types / Safeguards
import { ChangeEvent, RefObject } from 'react';
import { OnChangeParams, OnClickParams, PasswordInputProps } from './types';

/// Schemas
import { getPasswordSchema } from './validations';

/// Functions
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// On input change
export function onChange ( { props, event }: OnChangeParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const revealed = state.revealed;
        const newValue = event.target.value;
        const newErrors = props.validation
        ? getInputErrors( { schema: getPasswordSchema( props ), value: newValue } )
        : state.errors;

        // Return
        return {
            revealed: revealed,
            value: newValue,
            errors: newErrors
        };
    } );
};

// On reveal click
export function onClick ( { props, inputType, event }: OnClickParams ) {
    // Checked
    const targetChecked = event.target.checked;

    // Ref
    inputType.current = targetChecked ? 'text' : 'password';

    // Set state
    props.setState( ( state ) => {
        // State
        const newRevealed = targetChecked;
        const value = state.value;
        const errors = state.errors;

        // Return
        return {
            revealed: newRevealed,
            value: value,
            errors: errors
        };
    } );
};