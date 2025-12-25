// Import
/// Types
import { ChangeEvent, RefObject } from 'react';
import { PhoneNumberInputProps } from '../../types';

// Types
/// Props
type Input = RefObject< null | HTMLInputElement >;

export interface CountryCodesOptionsProps extends PhoneNumberInputProps {
    input: Input;
};

/// Functions
export type GetOptionStyleParams = {
    props: CountryCodesOptionsProps;
    countryCode: number;
};

export type OnClickParams = {
    props: CountryCodesOptionsProps;
    countryCode: number;
};

export type GetOptionsParams = {
    props: CountryCodesOptionsProps;
    value: string;
};

export type OnChangeParams = {
    props: CountryCodesOptionsProps;
    event: ChangeEvent< HTMLInputElement >;
};