// Import
/// Types
import { RefObject } from 'react';
import { DispatchSetState, DivRef, IsPending, Lang } from '@/types';
import { TextInputCOState } from '@/components/inputs/text/text/types';
import { SelectInputState } from '@/components/inputs/select/types';
import { Option } from '@/actions/options/types';

// Types
/// State / SetState
export type State = {
  lang: Lang;
  options: Option [];
  filter: {
    provinces: TextInputCOState;
    activities: TextInputCOState;
    budget: SelectInputState;
    errors: string [];
  };
  errors: string [];
};

export type SetState = DispatchSetState< State >;

/// Options
export type DataValue = {
  options: Option [];
};
export type Data = RefObject< DataValue >;

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
  data: Data;
  isPending: IsPending;
  ref: Ref;
};

/// Functions
export type OnMountParams = {
    lang: Lang;
    data: Data;
    setState: DispatchSetState< State >;
    setIsPending: DispatchSetState< boolean >;
};