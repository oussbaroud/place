'use client'

// Import
/// Dictionary
import { getFilterDictionary } from './dictionary';
import { getDictionary } from '@/core/components/inputs/button/submit/dictionary';

/// Functions
import { getPathSetState } from '@/core/functions/functions';
import { useContext } from '../../functions';
import { filter } from './functions';

/// Styles
import styles from './filter.module.css';

/// Components
import TextInput from '@/core/components/inputs/text/text/input';
import SelectInput from '@/core/components/inputs/select/input';
import CustomButton from '@/core/components/inputs/button/custom/button';

// Component
export default function Filter () {    
    // Use context
    const context = useContext();

    const [ state, setState ] = context.state;
    const [ isPending, setIsPending ] = context.isPending;

    const data = context.data;
    const ref = context.ref;

    // Dictionary
    const lang = state.lang;
    const dictionary = getFilterDictionary( { lang } );

    // Return
    return (
        <div className={ styles.wrapper }>
            <TextInput
                ref={ ref.current.filter.provinces }
                lang={ {
                    user: lang,
                    input: lang
                } }
                type={ 'field-co' }
                label={ dictionary.provinces.input.label }
                placeholder={ dictionary.provinces.input.placeholder }
                options={ [ ...dictionary.provinces.input.options ] }
                default={ dictionary.provinces.input.default }
                state={ state.filter.provinces }
                setState={ getPathSetState( { setState, path: [ 'filter', 'provinces' ] } ) }
            />
            <TextInput
                ref={ ref.current.filter.activities }
                lang={ {
                    user: lang,
                    input: lang
                } }
                type={ 'field-co' }
                label={ dictionary.activities.input.label }
                placeholder={ dictionary.activities.input.placeholder }
                options={ [ ...dictionary.activities.input.options ] }
                default={ dictionary.activities.input.default }
                state={ state.filter.activities }
                setState={ getPathSetState( { setState, path: [ 'filter', 'activities' ] } ) }
            />
            <SelectInput
                ref={ ref.current.filter.budget }
                lang={ lang }
                label={ dictionary.budget.input.label }
                placeholder={ dictionary.budget.input.placeholder }
                options={ [ ...dictionary.budget.input.options ] }
                default={ dictionary.budget.input.default }
                state={ state.filter.budget }
                setState={ getPathSetState( { setState, path: [ 'filter', 'budget' ] } ) }
            />
            <CustomButton
                value={ getDictionary( { lang } ).value }
                color={ 'Co1' }
                isActive={ true }
                onClick={ filter( { lang, data, setState, setIsPending } ) }
                isPending={ isPending }
            />
        </div>
    );
};