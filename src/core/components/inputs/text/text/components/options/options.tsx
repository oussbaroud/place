'use client'

// Imports
/// Types / Safeguards
import { Context, TextInputOptionsProps } from './types';

/// Functions
import { useId } from 'react';
import { getOptionStyle } from './functions';

/// Styles
import styles from '@/core/components/inputs/options.module.css';

/// Components
import Option from './components/option/option';

// Context
import { CTX } from './functions';

// Component
export default function TextInputOptions ( props: TextInputOptionsProps ) {
    // Use id
    const optionsId = useId();

    // Context
    const context: Context = { 
        props,
        optionsId
    };

    // If opened
    if ( props.state.opened ) {
        // Return
        return (
            <div className={ styles.container }>
                <div className={ styles.options }>
                    <CTX.Provider value={ context }>
                        { props.state.options.map( ( option, optionIndex ) => {
                            // Props
                            const inputContainerClassName = getOptionStyle( { props, option } );
                            const inputId = optionsId + optionIndex;

                            // Return
                            return (
                                <label className={ inputContainerClassName } key={ optionIndex } htmlFor={ inputId }>
                                    <Option
                                        option={ option }
                                        index={ optionIndex }
                                    />
                                </label>
                            );
                        } ) }                        
                    </CTX.Provider>
                </div> 
            </div>
        );

    // Else
    } else {
        // Return
        return <></>
    };
};