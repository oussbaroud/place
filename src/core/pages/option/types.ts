// Import
/// Types
import { Option } from '@/core/actions/options/types';
import { DispatchSetState, Lang } from '@/core/types';

// Types
export type OptionState = {
    option: null | Option;
    errors: string [];
};

export type OnMountParams = {
    lang: Lang;
    id: string;
    setState: DispatchSetState< OptionState >;
    setIsPending: DispatchSetState< boolean >;
};