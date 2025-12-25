// Import
/// Types / Safeguards
import { OnChangeParams } from './types';

/// Schemas
import { getEmailSchema } from './validations';

/// Functions
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const newValue = event.target.value.toLowerCase();
        const newErrors = props.validation
        ? getInputErrors( { schema: getEmailSchema( props ), value: newValue } )
        : state.errors;

        // Return
        return {
            value: newValue,
            errors: newErrors
        };
    } );
};