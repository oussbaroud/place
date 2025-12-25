// Import
/// Types
import { Option } from '@/actions/options/types';
import { DispatchSetState, Lang } from '@/types';

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

export type GetDepartureParams = {
    values: {
        date: Date;
        location: string;
    } [];
};