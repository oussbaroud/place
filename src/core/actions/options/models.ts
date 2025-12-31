'use server'

// Import
/// Modules
import mongoose from 'mongoose';

// Models
const option = new mongoose.Schema( {}, { strict: false } );
export const Option = mongoose.models?.Option || mongoose.model( 'Option', option );