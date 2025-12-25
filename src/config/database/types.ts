// Import
/// Types
import { Lang } from '@/types';

// Types
export type ConnectDatabaseParams = {
    lang: Lang;
};

export type ConnectDatabaseReturn = {
    success: true;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};