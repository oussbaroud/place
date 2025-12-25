'use client'

// Import
/// Types
import { Context, DataValue, RefValue, State } from './types';

/// Variables
import { iState } from './variables';

/// Functions
import { useEffect, useId, useRef, useState } from 'react';
import { addClickEventListener } from '@/functions/functions';
import { useGlobalContext } from '@/functions/hooks/context/functions';
import { onMount } from './functions';

/// Styles
import styles from './explore.module.css';

/// Components
import Filter from './components/filter/filter';
import Options from './components/options/options';

// Context
import { CTX } from './functions';

// Component
export default function Explore () {
    // Variables
    const id = useId();
    const lang = useGlobalContext().lang;

    // Use states
    const [ isPending, setIsPending ] = useState< boolean >( true );
    const [ state, setState ] = useState< State >( iState( { lang } ) );

    /// Use ref
    const data = useRef< DataValue >( {
        options: []
    } ); 
    const ref = useRef< RefValue >( {
        filter: {
            provinces: useRef< null | HTMLDivElement >( null ),
            activities: useRef< null | HTMLDivElement >( null ),
            budget: useRef< null | HTMLDivElement >( null ),
        }
    } );

    /// Use effect
    useEffect( () => {
        // Handle click outside
        return addClickEventListener( { setState, ref } );

    }, [] );

    useEffect( () => {
        // Get options
        onMount( { lang, data, setState, setIsPending } );

    }, [] );

    // Context value
    const context: Context = { 
        state: [ state, setState ],
        data: data,
        isPending: [ isPending, setIsPending ],
        ref
    };
    
    // Return
    return (
        <div className={ styles.wrapper }>
            <div
                className={ styles.container }
            >
                <CTX.Provider value={ context }>
                    <span id={ id } style={ { display: 'none' } }>{ id }</span>
                    <Filter/>
                    <Options/>
                </CTX.Provider>
            </div>
        </div>
    );
};