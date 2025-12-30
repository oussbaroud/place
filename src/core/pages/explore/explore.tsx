'use client'

// Import
/// Types
import { Context, RefValue, State } from './types';

/// Variables
import { iState } from './variables';

/// Functions
import { useEffect, useRef, useState } from 'react';
import { addClickEventListener } from '@/core/functions/functions';
import { useGlobalContext } from '@/core/functions/hooks/context/functions';
import { onRequest, useNeedRequest } from './functions';

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
    const lang = useGlobalContext().lang;

    // Use states
    const [ state, setState ] = useState< State >( iState( { lang } ) );
    const [ isPending, setIsPending ] = useState< boolean >( true );
    const [ needRequest, setNeedRequest ] = useNeedRequest( { state } );

    /// Use ref
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
        // Request
        if ( needRequest )
        onRequest( { lang, state, setState, setIsPending, setNeedRequest } );

    }, [ needRequest ] );

    // Context value
    const context: Context = { 
        state: [ state, setState ],
        isPending: [ isPending, setIsPending ],
        needRequest: [ needRequest, setNeedRequest ],
        ref
    };
    
    // Return
    return (
        <div className={ styles.wrapper }>
            <div
                className={ styles.container }
            >
                <CTX.Provider value={ context }>
                    <Filter/>
                    <Options/>
                </CTX.Provider>
            </div>
        </div>
    );
};