// Import
/// Types
import { ZodType } from 'zod';
import { DispatchSetState, Errors, GetSchemaParams, Lang, Path, ZodSafeParseReturn } from '@/types';

// Types
export type BubbleErrorsPathParams = {
    errors: Errors;
    paths: Path [];
};

export type ExtendErrorsPathParams = {
    errors: Errors;
    extension: Path;
};

export type IsLanguageMatchParams< T > = {
    value1: T;
    value2: T;
};

export type GetInputErrorsParams< T > = {
    schema: T;
    value: any;
};
export type GetInputErrorsReturn< T > = T extends undefined ? undefined : string [];

export type GetParseErrorsParams = {
    result: ZodSafeParseReturn;
};

export type GetStateErrorsParams< T > = {
    schema: ZodType< T >;
    state: any;
};
export type GetStateErrorsReturn< T > = T extends ( infer U ) []
    ? U extends object
        ? ( GetStateErrorsReturn< U > & { errors?: string [] } ) []
        : T
    : T extends object
        ? {
            [ K in keyof T ]?: GetStateErrorsReturn< T[ K ] >;
        } & { errors?: string [] }
        : T;

export type SetStateErrorsParams = {
    setState: DispatchSetState< any >;
    errors: any;
};

export type ValidateParams = {
    lang: Lang;
    state: any;
    setState: DispatchSetState< any >;
    getSchema: ( params: GetSchemaParams ) => ZodType;
};

export type HasErrorsBeforePathParams = {
    value: any;
    path: Path;
};

export type IsErrorsHiddenParams = {
    state: any;
    path: Path;
};