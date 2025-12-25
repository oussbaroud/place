'use server'
import 'server-only';

// Import
/// Dictionary
import { getDictionary } from './dictionary';

/// Types
import { RedisClientType } from '@redis/client';
import { ConnectCacheParams, ConnectCacheReturn, DeleteCacheParams, DeleteCacheReturn, GetCacheParams, GetCacheReturn, StoreCacheParams, StoreCacheReturn } from './types';

/// Modules
import { createClient } from '@redis/client';

// Variables
let client: RedisClientType;

// Functions
export async function connectCache ( { lang }: ConnectCacheParams ): Promise< ConnectCacheReturn > {
  // Dictionary
  const dictionary = getDictionary( { lang } );

  // If connected
  if ( client?.isReady )
  return { success: true, client };

  // If disconnected
  /// Try
  try {
    client = createClient( {
      socket: {
        host: process.env.REDIS_HOST, 
        port: Number( process.env.REDIS_PORT )
      }
    } );

    await client.connect();
    return { success: true, client };
  
  /// Catch
  } catch ( error ) {
    console.error( 'Redis Connection Error: ', error );
    return {
      success: false,
      errors: {
          errors: [ dictionary.errors.connection ]
      }
    };
  };
};

export async function storeCache ( { lang, key, data, expirationTime }: StoreCacheParams ): Promise< StoreCacheReturn > {
  // Dictionary
  const dictionary = getDictionary( { lang } );

  // Connect
  const cacheResponse = await connectCache( { lang } );

  // If connection failed
  if ( !cacheResponse.success )
  return cacheResponse;

  // Try
  try {
    await cacheResponse.client.set( key, JSON.stringify( data ), { EX: expirationTime } );
    return { success: true }

  // Catch
  } catch ( error ) {
    console.error( 'Redis Set Error: ', error );
    return {
      success: false,
      errors: {
          errors: [ dictionary.errors.connection ]
      }
    };
  };
};

export async function getCache ( { lang, key }: GetCacheParams ): Promise< GetCacheReturn > {
  // Dictionary
  const dictionary = getDictionary( { lang } );

  // Connect
  const cacheResponse = await connectCache( { lang } );

  // If connection failed
  if ( !cacheResponse.success )
  return cacheResponse;

  // Try
  try {
    let data: any = await cacheResponse.client.get( key );
    data = JSON.parse( data );

    return { success: true, data: data };

  // Catch
  } catch ( error ) {
    console.error( 'Redis Get Error: ', error );
    return {
      success: false,
      errors: {
          errors: [ dictionary.errors.connection ]
      }
    };
  };
};

export async function deleteCache ( { lang, key }: DeleteCacheParams ): Promise< DeleteCacheReturn > {
  // Dictionary
  const dictionary = getDictionary( { lang } );

  // Connect
  const cacheResponse = await connectCache( { lang } );

  // If connection failed
  if ( !cacheResponse.success )
  return cacheResponse;

  // Try
  try {
    const result = await cacheResponse.client.del( key );
    return { success: true };

  // Catch
  } catch ( error ) {
    console.error( 'Redis Delete Error: ', error );
    return {
      success: false,
      errors: {
          errors: [ dictionary.errors.connection ]
      }
    };
  };
};