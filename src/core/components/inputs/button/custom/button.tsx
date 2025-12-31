"use client"

// Import
/// Types
import { CustomButtonProps } from './types';

/// Functions
import { handleDisabledClassName, handlePendingClassName } from '../functions';

/// Styles
import styles from '../button.module.css';

// Component
export default function CustomButton ( props: CustomButtonProps ) {
  // Props
  const inputType = 'button';

  const inputValue = props.value;
  const inputOnClick = () => props.onClick();

  const inputClassName = `${ styles.btn } ${ styles[ 'btn' + props.color ] } ${ handleDisabledClassName( props ) } ${ handlePendingClassName( props ) }`;
  const inputId = props.id;

  // Return
  return (
    <button
      className={ inputClassName }
      id={ inputId }
      type={ inputType }
      onClick={ inputOnClick }
    >{ inputValue }</button>
  );
}