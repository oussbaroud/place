// Import
/// Types
import { Lang } from '@/core/types';
import { RedisClientType } from '@redis/client';

// Types
export type ConnectCacheParams = {
    lang: Lang;
};

export type ConnectCacheReturn = {
    success: true;
    client: RedisClientType;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

export type StoreCacheParams = {
    lang: Lang;
    key: string;
    expirationTime: number;
    data: any;
};
export type StoreCacheReturn = {
    success: true;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

export type GetCacheParams = {
    lang: Lang;
    key: string;
};
export type GetCacheReturn< T > = {
    success: true;
    data: T;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

export type DeleteCacheParams = {
    lang: Lang;
    key: string;
};
export type DeleteCacheReturn = StoreCacheReturn;