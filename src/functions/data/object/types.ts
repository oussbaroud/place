// Types
export type ObjectMapParams < T, R > = {
    object: T;
    callback: < K extends keyof T > ( value: T[ K ], key: K ) => R;
};
export type ObjectMapReturn < T, R > = {
    [ K in keyof T ]: R;
};

export type ObjectSomeParams < T > = {
    object: T;
    callback: < K extends keyof T >( value: T[ K ], key: K ) => boolean;
};

export type SortObjectStepsParams = {
    object: any;
};