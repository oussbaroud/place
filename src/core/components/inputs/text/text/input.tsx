'use client'

// Import
/// Dictionary
import { getGlobalDictionary } from '@/core/dictionary';

/// Types / Safeguards
import { ChangeEventHandler, RefObject } from 'react';
import { TextInputProps, isTextInputFieldCOProps, isTextInputFieldProps, isTextInputFieldSOProps, isTextInputAreaCOProps } from '@/core/components/inputs/text/text/types';

/// Functions
import { forwardRef, useId, useRef } from 'react';
import { getDirection } from '@/core/functions/functions';
import { onChange, getValue, onClick } from './functions';

/// Styles
import styles from '@/core/components/inputs/inputs.module.css';

/// Components
import Input from './components/input/input';
import IOptions from './components/options/options';
import Messages from '@/core/components/outputs/messages/messages';

// Components
function Options ( { props, inputRef }: { props: TextInputProps; inputRef: RefObject< null | HTMLInputElement | HTMLTextAreaElement >; } ) {
    if ( isTextInputFieldSOProps( props ) ) {
        // Return
        return (
            <IOptions
                type={ 'field-so' }
                default={ props.default }
                state={ props.state }
                setState={ props.setState }
                schema={ props.schema }
                input={ inputRef }
            />
        );

    } else if ( isTextInputFieldCOProps( props )
    || isTextInputAreaCOProps( props ) ) {
        // Props
        const optionsState = props.state;
        const optionsSetState = props.setState;
        const optionsSchema = props.schema

        // If Field
        if ( isTextInputFieldCOProps( props ) ) {
            // Return
            return (
                <IOptions
                    type={ 'field-co' }
                    default={ props.default }
                    separation={ props.separation }
                    state={ optionsState }
                    setState={ optionsSetState }
                    input={ inputRef }
                    schema={ optionsSchema }
                />
            );

        // If Area
        } else {
            // Return
            return (
                <IOptions
                    type={ 'area-co' }
                    state={ optionsState }
                    setState={ optionsSetState }
                    input={ inputRef }
                    schema={ optionsSchema }
                />
            );
        };
        
    } else {
        return <></>
    };
};

export default forwardRef< HTMLDivElement, TextInputProps >( function TextInput ( props, ref ) {
    // Use ids
    const inputId = useId();

    // Use refs
    const inputRef = useRef< null | HTMLInputElement | HTMLTextAreaElement >( null );

    // Props
    /// Wrapper / Container
    const wrapperClassName = `${ styles.wrapper } ${ props.isHidden && styles.hiddenWrapper }`;

    const inputHasErrors = ( !props.isErrorsHidden && ( props.state.errors?.length || 0 ) > 0 );
    const containerClassName = `${ styles.container } ${ inputHasErrors && styles.containerHasError }`;

    /// Messages
    const messagesNotes = props.isOptional
    ? [ getGlobalDictionary( { lang: props.lang.user } ).inputMessages.optional, ...( props.notes || [] ) ]
    : [ ...( props.notes || [] ) ];

    // Return
    return (
        <div
            className={ wrapperClassName }
            id={ props.id }
        >
            <div
                ref={ ref }
                className={ containerClassName }
                dir={ getDirection( { lang: props.lang.input } ) }
                lang={ props.lang.input }
            >
                <Input
                    inputId={ inputId }
                    inputRef={ inputRef }
                    props={ props }
                />
                <Options
                    inputRef={ inputRef }
                    props={ props }
                />
            </div>
            <Messages
                notes={ messagesNotes }
                errors={ props.state.errors }
                isErrorsHidden={ props.isErrorsHidden }
            />
        </div>
    );
} );