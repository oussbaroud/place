// Import
/// Types
import { AnyObject } from '@/types';
import { ObjectMapParams, ObjectMapReturn, ObjectSomeParams, SortObjectStepsParams } from './types';

// Functions
/// Object map
export function objectMap < T extends AnyObject, R > ( { object, callback }: ObjectMapParams< T, R > ): ObjectMapReturn< T, R > {
    return Object.fromEntries(
        Object.entries( object ).map( ( [ key, value ] ) => [
            key,
            callback( value as T[ keyof T ], key as keyof T ),
        ] )
    ) as ObjectMapReturn< T, R >;
};

/// Object some
export function objectSome < T extends AnyObject > ( { object, callback }: ObjectSomeParams< T > ) {
    return Object.entries( object ).some( ( [ key, value ] ) => callback( value as T[ keyof T ], key as keyof T ) );
};

/// Sort object
export function sortObjectSteps ( { object }: SortObjectStepsParams ): any {
    return Object.keys( object )
    .sort( ( a, b ) => {
        // Get numbers
        const numA = parseInt( a.replace( 'step', '' ), 10 );
        const numB = parseInt( b.replace( 'step', '' ), 10 );

        // Return
        return numA - numB;
    } )
    .reduce( ( acc: any, key: string ) => {
        acc[ key ] = object[ key ];
        return acc;
    }, {} );
};