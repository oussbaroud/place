// Import
/// Types
import { GetPatternParams } from './types';

// Languages
export const getValidLangPattern = ( { lang }: GetPatternParams ): RegExp => {
    switch ( lang ) {
        case 'fr':
            return /^(?!['\(\):;,!?.\s])[a-zA-ZàÀâÂäÄçÇéÉèÈêÊëËîÎïÏôÔöÖùÙûÛüÜÿŸœŒ'\(\):;,!?.0-9\s]+$/g;
    
        case 'ar':
            return /^(?![\(\):\u061B\u060C!\u061F.\s])[\u0621-\u064A\u064B-\u0652\(\):\u061B\u060C!\u061F.\u0660-\u06690-9\s]+$/g;

        default:
            throw new Error( 'getValidLangPattern Function Error: Invalid language' );
    };
};

export const getValidNamePattern = ( { lang }: GetPatternParams ): RegExp => {
    switch ( lang ) {
        case 'fr':
            return /^(?!['\s])[a-zA-ZÀ-ÖØ-öø-ÿŒœ'0-9\s]+$/g;
    
        case 'ar':
            return /^(?![\(\):\u061B\u060C!\u061F.\s])[\u0621-\u064A\u064B-\u0652\u0660-\u06690-9\s]+$/g;

        default:
            throw new Error( 'getValidLangPattern Function Error: Invalid language' );
    };
};

// Date
export const validDatePattern: RegExp = /(([0-9]{1,2})(\/)([0-9]{1,2})(\/)([0-9]{4}))|((([0-9]{1,2})(\/)([0-9]{1,2})(\/)([0-9]{4}))(\s\-\s)(([0-9]{1,2})(\/)([0-9]{1,2})(\/)([0-9]{4})))/;
export const validDateStringPattern: RegExp = /([\u0600-\u06FFa-zA-Z]{2,8}\.)\s([0-9]{1,2})\s([\u0600-\u06FFa-zA-Z]{3,9})\s([0-9]{4})/;

// Text
export const validLineBreakPattern: RegExp =  /[\n\r]/gm

// Schema
export const validObjectIdPattern: RegExp = /^[0-9a-fA-F]{24}$/
