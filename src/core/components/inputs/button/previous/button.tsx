"use client"

// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Types
import { PreviousButtonProps } from './types';

/// Styles
import styles from '../buttons.module.css';

// Component
export default function PreviousButton( props: PreviousButtonProps ) {
  // Dictionary
  const dictionary = getDictionary( { lang: props.lang } );

  // Props
  const inputType = 'button';

  const inputValue = dictionary.value;
  const inputOnClick = () => props.onClick();

  const inputClassName = `${ styles.btn } ${ styles.btnCo2 }`;

  // Return
  return (
    <button className={ inputClassName } type={ inputType } onClick={ inputOnClick }>{ inputValue }</button>
  );
};