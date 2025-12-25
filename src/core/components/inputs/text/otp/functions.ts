// Import
/// Types / Safeguards
import { OnChangeParams } from './types';

/// Schemas
import { getOTPSchema } from './validations';

/// Functions
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const newValue = event.target.value;
        const newErrors = props.validation
        ? getInputErrors( { schema: getOTPSchema( { lang: props.lang } ), value: newValue } )
        : state.errors;

        // Return
        return {
            value: newValue,
            errors: newErrors
        };
    } );
};