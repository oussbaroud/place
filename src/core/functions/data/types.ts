// Import
/// Types
import { Path } from '@/core/types';
import { ZodError } from 'zod';

// Types
export type GetByPathParams = {
    data: any;
    path: Path;
};

export type FormatStateParams = {
    state: any;
};

export type GetFormattedStateStringParams = {
    state: any;
};

export type FormatErrorsParams = {
    errors: undefined | ZodError;
};

export type TraverseTargets = {
    path: Path;
    newValue: any;
} [];
export type TraverseParams < T > = {
    value: T;
    targets: TraverseTargets;
};

export type TraverseStateErrorsParams = {
    state: any;
    errors: any;
};

export type TraverseStateOpenedParams = {
    state: any;
    ref: any;
    target: null | HTMLElement;
};