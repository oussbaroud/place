'use server'

// Import
/// Modules
import { Client as MinIO } from 'minio';

// Instances
const minio = new MinIO( {
  endPoint: 's3.kharja.app',
  port: 443,
  useSSL: true,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
} );

// Actions
export async function getSrcs (): Promise< string [] > {
  return new Promise( ( resolve, reject ) => {
    const names: string [] = [];
    const bucket = 'landing';
    const stream = minio.listObjectsV2( bucket, '', true );

    stream.on( 'data', ( item ) => item.name && names.push( item.name ) );
    stream.on( 'end', () => resolve( names.map( ( name ) => `https://s3.kharja.app/${ bucket }/${ name }` ) ) );
    stream.on( 'error', ( error ) => {
      console.error( 'MinIO Get Error: ', error )
      reject( [] )
    } );
  } );
};