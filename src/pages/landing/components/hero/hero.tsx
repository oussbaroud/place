'use client';

// Import
/// Dictionary
import { getHeroDictionary } from './dictionary';

/// Functions
import { useGlobalContext } from '@/functions/hooks/context/functions';

/// Styles
import styles from './hero.module.css';

/// Components
import Image from 'next/image';

/// Component
export default function Hero () {
  // Dictionary
  const { lang } = useGlobalContext();
  const dictionary = getHeroDictionary( { lang } );

  // Return
  return (
    <div className={ styles.wrapper }>
        <div className={ styles.container }>
            <div className={ styles.text }>
                <h1 id={ styles.title }>{ dictionary.title }</h1>
                <p id={ styles.description }>{ dictionary.description }</p>
            </div>
            <a href={ '/explore' } id={ styles.action }>{ dictionary.action }</a>
        </div>
        <div className={ styles.background }>
        </div>
    </div>
  );
};