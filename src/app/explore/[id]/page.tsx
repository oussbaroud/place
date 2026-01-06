// Import
/// Types
import { Metadata } from 'next';
import { GenerateMetadataParams } from '@/core/types';

/// Functions
import { notFound } from 'next/navigation';

/// Actions
import { getLang } from '@/core/actions/language/actions';
import { getOption } from '@/core/actions/options/actions';

/// Components
import Option from '@/core/pages/option/option';

// Meta data
export async function generateMetadata ( { params }: GenerateMetadataParams ): Promise< Metadata | void > {
  // Get
  const id = ( await params ).id;
  const lang = await getLang();
  const response = await getOption( { lang, id } );

  // Return
  if ( !response.success )
  return notFound();

  return {
    title: response.option?.title[ lang ],
    description: response.option?.description[ lang ],
  };
};

// Page
export default function Page () {
  return (
    <Option/>
  );
};