// Types
export type SectionProps = {
    type: 'row';
    label: string;
    text?: string;
    isPending: boolean;
} | {
    type: 'row';
    label: string;
    values?: string [];
    isPending: boolean;
} | {
    type: 'row';
    label: string;
    location?: string;
    isPending: boolean;
} | {
    type: 'column';
    values?: {
        label: string;
        value?: string | string [];
    } [];
    location?: string;
    isPending: boolean;
};