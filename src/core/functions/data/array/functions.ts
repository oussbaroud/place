// Import
// Types / Safeguards
import { IsArraysEqualParams, ShuffleArrayParams } from './types';

// Functions
//// Is arrays equals
export function isArraysEqual ( { value1, value2 }: IsArraysEqualParams ) {
    // Arrays
    const array1 = [ ...value1 ].sort();
    const array2 = [ ...value2 ].sort();

    // Return
    return (
        array1.every( ( value, index ) => value === array2[ index ] ) &&
        array2.every( ( value, index ) => value === array1[ index ] )
    );
};

export function shuffleArray ( { array }: ShuffleArrayParams ) {
    // Copy
    const newArray = [ ...array ];

    // Shuffle
    for ( let index = newArray.length - 1; index > 0; index-- ) {
        const random = Math.floor( Math.random() * ( index + 1 ) );
        [ newArray[ index ], newArray[ random ] ] = [ newArray[ random ], newArray[ index ] ];
    };
    
    // Return
    return newArray;
};