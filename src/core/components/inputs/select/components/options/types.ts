// Import
/// Types
import { RefObject } from 'react';
import { ZodEnum } from 'zod';
import { SelectInputSetState, SelectInputState } from '../../types';

// Types
/// Props
export type SelectInputOptionsState = SelectInputState;
export type SelectInputOptionsSetState = SelectInputSetState;
export type Input = RefObject< null | HTMLInputElement >;

export type SelectInputOptionsProps = {
    options: string [];
    default?: string;
    schema?: ZodEnum< Readonly< Record< string, string > > >;
    state: SelectInputOptionsState
    setState: SelectInputOptionsSetState;
    input: Input;
};

/// Functions
export type OnClickParams = {
    props: SelectInputOptionsProps;
    value: string;
};

export type GetOptionStyleParams = {
    props: SelectInputOptionsProps;
    value: string;
};