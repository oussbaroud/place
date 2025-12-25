// Import
/// Types / Safeguards
import { OnChangeParams } from './types';

/// Schemas
import { getNameSchema } from './validations';

/// Functions
import { upperCase } from '@/core/functions/data/string/functions';
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const newValue = upperCase( { value: event.target.value } );
        const newErrors = props.validation
        ? getInputErrors( { schema: getNameSchema( props ), value: newValue } )
        : state.errors;

        // Return
        return {
            value: newValue,
            errors: newErrors
        };
    } );
};