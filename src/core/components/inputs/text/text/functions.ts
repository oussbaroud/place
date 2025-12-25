// Import
/// Types / Safeguards
import { isTextInputFieldCOProps, isTextInputFieldProps, isTextInputAreaProps, isTextInputFieldSOProps, isTextInputAreaCOProps, GetValueParams, GetClickNewOpenedParams, OnClickParams, GetPatternValueParams, GetEditValueParams, GetChangeNewValueParams, GetFilterOptionsParams, GetChangeNewOptionsParams, GetChangeNewOpenedParams, GetChangeNewValuesParams, OnChangeParams } from '@/core/components/inputs/text/text/types';

/// Patterns
import { validLineBreakPattern } from '@/core/patterns';

/// Functions
import { getInputErrors } from '@/core/functions/validations/functions';

// Functions
/// Get input value
export function getValue ( { props }: GetValueParams ) {
    // Value
    const value: string = props.state.value;

    // If text field check options
    if ( isTextInputFieldCOProps( props ) ) {    
        // Values    
        const values: string [] = props.state.values;
        const valuesLength: number = values.length;

        // If greater than 1
        if ( valuesLength > 1 ) {
            return 'Values(' + valuesLength + ')  ' + value;

        // If equals 1
        } else if ( valuesLength === 1 ) {
            return  values[ 0 ] + '  ' + value;

        // If equals 0
        } else {
            return value;
        };
    
    } else {
        return value;
    };
};

/// On click functions
//// Get new opened
function getClickNewOpened ( { opened, options }: GetClickNewOpenedParams ) {
    return opened || options.length > 0;
};

//// On click
export function onClick ( { props }: OnClickParams ) {
    // If text field select options
    if ( isTextInputFieldSOProps( props ) ) {
        // Set State
        props.setState( ( state ) => {
            // State
            const value = state.value;
            const options = state.options;
            
            const opened = state.opened;
            const newOpened = getClickNewOpened( { opened, options } );
            const newErrors = getInputErrors( { schema: props.schema, value } ) || state.errors;
            
            // Return
            return {
                opened: newOpened,
                value: value,
                options: options,
                errors: newErrors
            };
        } );

    // If text field or area check options
    } else if ( isTextInputFieldCOProps( props )
    || isTextInputAreaCOProps( props ) ) {        
        props.setState( ( state ) => {
            // State
            const value = state.value;
            const options = state.options;
            const values = state.values;

            const opened = state.opened;
            const newOpened = getClickNewOpened( { opened, options } );
            const newErrors = getInputErrors( { schema: props.schema, value } ) || state.errors;  
            
            // Return
            return {
                opened: newOpened,
                value: value,
                values: values,
                options: options,
                errors: newErrors
            };
        } );
    };
};

/// On Change functions
//// Get pattern value
function getPatternValue ( { props, value, newValue }: GetPatternValueParams ) {
    // Return
    return ( !props.pattern || props.pattern.test( newValue ) ) ? newValue : value;
};

//// Get edit value
function getEditValue ( { props, newValue }: GetEditValueParams ) {
    // Return
    return props.edit ? props.edit( { value: newValue } ) : newValue;
};

//// Get new input value
function getChangeNewValue ( { props, value, targetValue }: GetChangeNewValueParams ): string {
    // New value
    let newValue: string = targetValue;

    // If text field check options
    // And separation not declared
    if ( isTextInputFieldCOProps( props ) && !props.separation ) {
        // Value array / Values length
        const valueArray: string [] = newValue.split( '  ' );
        const valuesLength: number = props.state.values.length;
        
        // Value
        newValue = valuesLength === 0 ? valueArray[ 0 ] : valueArray[ 1 ] || '';
    };

    // Handle pattern/edit
    newValue = getPatternValue( { props, value, newValue } );
    newValue = getEditValue( { props, newValue } );

    // Return
    return newValue;
};

