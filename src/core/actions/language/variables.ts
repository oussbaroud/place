// Import
/// Types
import { Cookie } from './types';

// Variables
export const cookie: Cookie = {
    name: 'lang',
    options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires: new Date( '9999-12-31' ) },
};