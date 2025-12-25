// Imports
/// Types / Safeguards
import { GetOptionStyleParams, OnClickParams } from './types';

/// Functions
import { getInputErrors } from '@/functions/validations/functions';

/// Styles
import styles from '@/components/inputs/options.module.css';

// Functions
/// On click
export function onClick ( { props, value }: OnClickParams ): void {
    // Set state
    props.setState( ( state ) => {
        // State
        const newOpened = false;
        const newValue = value !== props.default ? value : '';
        const newErrors = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;

        // Return
        return {
            opened: newOpened,
            value: newValue,
            errors: newErrors
        };
    } );

    // Focus
    props.input.current?.focus();
};

/// Style checked value
export function getOptionStyle ( { props, value }: GetOptionStyleParams ): string {
    // Classes
    const typeClass = styles.optionType1
    const selectedClass = props.state.value === value ? styles.selectedOption : '';

    // Return
    return typeClass + ' ' + selectedClass;
};