'use client'

// Import
/// Types / Safeguards
import { SelectInputProps } from './types';

/// Variables
import { getInputTextColorStyle } from '../variables';

/// Functions
import { forwardRef, useId, useRef } from 'react';
import { onClick } from './functions';

/// Styles
import styles from '@/core/components/inputs/inputs.module.css';

/// Components
import Options from './components/options/options'
import Messages from '@/core/components/outputs/messages/messages';

// Component
export default forwardRef< HTMLDivElement, SelectInputProps >( function SelectInput ( props, ref ) {
    // Use refs
    const inputRef = useRef< null | HTMLInputElement >( null );

    // Props
    /// Wrapper
    const wrapperClassName = `${ styles.wrapper } ${ props.isHidden && styles.hiddenWrapper }`;

    /// Container
    const hasErrors = !props.isErrorsHidden && props.state.errors.length > 0;
    const containerClassName = `${ styles.container } ${ hasErrors && styles.containerHasError }`;

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
                className={ containerClassName }
            >
                <label
                    className={ styles.field }
                    htmlFor={ inputId }
                >
                    <span
                        className={ labelClassName }
                    >{ props.label }</span>
                    <input
                        ref={ inputRef }
                        className={ styles.selectionInput }
                        id={ inputId }
                        type={ 'button' }
                        value={ props.state.value || props.placeholder }
                        onClick={ () => onClick( { props } ) }
                        style={ getInputTextColorStyle( { value: props.state.value } ) }
                    />
                </label>
                <Options
                    options={ props.options }
                    default={ props.default }
                    schema={ props.schema }
                    state={ props.state }
                    setState={ props.setState }
                    input={ inputRef }
                />
            </div>
            <Messages
                notes={ [ ...( props.notes || [] ) ] }
                errors={ props.state.errors }
                isErrorsHidden={ props.isErrorsHidden }
            />
        </div>
    );
} );