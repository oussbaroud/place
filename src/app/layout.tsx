// Import
/// Dictionay
import { getMetaData } from '@/core/dictionary';

/// Types
import type { Metadata } from 'next';
import { ReactNode } from 'react';

/// Fonts
import { Cairo } from 'next/font/google';

/// Functions
import { getDirection } from '@/core/functions/functions';

/// Actions
import { getLang } from '@/core/actions/language/actions';

/// Styles
import './globals.css';

/// Components
import Provider from '@/core/provider/provider';
import Header from '@/core/components/layout/header/header';

// Fonts
const cairo = Cairo( {
  variable: '--font-arabic',
  subsets: [ 'arabic', 'latin' ],
  display: 'swap',
} );

// Meta data
export async function generateMetadata (): Promise< Metadata > {
  // Lang
  const lang = await getLang();

  // Return
  return getMetaData( { lang } );
};

// Layout
export default async function RootLayout ( {
  children,
}: Readonly< {
  children: ReactNode;
} > ) {
  // Props
  const lang = await getLang();
  const dir = getDirection( { lang } );

  // Return
  return (
    <html>
      <Provider lang={ lang }>
        <body className={ `${ cairo.variable }` } dir={ dir } lang={ lang }>
          <Header/>
          <main>{ children }</main>
        </body>
      </Provider>
    </html>
  );
};