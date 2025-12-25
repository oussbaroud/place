// Import
/// Types / Safeguards
import { OnChangeParams } from './types';

/// Schemas
import { getFirstNameSchema } from './validations';

/// Functions
import { upperCase } from '@/functions/data/string/functions';
import { getInputErrors } from '@/functions/validations/functions';

// Functions
/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const newValue = upperCase( { value: event.target.value } );
        const newErrors = props.validation
        ? getInputErrors( { schema: getFirstNameSchema( props ), value: newValue } )
        : state.errors;

        // Return
        return {
            value: newValue,
            errors: newErrors
        };
    } );
};