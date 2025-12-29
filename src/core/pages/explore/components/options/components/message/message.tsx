'use client'

// Import
/// Dictionary
import { getMessageDictionary } from './dictionary';

/// Functions
import { useContext } from '@/core/pages/explore/functions';

/// Styles
import styles from './message.module.css';


// Component
export default function Message () {
    // Context
    const { state: [ state ] } = useContext();

    // Dictionary
    const lang = state.lang;
    const dictionary = getMessageDictionary( { lang } );
    
    // Return
    return (
        <div className={ styles.wrapper }>
            <div
                id={ styles.emoji }
            >
                <span>❤️</span>
            </div>
            <h2
                id={ styles.message }
            >{ dictionary.fewOptions }</h2>
        </div>
    );
};