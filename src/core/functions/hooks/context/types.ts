// Import
/// Types
import { Lang } from '@/core/types';
import { Context } from 'react';

// Types
export type GetContextParams < T > = {
  context: Context< T >;
};

export type GlobalContext = {
    lang: Lang;
};