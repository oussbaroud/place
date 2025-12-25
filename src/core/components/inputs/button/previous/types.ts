// Import
/// Types
import { Lang } from '@/core/types';

// Types
export type PreviousButtonProps = {
  lang: Lang;
  onClick: () => void | Promise< void >;
};