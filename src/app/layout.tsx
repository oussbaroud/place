// Import
/// Dictionay
import { getMetaData } from '@/core/dictionary';

/// Types
import type { Metadata } from 'next';
import { ReactNode } from 'react';

/// Fonts
import { Cairo, Roboto } from 'next/font/google';

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
const roboto = Roboto( {
  variable: '--font-latin',
  subsets: [ 'latin' ],
  weight: [ '300', '400', '500', '700', '900' ],
  display: 'swap',
} );

const cairo = Cairo( {
  variable: '--font-arabic',
  subsets: [ 'arabic' ],
  weight: [ '300', '400', '500', '700', '900' ],
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
        <body className={ `${ cairo.variable } ${ roboto.variable }` } dir={ dir } lang={ lang }>
          <Header/>
          <main>{ children }</main>
        </body>
      </Provider>
    </html>
  );
};