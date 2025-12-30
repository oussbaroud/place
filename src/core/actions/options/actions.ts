'use server'

// Import
/// Dictionary
import { getGlobalDictionary } from '@/core/dictionary';
import { getDictionary } from '@/core/config/database/dictionary';

/// Types
import { Option as OptionType, GetOptionParams, GetOptionReturn, GetOptionsParams, GetOptionsReturn, isExcursion, isEvent, isMeetup, isPlace, FilterOptionsParams } from './types';

/// Functions
import { shuffleArray } from '@/core/functions/data/array/functions';

/// Database
import { connectDatabase } from '@/core/config/database/actions';
import { Option } from './models';
import { getCache, storeCache } from '@/core/config/cache/actions';

// Functions
function filterOptions ( params: FilterOptionsParams ) {
    // Variables
    const globalDictionary = getGlobalDictionary( { lang: params.lang } );
    const result: OptionType[] = [];

    // For
    for ( const option of params.options ) {
        if (
            (
                !params.filter
            ) ||
            (
                (
                    !params.filter.exclude.includes( option._id )
                ) &&
                (
                    params.filter.provinces.length === 0 ||
                    params.filter.provinces.some( ( province ) =>
                        option.provinces.includes( globalDictionary.inputOptions.provinces.find( ( provinceObject ) => provinceObject.value === province )?.id as string )
                    )
                ) && (
                    params.filter.activities.length === 0 ||
                    params.filter.activities.some( ( activity ) =>
                        option.activities.includes( globalDictionary.inputOptions.activities.find( ( activityObject ) => activityObject.value === activity )?.id as string )
                    )
                ) && (
                    params.filter.budget.length === 0 ||
                    params.filter.budget.some( ( budget ) =>
                        option.budget.includes( globalDictionary.inputOptions.budget.find( ( budgetObject ) => budgetObject.value === budget )?.id as string )
                    )
                )            
            )
        )
        result.push( option );

        if ( result.length === 20 )
        break;
    };

    // Return
    return result;
};

export async function getOptions ( { lang, filter }: GetOptionsParams ): Promise< GetOptionsReturn > {
    // Dictionary
    const dictionary = getDictionary( { lang } );

    // Get cache
    const cachKey = '/explore';
    const cachResponse = await getCache< OptionType [] >( { lang, key: cachKey } );

    // If got cach
    if ( cachResponse.success )
    return { success: true, options: filterOptions( { lang, options: cachResponse.data, filter } ) };

    // Connect to database
    const databaseResponse = await connectDatabase( { lang } );

    // If connection failed
    if ( !databaseResponse.success )
    return databaseResponse;

    // Try
    try {
        // Get database
        const options = shuffleArray( { array: await Option.find().lean() } )
        .map( ( option ) => {
            option._id = String( option._id );
            
            if ( isExcursion( option ) )
            option.departures = option.departures.filter( ( departure ) =>
                departure.date.getTime() > ( ( new Date() ).getTime() + 21600000 )
            );

            if ( isMeetup( option ) )
            option.dates = option.dates.filter( ( date ) =>
                date.getTime() > ( ( new Date() ).getTime() + 21600000 )
            );            

            return option;
        } )
        .filter( ( option ) => (
            (
                isPlace( option ) &&
                ( !option.activeMonths || option.activeMonths.includes( ( new Date() ).getMonth() ) )
            ) ||
            (
                isExcursion( option ) &&
                option.departures.some( ( departure ) =>
                    departure.date.getTime() > ( ( new Date() ).getTime() + 21600000 )
                )
            ) ||
            (
                isMeetup( option ) &&
                option.dates.some( ( date ) =>
                    date.getTime() > ( ( new Date() ).getTime() + 21600000 )
                )
            ) ||
            (
                isEvent( option ) &&
                option.schedule.to.getTime() > ( ( new Date() ).getTime() + 21600000 )
            )
        ) );

        // Create cache
        const expirationTime = 3600;
        await storeCache( { lang, key: cachKey, data: options, expirationTime } );
        
        // Return
        return { success: true, options: filterOptions( { lang, options, filter } ) };

    // Catch
    } catch ( error ) {
        // Console
        console.error( 'MongoDB Connection Error: ', error );

        // Return
        return {
            success: false,
            errors: {
                errors: [ dictionary.errors.connection ]
            }
        };
    };
};

export async function getOption ( { lang, id }: GetOptionParams ): Promise< GetOptionReturn > {
    // Dictionary
    const dictionary = getDictionary( { lang } );

    // Get cache
    const cachKey = '/explore/' + id;
    const cachResponse = await getCache< OptionType >( { lang, key: cachKey } );

    // If got cach
    if ( cachResponse.success )
    return { success: true, option: cachResponse.data };

    // Connect to database
    const databaseResponse = await connectDatabase( { lang } );

    // If connection failed
    if ( !databaseResponse.success )
    return databaseResponse;

    // Try
    try {
        // Get database
        const option = await Option.findById( id ).lean();

        // Stringify
        if( option )
        option._id = String( option._id )

        // Create cache
        const expirationTime = 3600;
        await storeCache( { lang, key: cachKey, data: option, expirationTime } );

        // Return
        return { success: true, option };

    // Catch
    } catch ( error ) {
        // Console
        console.error( 'MongoDB Connection Error: ', error );

        // Return
        return {
            success: false,
            errors: {
                errors: [ dictionary.errors.connection ]
            }
        };
    };
};