// Import
/// Types / Safeguards
import { OnClickParams } from './types';

// Functions
/// On click
export function onClick ( { props }: OnClickParams ) {
    // Set state
    props.setState( ( state ) => {
        // State
        const newOpened = true;
        const value = state.value;
        const errors = state.errors;

        // Return
        return {
            opened: newOpened,
            value: value,
            errors: errors
        };
    } );
};