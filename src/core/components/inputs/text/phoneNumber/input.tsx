"use client"

// Import
/// Dictionary
import { getPhoneNumberDictionary } from './dictionary';

/// Types / Safeguards
import { PhoneNumberInputProps } from '@/core/components/inputs/text/phoneNumber/types';

/// Functions
import { forwardRef, useRef, useId } from 'react';
import { onClick, onChange } from './functions';

/// Styles
import styles from '@/core/components/inputs/inputs.module.css';

/// Components
import CountryCodesOptions from './components/options/options';
import Messages from '@/core/components/outputs/messages/messages';

// Component
export default forwardRef< HTMLDivElement, PhoneNumberInputProps >( function PhoneNumberInput( props, ref ) {
  // Dictionary
  const dictionary = getPhoneNumberDictionary( props );
  
  // Use refs
  const inputRef = useRef< null | HTMLInputElement >( null );
  
  // Props
  /// Container
  const inputHasErrors = ( !props.isErrorsHidden && ( props.state.errors?.length || 0 ) > 0 );
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
      className={ styles.wrapper }
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
                ref={ inputRef }
                className={ styles.textFieldInput }
                id={ inputId }
                type={ 'text' }
                dir={ 'ltr' }
                placeholder={ dictionary.input.numberPlaceholder }
                value={ props.state.value }
                onClick={ () => onClick( { props } ) }
                onChange={ ( event ) => onChange( { props, event } ) }
                autoComplete={ 'off' }
                autoCorrect={ 'off' }
              />
          </label>
          {
            props.remove &&
              <div
                className={ styles.action }
              >
                <button
                  className={ styles.button }
                  type={ 'button' }
                  onClick={  () => { if ( props.remove ) props.remove() } }
                >
                  <svg
                    xmlns={ 'http://www.w3.org/2000/svg' }
                    viewBox={ '0 0 384 512' }
                    width={ '15px' }
                  >
                    <path
                      fill={ 'currentColor' }
                      d={ 'M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' }
                    />
                  </svg>
                </button>
              </div>
          }
          <CountryCodesOptions
            lang={ props.lang }
            state={ props.state }
            setState={ props.setState }
            input={ inputRef }
          />
      </div>
      <Messages
        errors={ props.state.errors }
        isErrorsHidden={ props.isErrorsHidden }
      />
    </div>
  );
} );