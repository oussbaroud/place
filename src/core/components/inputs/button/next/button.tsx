"use client"

// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Types
import { NextButtonProps } from './types';

/// Functions
import { handleDisabledClassName, handlePendingClassName } from '../functions';

/// Styles
import styles from '../buttons.module.css';

// Component
export default function NextButton ( props: NextButtonProps ) {
  // Dictionary
  const dictionary = getDictionary( { lang: props.lang } );

  // Props
  const inputType = 'button';

  const inputValue = dictionary.value;
  const inputOnClick = () => props.onClick();

  const inputClassName = `${ styles.btn } ${ styles.btnCo1 } ${ handleDisabledClassName( props ) } ${ handlePendingClassName( props ) }`;

  // Return
  return (
    <button className={ inputClassName } type={ inputType } onClick={ inputOnClick }>{ inputValue }</button>
  );
}