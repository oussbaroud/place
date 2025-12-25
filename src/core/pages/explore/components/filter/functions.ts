// Import
/// Types
import { translate } from '@/core/dictionary';
import { FilterParams } from './types';

/// Functions
import { shuffleArray } from '@/core/functions/data/array/functions';


// Functions
export function filter ( { lang, data, setState, setIsPending }: FilterParams ) {   
    // Variables
    let interval: null | NodeJS.Timeout = null;
 
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
                            option.provinces.includes( translate( {
                                lang: {
                                    user: 'en',
                                    input: lang
                                },
                                key: 'provinces',
                                value: province
                            } ) )
                        )
                    ) && (
                        state.filter.activities.values.length === 0 ||
                        state.filter.activities.values.some( ( activity ) =>
                            option.activities.includes( translate( {
                                lang: {
                                    user: 'en',
                                    input: lang
                                },
                                key: 'activities',
                                value: activity
                            } ) )
                        )
                    ) && (
                        state.filter.budget.value === '' ||
                        option.budget === translate( {
                            lang: {
                                user: 'en',
                                input: lang
                            },
                            key: 'budget',
                            value: state.filter.budget.value
                        } )
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