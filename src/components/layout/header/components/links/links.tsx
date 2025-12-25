"use client"

// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Functions
import { useGlobalContext } from '@/functions/hooks/context/functions';

/// Styles
import styles from './links.module.css';

/// Components
import Language from './components/language/language';

// Component
export default function Links () {
    // Use context
    const context = useGlobalContext();

    // Dictionary
    const lang = context.lang;
    const dictionary = getDictionary( { lang } );
    
    // Return
    return (
        <div className={ styles.type1 }>
            <Language/>
        </div>
    );
};