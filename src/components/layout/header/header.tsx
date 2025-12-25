'use client'

// Import
/// Functions
import { useGlobalContext } from '@/functions/hooks/context/functions';

/// Styles
import styles from './header.module.css';

/// Components
import Links from './components/links/links';
import { getDictionary } from './dictionary';

// Component
export default function Header () {
  // Use context
  const context = useGlobalContext();

  // Dictionary
  const lang = context.lang;
  const dictionary = getDictionary( { lang } );

  // Return
  return (
    <header
      className={ styles.wrapper }
    >
      <div
        className={ styles.container }
      >
        <div
          className={ styles.logoContainer }
        >
          <a
            id={ styles.logo }
            href={ '/' }
          >{ dictionary.logo }</a>
          <label
            className={ styles.menuBtn }
            htmlFor={ styles.menuCb }
          >
            <svg
              id={ styles.menuLabel }
              xmlns={ 'http://www.w3.org/2000/svg' }
              viewBox={ '0 0 448 512' }
            >
              <path
                fill={ 'currentColor' }
                d={ 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' }
              />
            </svg>
            <input
              id={ styles.menuCb }
              type={ 'checkbox' }
            />
          </label>
        </div>
        <Links/>
      </div>
    </header>
  );
};