// Import
/// Types
import { Lang } from '@/types';

// Types
export type Cookie = {
    name: string;
    options: {
        httpOnly: boolean;
        secure: boolean;
        sameSite: 'lax';
        path: string;
        expires: Date;
    };
};

export type UpdateLangParams = {
    lang: Lang;
};

export type GetSecondaryLangParams = {
    lang: Lang;
};

