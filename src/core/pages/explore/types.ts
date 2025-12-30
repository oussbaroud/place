// Import
/// Types
import { RefObject } from 'react';
import { DispatchSetState, DivRef, IsPending, Lang } from '@/core/types';
import { TextInputCOState } from '@/core/components/inputs/text/text/types';
import { Option } from '@/core/actions/options/types';

// Types
/// State / SetState
export type State = {
  lang: Lang;
  exclude: string [];
  options: Option [];
  filter: {
    provinces: TextInputCOState;
    activities: TextInputCOState;
    budget: TextInputCOState;
  };
  errors: string [];
};

export type SetState = DispatchSetState< State >;

/// Has change
export type Request = {
  exclude: string [];
  provinces: string [];
  activities: string [];
  budget: string [];
};

/// Ref
export type RefValue = {
  filter: {
    provinces: DivRef;
    activities: DivRef;
    budget: DivRef;
  };
};
export type Ref =  RefObject< RefValue >;

/// Context
export type Context = { 
  state: [ State, SetState ];
  isPending: IsPending;
  needRequest: [ boolean, DispatchSetState< boolean > ];
  ref: Ref;
};

/// Functions
export type OnRequestParams = {
    lang: Lang;
    state: State;
    setState: DispatchSetState< State >;
    setIsPending: DispatchSetState< boolean >;
    setNeedRequest: DispatchSetState< boolean >;
};

export type UseNeedRequestParams = {
    state: State;
};