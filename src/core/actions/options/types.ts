// Import
/// Types
import { Lang } from '@/core/types';

// Types
interface BaseOption {
    _id: string;
    title: Record< Lang, string >;
    images: string [];
    description: Record< Lang, string >;
    activities: string [];
    address: Record< Lang, string >;
    provinces: string [];
    budget: string [];
    by: Record< Lang, string >;
    createdAt: Date;
};

export interface Place extends BaseOption {
    category: '1';
    types: string [];
    hours?: Record< ( '0' | '1' | '2' | '3' | '4' | '5' | '6' ), string [] >;
    location: string;
    phoneNumbers?: string [];
    activeMonths?: number [];
};

export interface Event extends BaseOption {
    category: '2';
    types: string  [];
    schedule: {
        from: Date;
        to: Date;
    };
    location: string;
    phoneNumbers?: string [];
};

export interface Meetup extends BaseOption {
    category: '3';
    dates: Date [];
    location: string;
    phoneNumbers: string [];
};

export interface Excursion extends BaseOption {
    category: '4';
    departures: {
        date: Date;
        location: string;
    } [];
    destination: string;
    phoneNumbers: string [];
};

export type Option = Place | Excursion | Meetup | Event;

export type FilterOptionsParams = {
    lang: Lang;
    options: Option [];
    filter?: {
        exclude: string [];
        provinces: string [];
        activities: string [];
        budget: string [];
    };
};

export type GetOptionsParams = {
    lang: Lang;
    filter?: {
        exclude: string [];
        provinces: string [];
        activities: string [];
        budget: string [];
    };
};

export type GetOptionsReturn = {
    success: true;
    options: Option [];
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

export type GetOptionParams = {
    lang: Lang;
    id: string;
};

export type GetOptionReturn = {
    success: true;
    option: null | Option;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

// Safeguards
export function isPlace ( props: any ): props is Place {
    return props?.category === '1';
};

export function isEvent ( props: any ): props is Event {
    return props?.category === '2';
};

export function isMeetup ( props: any ): props is Meetup {
    return props?.category === '3';
};

export function isExcursion ( props: any ): props is Excursion {
    return props?.category === '4';
};