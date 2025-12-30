// Import
/// Dictionary
import { getOptionsDictionary } from './dictionary';

/// Functions
import { useContext } from '../../functions';

/// Styles
import pendingStyles from '@/core/styles/pending.module.css';
import styles from './options.module.css';

/// Components
import Option from './components/option/option';
import Message from './components/message/message';

// Component
export default function Options () {
    // Use context
    const context = useContext();
    const [ state, setState ] = context.state;
    const [ isPending, setIsPending ] = context.isPending;

    // Dictionary
    const lang = state.lang;
    const dictionary = getOptionsDictionary( { lang } )

    // Return
    return (
        <div className={ styles.wrapper }>{
            <Message/>
        } {
            state.errors.length > 0 ? (
                <div
                    className={ styles.error }
                >
                    <h2>{ state.errors[ 0 ] }</h2>
                </div>
            ) :
            !isPending && state.options.length === 0 ? (
                <div
                    className={ styles.empty }
                >
                    <h2>{ dictionary.messages.noResultsFound }</h2>
                </div>
            ) : (
                <>{
                    state.options.map( ( { _id, images, title, address, by }, index ) => (
                        <Option
                            key={ index }
                            id={ _id }
                            images={ images }
                            title={ title[ lang ] }
                            address={ address[ lang ] }
                            by={ by[ lang ] }
                        />
                    ) )
                } {
                    isPending &&
                    [ ...Array( state.options.length === 0 ? 5 : 1 ).keys() ].map( ( _, index ) =>
                        <div
                            key={ index }
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                    )
                }</>
            )
        }</div>
    );
};