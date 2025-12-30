// Import
/// Types
import { FilterParams } from './types';

// Functions
export function filter ( { setState, setIsPending, setNeedRequest }: FilterParams ) {   
    // Variables
    let interval: null | NodeJS.Timeout = null;
 
    // Return
    return () => {
        // Set state
        setIsPending( () => true );
        setState( ( state ) => ( { ...state, exclude: [], options: [] } ) );

        // Interval
        interval = setInterval( () => {
            // Set state
            setNeedRequest( () => true );

            // Clear interval
            clearInterval( interval as NodeJS.Timeout );

            // Set is pending
            setIsPending( () => false );

        }, 1000 );
    };
};