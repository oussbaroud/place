// Import
/// Types
import { Lang } from '@/core/types';

// types
export type NextButtonProps = {
  lang: Lang;
  isActive: boolean;
  isPending?: boolean;
  onClick: () => void | Promise< void >;
};