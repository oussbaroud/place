// Import
/// Types
import { Lang } from '@/types';

// types
export type NextButtonProps = {
  lang: Lang;
  isActive: boolean;
  isPending?: boolean;
  onClick: Function;
};