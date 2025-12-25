// Imports
/// Dictionary
import { getPhoneNumberDictionary } from '../../dictionary';

/// Types / Safeguards
import { CountryCodesOptionsProps } from './types';

/// Functions
import { useId } from 'react';
import { getOptionStyle, onClick, onChange } from './functions';

/// Styles
import styles from '@/core/components/inputs/options.module.css';
import inputsStyles from '@/core/components/inputs/inputs.module.css';

// Component
export default function CountryCodesOptions( props: CountryCodesOptionsProps ) {
    // Use id
    const optionsId = useId();

    // Dictionary
    const dictionary = getPhoneNumberDictionary( props );

    // Return
    if ( props.state.opened ) {
        return (
            <div className={ styles.container }>
                <input type={ 'text' } className={ `${ styles.search } ${ inputsStyles.textFieldInput }` } placeholder={ dictionary.input.searchPlaceholder } onChange={ ( event ) => onChange( { props, event } ) }/>
                <div className={ styles.options }>
                    { props.state.options.map( ( country, index ) => {
                        return (
                            <label key={ index } htmlFor={ optionsId + index } className={ getOptionStyle( { props, countryCode: country.code } ) }>
                                <span>{ country.name }</span>  
                                <input type={ 'button' } id={ optionsId + index } value={ country.code } onClick={ () => onClick( { props, countryCode: country.code } ) }/>
                            </label>
                        )
                    } ) }
                </div>
            </div>
        )

    } else {
        return <></>
    };
};