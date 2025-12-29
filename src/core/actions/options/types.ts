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
    category: 'Place';
    types: string [];
    hours?: Record< ( '0' | '1' | '2' | '3' | '4' | '5' | '6' ), string [] >;
    location: string;
    phoneNumbers?: string [];
    activeMonths?: number [];
};

export interface Excursion extends BaseOption {
    category: 'Excursion';
    departures: {
        date: Date;
        location: string;
    } [];
    destination: string;
    phoneNumbers: string [];
};

export interface Meetup extends BaseOption {
    category: 'Meetup';
    dates: Date [];
    location: string;
    phoneNumbers: string [];
};

export interface Event extends BaseOption {
    category: 'Event';
    types: string  [];
    schedule: {
        from: Date;
        to: Date;
    };
    location: string;
    phoneNumbers?: string [];
};

export type Option = Place | Excursion | Meetup | Event;

export type GetOptionsParams = {
    lang: Lang;
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
    option: Option;
} | {
    success: false;
    errors: {
        errors: string [];
    };
};

// Safeguards
export function isPlace ( props: any ): props is Place {
    return props?.category === 'Place';
};

export function isExcursion ( props: any ): props is Excursion {
    return props?.category === 'Excursion';
};

export function isMeetup ( props: any ): props is Meetup {
    return props?.category === 'Meetup';
};

export function isEvent ( props: any ): props is Event {
    return props?.category === 'Event';
};