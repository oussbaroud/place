"use client"

// Import
/// Functions
import { onClick, getValue } from './functions';
import { useGlobalContext } from '@/core/functions/hooks/context/functions';

/// Styles
import styles from './language.module.css';
import { getLang2 } from '@/core/actions/language/functions';

// Component
export default function Language () {
    // Language
    const lang = useGlobalContext().lang;
    const lang2 = getLang2( { lang } );
    
    // Return
    return (
        <input
            lang={ lang2 }
            className={ styles.langBtn }
            type={ 'button' }
            onClick={ ( event ) => onClick( event ) }
            value={ getValue( lang ) }
        />
    );
};