// Import
/// Types
import { getGlobalDictionary } from '@/core/dictionary';
import { FilterParams } from './types';

/// Functions
import { shuffleArray } from '@/core/functions/data/array/functions';


// Functions
export function filter ( { lang, data, setState, setIsPending }: FilterParams ) {   
    // Variables
    let interval: null | NodeJS.Timeout = null;
    const globalDictionary = getGlobalDictionary( { lang } );
 
    // Return
    return () => {
        // Set is pending
        setIsPending( () => true );
        setState( ( state ) => ( { ...state, options: [] } ) );

        // Interval
        interval = setInterval( () => {
            // Set state
            setState( ( state ) => {
                // Options
                const newOptions = shuffleArray( { array: data.current.options } )
                .filter( ( option ) =>
                    (
                        state.filter.provinces.values.length === 0 ||
                        state.filter.provinces.values.some( ( province ) =>
                            option.provinces.includes( globalDictionary.inputOptions.provinces.find( ( provinceObject ) => provinceObject.value === province )?.id )
                        )
                    ) && (
                        state.filter.activities.values.length === 0 ||
                        state.filter.activities.values.some( ( activity ) =>
                            option.activities.includes( globalDictionary.inputOptions.activities.find( ( activityObject ) => activityObject.value === activity )?.id )
                        )
                    ) && (
                        state.filter.budget.values.length === 0 ||
                        state.filter.budget.values.some( ( budget ) =>
                            option.budget === globalDictionary.inputOptions.budget.find( ( budgetObject ) => budgetObject.value === budget )?.id
                        )
                    )
                );

                // Return
                return {
                    ...state,
                    options: newOptions
                };
            } );

            // Clear interval
            clearInterval( interval as NodeJS.Timeout );
            interval = null;

            // Set is pending
            setIsPending( () => false );

        }, 1000 );
    };
};