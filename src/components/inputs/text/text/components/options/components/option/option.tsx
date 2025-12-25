// Import
/// Types / Safeguards
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { isTextInputAreaCOOProps, isTextInputFieldSOOProps } from '../../types';
import { OptionProps } from './types';

/// Functions
import { getChecked, useContext } from '../../functions';
import { onChange } from './function';

/// Styles
import styles from '@/components/inputs/options.module.css';

// Component
export default function Option ( { option, index }: OptionProps ) {
    // Context
    const { props, optionsId } = useContext();

    // Props
    const inputValue = option;
    const inputId = optionsId + index;

    // If field select options or area check options
    if ( isTextInputFieldSOOProps( props )
    || isTextInputAreaCOOProps( props ) ) {
        // Props
        const inputType = 'button';
        const inputOnClick: MouseEventHandler< HTMLInputElement > = ( event ) => onChange( { props, event } );

        // Return
        return <input id={ inputId } type={ inputType } value={ inputValue } onClick={ inputOnClick }/>;

    // Else
    } else {
        // Props
        const inputType = 'checkbox';
        const inputChecked = getChecked( { props, option } );
        const inputOnChange: ChangeEventHandler< HTMLInputElement > = ( event ) => onChange( { props, event } );

        const labelValue = option;
        const labelClassName = styles.optionLabel;

        // Return
        return (
            <>
                <input id={ inputId } type={ inputType } value={ inputValue } checked={ inputChecked } onChange={ inputOnChange }/>
                <span className={ labelClassName }>{ labelValue }</span>
            </>
        );
    };
};