'use client'

// Import
/// Types / Safeguards
import { Context, GetCheckedParams, GetOptionStyleParams, isTextInputAreaCOOProps, isTextInputFieldSOOProps } from './types';

/// Functions
import { createContext } from 'react';
import { getContext } from '@/functions/hooks/context/functions';

/// Context
export const CTX = createContext< null | Context >( null );

/// Styles
import styles from '@/components/inputs/options.module.css';

// Functions
/// Use context
export function useContext () {
    const context = getContext( { context: CTX } );
    return context
};

/// Get checked
export function getChecked ( { props, option }: GetCheckedParams ): boolean {
    // Value / Values
    const value = props.state.value;
    const values = props.state.values;

    // Return
    return value === option || values.includes( option );
};

/// Get option style
export function getOptionStyle ( { props, option }: GetOptionStyleParams ): string {
    // If select option
    if ( isTextInputFieldSOOProps( props )
    || isTextInputAreaCOOProps( props ) ) {
        // Type
        const typeClass = styles.optionType1;

        // Selected
        const currentValue = props.state.value;
        const options = props.state.options;
        const selected = currentValue === option;

        const selectedClass = selected || options.length === 1 ? styles.selectedOption : '';

        // Return
        return typeClass + ' ' + selectedClass;

    // If check option
    } else {
        // Type
        const typeClass = styles.optionType2;

        // Checked
        const options = props.state.options;
        const checked = getChecked( { props, option } );

        const checkedClass = checked || options.length === 1 ? styles.selectedOption : '';

        // Return
        return typeClass + ' ' + checkedClass;
    };
};