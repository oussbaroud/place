'use server'

// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Types
import { ConnectDatabaseParams, ConnectDatabaseReturn } from './types';

/// Modules
import mongoose from 'mongoose';

// Functions
export async function connectDatabase ( { lang }: ConnectDatabaseParams ): Promise< ConnectDatabaseReturn > {
    // Dictionary
    const dictionary = getDictionary( { lang } );
    
    // If connected
    if ( mongoose.connection?.readyState === 1 )
    return { success: true };

    // If disconnected
    /// Try
    try {
        await mongoose.connect( process.env.MONGODB_URL as string );
        return { success: true };

    /// Catch
    } catch ( error ) {
        console.error( 'MongoDB Connection Error: ', error );
        return {
            success: false,
            errors: {
                errors: [ dictionary.errors.connection ]
            }
        };
    };
};