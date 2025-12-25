"use client"

// Import
/// Functions
import { onClick, getValue } from './functions';
import { useGlobalContext } from '@/core/functions/hooks/context/functions';

/// Styles
import styles from './language.module.css';

// Component
export default function Language () {
    // Language
    const lang = useGlobalContext().lang;
    
    // Return
    return (
        <input className={ styles.langBtn } type={ 'button' } onClick={ ( event ) => onClick( event ) } value={ getValue( lang ) }/>
    );
};