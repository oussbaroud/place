// Imports
/// Types / Safeguards
import { SelectInputOptionsProps } from './types';

/// Functions
import { useId } from 'react';
import { onClick, getOptionStyle } from './functions';

/// Styles
import styles from '@/components/inputs/options.module.css';

// Component
export default function Options ( props: SelectInputOptionsProps ) {
    // Use id
    const id = useId();

    // If opened
    if ( props.state.opened ) {
        return (
            <div className={ styles.container }>
                <div className={ styles.options }>
                    { props.options.map( ( value, index ) => {
                        // Props
                        const containerClassName = getOptionStyle( { props, value } );

                        const inputType = 'button';
                        const inputOnClick = () => onClick( { props, value } );
                        const inputId = id + index;

                        // Return
                        return (
                            <label className={ containerClassName } key={ index } htmlFor={ inputId }>
                                <input type={ inputType } id={ inputId } value={ value } onClick={ inputOnClick }/>
                            </label>
                        )
                    } ) }
                </div>
            </div>
        )

    // If not
    } else {
        // Return
        return <></>
    };
};