// Import
/// Types
import { DispatchSetState, Lang } from '@/core/types';
import { SetState } from '../../types';

// Types
export type FilterParams = {
    setState: SetState;
    setIsPending: DispatchSetState< boolean >;
    setNeedRequest: DispatchSetState< boolean >;
};