// Import
/// Types
import { CSSProperties } from 'react';
import { GetInputTextColorStyleParams } from "./types";

// Functions
export const getInputTextColorStyle = ( { value }: GetInputTextColorStyleParams ) => ( {
    '--input-text-color': !value ? '#777' : '#000'
} as CSSProperties );