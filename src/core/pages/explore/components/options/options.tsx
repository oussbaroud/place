// Import
/// Dictionary
import { translate } from '@/core/dictionary';
import { getOptionsDictionary } from './dictionary';

/// Functions
import { useContext } from '../../functions';

/// Styles
import pendingStyles from '@/core/styles/pending.module.css';
import styles from './options.module.css';

/// Components
import Option from './components/option/option';

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
                    state.options.map( ( { _id, images, title, address, budget, reviews, by }, index ) => (
                        <Option
                            key={ index }
                            id={ _id }
                            images={ images }
                            title={ title[ lang ] }
                            address={ address[ lang ] }
                            budget={
                                translate( {
                                    lang: { user: lang, input: 'en' },
                                    key: 'budget',
                                    value: budget
                                } )
                            }
                            reviews={
                                translate( {
                                    lang: { user: lang, input: 'en' },
                                    key: 'reviews',
                                    value: reviews
                                } )
                            }
                            by={ by[ lang ] }
                        />
                    ) )
                } {
                    isPending &&
                    <>
                        <div
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                        <div
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                        <div
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                        <div
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                        <div
                            className={ `${ styles.skeleton } ${ pendingStyles.skeleton }` }
                        ></div>
                    </>
                }</>
            )
        }</div>
    );
};