//// Get filter options
function getFilterOptions ( { options, value }: GetFilterOptionsParams ) {
    // Options
    const newOptions: string [] = options.filter( ( option ) => option.toLowerCase().includes( value.toLowerCase() ) ).sort( ( a, b ) => a.toLowerCase().indexOf( value.toLowerCase() ) - b.toLowerCase().indexOf( value.toLowerCase() ) ) || [];
    return newOptions;
};
//// Get new options
function getChangeNewOptions ( { props, newValue }: GetChangeNewOptionsParams ): string [] {
    // If text field select/check options
    if ( isTextInputFieldSOProps( props )
    || isTextInputFieldCOProps( props ) ) {
        // Options
        const options = props.options;
        const newOptions: string [] = getFilterOptions( { options, value: newValue } );
        return newOptions;
        
    // If text area check options
    } else if ( isTextInputAreaCOProps( props ) ) {
        // Data
        const valueArray: string [] = newValue.split( '\n' );
        const valueArrayLength: number = valueArray.length;
        newValue =  valueArray[ valueArrayLength - 1 ];

        // Options
        const options = props.options;
        const newOptions: string [] = getFilterOptions( { options, value: newValue } );
        return newOptions;

    // If not text field select/check or area check options
    } else {
        // Options
        return [];
    };
};

//// Get new opened
function getChangeNewOpened ( { props, newOptions }: GetChangeNewOpenedParams ): boolean {
    // If conditions met
    if (
        ( isTextInputFieldCOProps( props ) || isTextInputAreaCOProps( props ) ) &&
        ( newOptions.length === 0 )
    ) {
        return false;

    // If conditions were not met
    } else {
        return true;
    };
};

//// Get new values
function getChangeNewValues ( { props, newValue, values }: GetChangeNewValuesParams ): string [] {
    // If text field check options
    if ( isTextInputFieldCOProps( props ) ) {
        // If separation declared
        if ( props.separation ) {
            // Values
            const newValues: string [] = newValue.split( props.separation ).filter( ( value ) => value );
            return newValues;

        // If separation not declared
        } else {
            // Values
            const newValues: string [] = values;
            return newValues;
        };
    
    // If text area check options
    } else if ( isTextInputAreaCOProps( props ) ) {
        // Values
        const newValues: string [] = newValue.split( validLineBreakPattern ).filter( ( value ) => value );
        return newValues;

    // If not text field/area check options
    } else {
        // Values
        return [];
    };
};

//// On change
export function onChange ( { props, event }: OnChangeParams ) {
    // Target value
    const targetValue = event.currentTarget.value;

    // Set state
    if ( isTextInputFieldProps( props )
    || isTextInputAreaProps( props ) ) {
        props.setState( ( state ) => {
            // State
            const newValue: string = getChangeNewValue( { props, value: state.value, targetValue } );
            const newErrors: string [] = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;

            // Return
            return {
                value: newValue,
                errors: newErrors
            };
        } ); 

    } else if ( isTextInputFieldSOProps( props ) ) {        
        props.setState( ( state ) => {
            // State
            const newValue: string = getChangeNewValue( { props, value: state.value, targetValue } );

            const newOptions: string [] = getChangeNewOptions( { props, newValue } );
            const newOpened: boolean = getChangeNewOpened( { props, newOptions } );
            const newErrors: string [] = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;
            
            // Return
            return {
                opened: newOpened,
                value: newValue,
                options: newOptions,
                errors: newErrors
            };
        } );

    } else {
        props.setState( ( state ) => {
            // State
            const newValue: string = getChangeNewValue( { props, value: state.value, targetValue } );

            const newOptions: string [] = getChangeNewOptions( { props, newValue } );
            const newOpened: boolean = getChangeNewOpened( { props, newOptions } );

            const values = state.values;
            const newValues: string [] = getChangeNewValues( { props, newValue, values } );            
            const newErrors: string [] = getInputErrors( { schema: props.schema, value: newValue } ) || state.errors;
            
            // Return
            return {
                opened: newOpened,
                value: newValue,
                values: newValues,
                options: newOptions,
                errors: newErrors
            };
        } );
    };
};