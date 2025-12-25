// Import
/// Types
import { DispatchSetState, Lang } from '@/core/types';
import { SetState, Data } from '../../types';

// Types
export type FilterParams = {
    lang: Lang;
    data: Data;
    setState: SetState;
    setIsPending: DispatchSetState< boolean >
};