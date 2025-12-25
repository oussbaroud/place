// Import
/// Types
import { ChangeEvent, MouseEvent } from 'react';
import { TextInputOptionsProps } from '../../types';

// Types
export type OptionProps = {
    option: string;
    index: number;
};

/// Functions
export type GetNewOpenedParams = {
    props: TextInputOptionsProps;
    value: string;
};

export type GetNewValuesParams = {
    props: TextInputOptionsProps;
    targetValue: string;
    targetChecked: boolean;
    value: string;
    values: string [];
};

export type GetNewValueParams = {
    props: TextInputOptionsProps;
    targetValue: string;
    targetChecked: boolean;
    value: string;
    values: string [];
};

export type OnChangeParams = {
    props: TextInputOptionsProps;
    event: MouseEvent< HTMLInputElement > | ChangeEvent< HTMLInputElement >;
};