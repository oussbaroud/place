// Import
/// Types
import { getIsArray, getIsObject, Path, PathSetState } from '@/types';
import { AddClickEventListenerParams, SetStatePathsParams, OnSubmitParams, OnClickOutsideParams, GetFirstErrorPathParams, GetDirectionParams, GetPathSetStateParams } from './types';

/// Functions
import { formatState, getByPath, traverse, traverseStateOpened } from './data/functions';
import { setStateErrors } from './validations/functions';

// Functions
/// Get direction
export function getDirection ( { lang }: GetDirectionParams ): 'rtl' | 'ltr' {
    if ( lang === 'ar' ) {
        return 'rtl';

    } else {
        return 'ltr';
    };
};

/// On click outside
export function onClickOutside ( { setState, ref, event }: OnClickOutsideParams ) {
    // Target
    const target = event.target as HTMLElement;    

    // Set state
    setState( ( state: any ) => {
        // State / Has change
        const [ newState, hasChange ] = traverseStateOpened( { state, ref: ref.current, target } );

        // Return
        if ( hasChange ) {
            return newState;
            
        } else {
            return state;
        };
    } );
};

/// Add click outside event listener
export function addClickEventListener ( { setState, ref }: AddClickEventListenerParams ) {
    /// Add event
    const handleClick = ( event: MouseEvent ) => onClickOutside( { setState, ref, event } );
    document.addEventListener( 'click', handleClick );

    /// Clean event
    return () => {
        document.removeEventListener( 'click', handleClick );
    };
};

/// Set path state
export function setStatePaths< T extends any > ( { setState, targets }: SetStatePathsParams< T > ) {
    setState( ( state ) => {
        // Targets
        const newTargets = typeof targets === 'function'
            ? targets( state )
            : targets;

        // Return
        const newState = traverse( { value: state, targets: newTargets } );
        return newState;
    } );
};

/// Get set state
export function getPathSetState < TargetState, State extends any > ( { setState, path }: GetPathSetStateParams< State > ): PathSetState< TargetState > {
    return ( updater: ( state: TargetState ) => TargetState ) => {
        setStatePaths( { setState, targets: ( state: State ) => {
            // State
            const value = getByPath( { data: state, path } )
            const newValue = updater( value );

            // Targets
            const targets = [ {
                path,
                newValue
            } ];

            // Return
            return targets;
        } } );
    };
};

/// Get first error path
export function getFirstErrorPath ( { errors }: GetFirstErrorPathParams ): undefined | Path {
    // If array
    // Or object
    const isArray = getIsArray( errors );
    const isObject = getIsObject( errors );

    if ( isArray || isObject ) {
        // Declare
        let key: number | string;
        let nextErrors: any;

        // If array
        if ( isArray ) {
            // Assign
            key = 0
            nextErrors = errors[ key ];

        // If object
        } else {
            // Assign
            key = Object.keys( errors )[ 0 ];
            nextErrors = errors[ key ];
        };

        // Get Path
        const path = getFirstErrorPath( { errors: nextErrors } );

        // If path array
        if ( getIsArray( path ) ) {
            // Add key
            path.unshift( key );

            // Return
            return path;

        // If path undefined
        } else {
            // If key exist
            if ( getIsArray( nextErrors ) || getIsObject( nextErrors ) ) {
                // Return
                return [ key ];

            // If not
            } else {
                // Return
                return undefined;
            };
        };

    // Else
    } else {
        // Return
        return undefined;
    };
};

/// On submit
export async function onSubmit ( { lang, state, setState, setIsPending, action, event }: OnSubmitParams ) {
    // Prevent default
    event?.preventDefault();

    // Set is pending
    setIsPending( true );

    // Request
    const data = formatState( { state } );
    const response = await action( { lang: lang, data } );

    // Set state
    const errors = response?.errors;
    setStateErrors( { setState, errors } );

    // Get path
    const path = getFirstErrorPath( { errors } );

    // Set is pending
    setIsPending( false );

    // Return
    return { path };
};