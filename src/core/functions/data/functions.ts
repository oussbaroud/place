// Import
/// Types / Safeguards
import { getIsArray, getIsObject, getIsRef, getIsValidPath, getIsSameType, getIsHTMLElement } from '@/core/types';
import { FormatErrorsParams, FormatStateParams, GetByPathParams, GetFormattedStateStringParams, TraverseParams, TraverseStateErrorsParams, TraverseStateOpenedParams } from './types';

/// Funtions
import { isArraysEqual } from '@/core/functions/data/array/functions';
import { objectMap, objectSome } from './object/functions';

// Functions
/// Access
export function getByPath ( { data, path }: GetByPathParams ): any {
    return path.reduce( ( acc, key ) => acc?.[ key ], data );
};

/// Formate state
export function formatState ( { state }: FormatStateParams ): any {
    // If array
    if ( getIsArray( state ) ) {
        // State
        const newState = state.map( ( itemState, itemStateIndex ) => {
            return formatState( { state: itemState } );
        } );

        // Return
        return newState;

    // If object
    } else if ( getIsObject( state ) ) {
        // If object has values and value
        if ( ( 'values' in state && 'value' in state ) || 'value' in state ) {
            // State
            const newState = state.values
                ? [ ...state.values ]
                : state.value || undefined;

            // Return
            return newState;

        // If object has from and to
        } else if ( 'from' in state && 'to' in state ) {
            // State
            const newState = {
                from: state.from || undefined,
                to: state.to || undefined
            };

            // Return
            return newState;

        // If has values
        } else if ( 'values' in state ) {
            // State
            const newState = formatState( { state: state.values } );

            // Return
            return newState;

        // If object has not values and value
        } else {
            // Current
            const current = { ...state };

            // Delete
            if ( 'errors' in state ) {
                delete current.errors;
            };

            // State
            const newState = objectMap( { object: current, callback: ( itemState ) => {
                return formatState( { state: itemState } );
            } } );

            // Return
            return newState;
        };

    // Else
    } else {
        return state;
    };
};

/// Get formatted state string
export function getFormattedStateString ( { state }: GetFormattedStateStringParams ): any {
    return JSON.stringify( formatState( { state } ) );
};

// Formate errors
export function formatErrors ( { errors }: FormatErrorsParams ): any {
    // Response
    const response: any = {};

    // For every error
    for ( const issue of errors?.issues || [] ) {
        // Current
        let current: any = response;

        // Path / Error
        const path = issue.path;
        const error = issue.message;

        // Traverse the path
        for ( let pathIndex = 0; pathIndex < path.length; pathIndex++ ) {
            // Key
            const key = path[ pathIndex ];
            const isLastKey = pathIndex === path.length - 1;


            // If key is number
            if ( typeof key === 'number' ) {
                if ( !( 'values' in current ) ) current.values = [];
                if ( !current.values[ key ] ) current.values[ key ] = {};

                current = current.values[ key ];

            // If key string
            } else {
                if ( !current[ key ] ) current[ key ] = {};

                current = current[ key ];
            };

            // If last key
            if ( isLastKey ) {
                if ( !current.errors ) current.errors = [];

                current.errors.push( error );
            };
        };
    };

    // Return
    return response;
};

/// Traverse
export function traverse< T extends any > ( { value, targets }: TraverseParams< T > ): T {
    // Validate targets
    targets.forEach( ( target ) => {
        const path = target.path;
        const isValidPath = getIsValidPath( { value, path } );

        if ( !isValidPath )
        throw new Error( 'traverse Function Error: Unvalid path at ' + path.join( '/' ) );
    } );

    // If no targets
    if ( targets.length === 0 ) {
        return value;

    // If array
    } else if ( getIsArray( value ) ) {
        // State
        const newState = value.map( ( itemState, itemStateIndex ) => {
            const target = targets.find( ( target ) => target.path.length === 1 && target.path[ 0 ] === itemStateIndex );
            
            if ( target ) {
                return target.newValue;

            } else {
                const newTargets = targets
                    .filter( target => target.path.length > 1 && target.path[ 0 ] === itemStateIndex )
                    .map( target => ( {
                        path: target.path.slice( 1 ),
                        newValue: target.newValue
                    } ) );

                return traverse( { value: itemState, targets: newTargets } );
            };
        } );

        // Return
        return newState as T;

    // If object
    } else if ( getIsObject( value ) ) {
        // State
        const newState = objectMap( { object: value, callback: ( itemState, itemStateKey ) => {
            const target = targets.find( ( target ) => target.path.length === 1 && target.path[ 0 ] === itemStateKey );
            
            if ( target ) {
                return target.newValue;

            } else {
                const newTargets = targets
                    .filter( target => target.path.length > 1 && target.path[ 0 ] === itemStateKey )
                    .map( target => ( {
                        path: target.path.slice( 1 ),
                        newValue: target.newValue
                    } ) );

                return traverse( { value: itemState, targets: newTargets } );
            };
        } } );

        // Return
        return newState;

    // Else
    } else {
        // Return
        return value;  
    };
};

