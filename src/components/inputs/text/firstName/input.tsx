// Import
/// Dictionary
import { getFirstNameDictionary } from './dictionary';

/// Types / Safeguards
import { FirstNameInputProps } from './types';

/// Functions
import { forwardRef, useId } from 'react';
import { onChange } from './functions';

/// Styles
import styles from '@/components/inputs/inputs.module.css';

/// Components
import Messages from '@/components/outputs/messages/messages';

// Component
export default forwardRef< HTMLDivElement, FirstNameInputProps >( function FirstNameInput( props, ref ) {
    // Dictionary
    const dictionary = getFirstNameDictionary( props );

    // Props
    /// Wrapper
    const wrapperClassName = `${ styles.wrapper } ${ props.isHidden && styles.hiddenWrapper }`;

    /// Container
    const inputHasErrors = !props.isErrorsHidden && props.state.errors.length > 0;
    const inputContainerClassName = `${ styles.container } ${ inputHasErrors && styles.containerHasError }`;

    /// Label
    const labelClassName = props.isLabelHidden
    ? styles.hiddenLabel
    : styles.inputOptionLabelNotHidden;

    /// Input
    const inputId = useId();

    // Return
    return (
        <div
            className={ wrapperClassName }
            id={ props.id }
        >
            <div
                ref={ ref }
                className={ inputContainerClassName }
            >
                <label
                    className={ styles.field }
                    htmlFor={ inputId }
                >
                    <span
                        className={ labelClassName }
                    >{ dictionary.input.label }</span>
                    <input
                        className={ styles.textFieldInput }
                        id={ inputId }
                        type={ 'text' }
                        placeholder={ dictionary.input.placeholder }
                        value={ props.state.value }
                        onChange={ ( event ) => onChange( { props, event } ) }
                        autoComplete={ 'off' }
                        autoCorrect={ 'off' }
                    />
                </label>
            </div>
            <Messages
                errors={ props.state.errors }
                isErrorsHidden={ props.isErrorsHidden }
            />
        </div>
    );
} );