// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Types
import { SubmitButtonProps } from './types';

/// Functions
import { handleDisabledClassName, handlePendingClassName } from '../functions';

/// Styles
import styles from '../button.module.css';

// Component
export default function SubmitButton ( props: SubmitButtonProps ) {
  // Dictionary
  const dictionary = getDictionary( { lang: props.lang } );

  // Props
  const inputType = 'submit';
  const inputValue = dictionary.value;
  
  const inputClassName = `${ styles.btn } ${ styles.btnCo1 } ${ handleDisabledClassName( props ) } ${ handlePendingClassName( props ) }`;

  // Return
  return (
    <button className={ inputClassName } type={ inputType }>{ inputValue }</button>
  );
}