/// Traverse state errors
export function traverseStateErrors ( { state, errors }: TraverseStateErrorsParams ): [ any, boolean ] {
    // If valid values
    if ( getIsSameType( { value1: state, value2: errors } ) || !errors ) {
        // If array
        if ( getIsArray( state ) ) {
            // State
            const response = state.map( ( itemState, itemStateIndex ) => {
                const itemErrors = errors?.[ itemStateIndex ];

                return traverseStateErrors( { state: itemState, errors: itemErrors } );
            } );

            // Change / State
            const hasChange = response.map( ( [ _, hasChange ] ) => hasChange ).some( ( hasChange ) => hasChange );
            const newState = hasChange
                ? response.map( ( [ state ] ) => state )
                : state;

            // Return
            return [ newState, hasChange ];

        // If object
        } else if ( getIsObject( state ) ) {
            // If object has errors and value
            if (
                ( 'errors' in state ) &&
                ( 'value' in state || ( 'from' in state && 'to' in state ) )
            ) {
                // If has change
                const currentErrors = state.errors;
                const newErrors = errors?.errors || [];

                if ( !isArraysEqual( { value1: currentErrors, value2: newErrors } ) ) {
                    // State
                    const newState = {
                        ...state,
                        errors: newErrors
                    };

                    // Return
                    return [ newState, true ];

                // If not
                } else {
                    // Return
                    return [ state, false ];
                };

            // Else
            } else {
                // State
                const response = objectMap( { object: state, callback: ( itemState, itemStateKey ) => {
                    const itemErrors = errors?.[ itemStateKey as keyof typeof errors ];

                    // If key is errors
                    if ( itemStateKey === 'errors' ) {
                        // If has change
                        const currentErrors = itemState;
                        const newErrors = itemErrors || [];
                        
                        if ( !isArraysEqual( { value1: currentErrors, value2: newErrors } ) ) {
                            // State
                            const newState = newErrors;

                            // Return
                            return [ newState, true ];

                        // If not
                        } else {
                            // Return
                            return [ itemState, false ];
                        };

                    // Else
                    } else {
                        return traverseStateErrors( { state: itemState, errors: itemErrors } );
                    };
                } } );

                const hasChange = objectSome( { object: response, callback: ( [ _, hasChange ] ) => hasChange } );
                const newState = hasChange
                    ? objectMap( { object: response, callback: ( [ state ] ) => state } )
                    : state;

                // Return
                return [ newState, hasChange ];
            };

        // Else
        } else {
            // Return
            return [ state, false ];
        };

    // If not valid values
    } else {
        throw new Error( 'setStateErrors Function Error: state and errors mismatch, make sure they have the same type' );
    };
};

/// Traverse state opened
export function traverseStateOpened ( { state, ref, target }: TraverseStateOpenedParams ): [ any, boolean ] {
    // Types
    const isStateArray = getIsArray( state );
    const isStateObject = getIsObject( state );
    const isRefRef = getIsRef( ref );

    // If valid values
    if (
        (
            ( !isStateObject ) ||
            ( isStateObject && !( 'opened' in state ) ) ||
            (
                ( isStateObject && 'opened' in state ) &&
                ( isRefRef && getIsHTMLElement( ref.current ) )
            ) 
        ) &&
        ( getIsSameType( { value1: state, value2: ref } ) || !ref )
    ) {
        // If array
        if ( isStateArray ) {
            // State
            const response = state.map( ( itemState, itemStateIndex ) => {
                const itemRef = ref?.[ itemStateIndex ];

                return traverseStateOpened( { state: itemState, ref: itemRef, target } );
            } );

            const hasChange = response.map( ( [ _, hasChange ] ) => hasChange ).some( ( hasChange ) => hasChange );
            const newState = hasChange
                ? response.map( ( [ state ] ) => state )
                : state;

            // Return
            return [ newState, hasChange ];

        // If object
        } else if ( isStateObject ) {
            // If object has opened
            if ( 'opened' in state ) {
                // If ref element doesn't contain taget and state is opened
                if ( !ref.current.contains( target )
                && state.opened === true ) {
                    // State
                    const newState = {
                        ...state,
                        opened: false
                    };

                    // Return
                    return [ newState, true ];
                
                // If not
                } else {
                    // Return
                    return [ state, false ];
                };

            // If object has not opened
            } else {
                // State
                const response = objectMap( { object: state, callback: ( itemState, itemStateKey ) => {
                    const itemRef = ref?.[ itemStateKey as keyof typeof ref ];

                    return traverseStateOpened( { state: itemState, ref: itemRef, target } );
                } } );

                const hasChange = objectSome( { object: response, callback: ( [ _, hasChange ] ) => hasChange } );
                const newState = hasChange
                    ? objectMap( { object: response, callback: ( [ state ] ) => state } )
                    : state;

                // Return
                return [ newState, hasChange ];
            };

        // Else
        } else {
            // Return
            return [ state, false ];
        };

    // If not valid values
    } else {
        if ( 
            ( isStateObject && 'opened' in state ) &&
            !ref
        ) {
            throw new Error( 'onClickOutside Function Error: ref is undefined, make sure state and ref have the same object keys' );

        } else if ( 
            ( isStateObject && 'opened' in state ) &&
            ( !isRefRef )
        ) {
            throw new Error( 'onClickOutside Function Error: ref is not a useRef hook, make sure it is' );

        } else if ( 
            ( isStateObject && 'opened' in state ) &&
            ( isRefRef && !getIsHTMLElement( ref.current ) )
        ) {
            throw new Error( 'onClickOutside Function Error: ref.current is not a HTMLElement, make sure its not null' );

        } else {
            throw new Error( 'onClickOutside Function Error: state and ref mismatch, make sure they have the same type' ); 
        };
    };
};