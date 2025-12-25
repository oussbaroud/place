// Import
/// Types
import { FormEvent, RefObject } from 'react';
import { DispatchSetState, Lang, Path, PathSetState } from '@/types';
import { TraverseTargets } from './data/types';

// Types
export type GetDirectionParams = {
    lang: Lang;
};

export type OnClickOutsideParams = {
    setState: DispatchSetState< any >;
    ref: RefObject< any >,
    event: MouseEvent
};

export type AddClickEventListenerParams = {
    setState: DispatchSetState< any >;
    ref: RefObject< any >;
};

export type SetStatePathsParams < T > = {
    setState: DispatchSetState< T > | PathSetState< T >;
    targets: TraverseTargets | ( ( state: T ) => TraverseTargets );
};

export type GetPathSetStateParams < T > = {
    setState: PathSetState< T >;
    path: Path;
};

export type GetFirstErrorPathParams = {
    errors: any;
};

export type OnSubmitParams = {
    lang: Lang;
    state: any;
    setState: DispatchSetState< any >;
    setIsPending: DispatchSetState< boolean >;
    action: ( { lang, data }: { lang: Lang; data: any; } ) => any;
    event?: FormEvent< HTMLFormElement >;
};