// Import
/// Modules
import mongoose from 'mongoose';

// Models
const option = new mongoose.Schema( {
    title: {
        ar: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        },
        fr: {
            type: String,
            required: true
        },
    },
    images: {
        type: [ String ],
        required: true
    },
    description: {
        ar: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        },
        fr: {
            type: String,
            required: true
        },
    },
    activities: {
        type: [ String ],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    provinces: {
        type: [ String ],
        required: true 
    },
    budget: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    hours: {
        type: Map,
        of: String,
        enum: [ '0', '1', '2', '3', '4', '5', '6' ],
        required: false,
    },
    departures: {
        type: [ {
            date: {
                type: Date,
                required: true
            },
            location: {
                type: String,
                required: true
            },
        } ]
    },
    event: {
        dates: {
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
                required: true
            }
        },
        hours: {
            type: String,
            required: true
        },        
    },
    location: {
        type: String,
        required: true
    },
    phoneNumbers: {
        type: [ String ],
        required: true,
        validate: {
            validator: function( phoneNumbers: string [] ) {
                return phoneNumbers.length > 0;
            },
            message: 'There must be at least one phone number.'
        }
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
} );
export const Option = mongoose.models?.Option || mongoose.model( 'Option', option );