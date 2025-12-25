// Import
/// Dictionary
import { getOptionDictionary } from './dictionary';

/// Types
import { OptionProps } from './types';

/// Functions
import { useContext } from '../../../../functions';

/// Styles
import styles from './option.module.css';

// Component
export default function Option ( props: OptionProps ) {
    // Use context
    const context = useContext();
    const [ state, setState ] = context.state;
    
    // Dictionary
    const lang = state.lang;
    const dictionary = getOptionDictionary( { lang } );

    // Return
    return (
        <a
            className={ styles.container }
            href={ '/explore/' + props.id }
        >
            <img
                className={ styles.image }
                src={ props.images[ 0 ] }
                onError={
                    ( error ) => {
                        error.currentTarget.onerror = null;
                        error.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'><rect width='100%' height='100%' fill='%23f5f5f5'/></svg>`;
                    }
                }
            />
            <div
                className={ styles.text }
            >
                <div
                    className={ styles.section1 }
                >
                    <h2>{ props.title }</h2>
                </div>
                <div
                    className={ styles.section2 }
                >
                    <div className={ styles.row }>
                        <span>{ dictionary.address.label }</span>
                        <span>{ props.address }</span>
                    </div>
                    <div className={ styles.row }>
                        <span>{ dictionary.by.label }</span>
                        <span>{ props.by }</span>
                    </div>
                </div>
            </div>
        </a>
    );
};