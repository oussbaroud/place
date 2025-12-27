'use server'

// Import
/// Dictionary
import { getDictionary } from '@/core/config/database/dictionary';

/// Types
import { GetOptionParams, GetOptionReturn, GetOptionsParams, GetOptionsReturn, isExcursion, isEvent, isMeetup, isPlace } from './types';

/// Database
import { connectDatabase } from '@/core/config/database/actions';
import { Option } from './models';
import { getCache, storeCache } from '@/core/config/cache/actions';

// Functions
export async function getOptions ( { lang }: GetOptionsParams ): Promise< GetOptionsReturn > {
    // Dictionary
    const dictionary = getDictionary( { lang } );

    // Get cache
    const cachKey = '/explore';
    const cachResponse = await getCache( { lang, key: cachKey } );

    // If got cach
    if ( cachResponse.success )
    return { success: true, options: cachResponse.data };

    // Connect to database
    const databaseResponse = await connectDatabase( { lang } );

    // If connection failed
    if ( !databaseResponse.success )
    return databaseResponse;

    // Try
    try {
        // Get database
        const options = ( await Option.find().lean() )
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
        return { success: true, options };

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
    const cachResponse = await getCache( { lang, key: cachKey } );

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