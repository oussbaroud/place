"use client"

// Import
/// Types
import { MessagesProps } from './types';

/// Styles
import styles from './messages.module.css';

// Component
export default function Messages ( props: MessagesProps ) {
  // If message
  if (
    ( props.notes?.length || 0 ) > 0 ||
    ( !props.isErrorsHidden && ( props.errors?.length || 0 ) > 0 )
  ) {
    // Props
    const containerClassName = `${ styles.container } ${ props.center ? styles.center : '' }`;
    const noteClassName = styles.note;
    const errorClassName = styles.error;

    // Return
    return (
      <div className={ containerClassName }>
        { props.notes?.map( ( note, index ) => <span key={ index } className={ noteClassName }>{ note }</span> ) }
        { !props.isErrorsHidden && props.errors?.map( ( error, index ) => <span key={ index } className={ errorClassName }>{ error }</span> ) }
      </div>
    );

  // Else
  } else {
    // Return
    return <></>;
  }
}
