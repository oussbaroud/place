// Import
/// Types / Safeguards
import { ChangeEventHandler, RefObject } from 'react';
import { TextInputProps, isTextInputFieldCOProps, isTextInputFieldProps, isTextInputFieldSOProps, isTextInputAreaCOProps } from '@/core/components/inputs/text/text/types';

/// Functions
import { onChange, getValue, onClick } from '../../functions';

/// Styles
import styles from '@/core/components/inputs/inputs.module.css';

// Components
export default function Input ( { props, inputId, inputRef }: { props: TextInputProps; inputId: string; inputRef: RefObject< null | HTMLInputElement | HTMLTextAreaElement >; } ) {
    /// Props
    const inputContainerClassName = styles.field;

    const labelClassName = props.isLabelHidden
    ? styles.hiddenLabel
    : styles.inputOptionLabelNotHidden;
    const labelValue = props.label;

    const inputPlaceholder = props.placeholder;
    const inputValue = getValue( { props } );

    const inputOnClick = () => onClick( { props } );
    const inputOnChange: ChangeEventHandler< HTMLInputElement | HTMLTextAreaElement > = ( event ) => onChange( { props, event } );

    // If field
    if ( isTextInputFieldProps( props )
    || isTextInputFieldSOProps( props )
    || isTextInputFieldCOProps( props ) ) {
        // Return
        return (
            <label
                className={ inputContainerClassName }
                htmlFor={ inputId }
            >
                <span
                    className={ labelClassName }
                >{ labelValue }</span>
                <input
                    ref={ inputRef as RefObject< null | HTMLInputElement > }
                    className={ styles.textFieldInput }
                    id={ inputId }
                    type={ 'text' }
                    placeholder={ inputPlaceholder }
                    value={ inputValue }
                    onClick={ inputOnClick }
                    onChange={ inputOnChange }
                    autoComplete={ 'off' }
                    autoCorrect={ 'off' }
                />
            </label>
        ); 
        
    // If area
    } else {
        // Return
        return (
            <label
                className={ inputContainerClassName }
                htmlFor={ inputId }
            >
                <span
                    className={ labelClassName }
                >{ labelValue }</span>
                <textarea
                    ref={ inputRef as RefObject< null | HTMLTextAreaElement > }
                    className={ styles.textAreaInput }
                    id={ inputId }
                    rows={ 5 }
                    placeholder={ inputPlaceholder }
                    value={ inputValue }
                    onClick={ inputOnClick }
                    onChange={ inputOnChange }
                />
            </label>
        ); 
    };
};