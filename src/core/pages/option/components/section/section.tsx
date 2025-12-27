// Import
/// Types
import { SectionProps } from './types';

/// Styles
import pendingStyles from '@/core/styles/pending.module.css';
import styles from './section.module.css';

/// Components
import Map from './components/map/map';

// Component
export default function Section ( props: SectionProps ) {
    if ( props.type === 'row' ) {
        return (
            <div
                className={ `${ styles.rowSection } ${ props.isPending && pendingStyles.skeleton }` }
            >{
                !props.isPending && (
                    <>
                        {
                            <span
                                className={ styles.label }
                            >{ props.label }</span>
                        }
                        {
                            'text' in props &&
                            <span>{ props.text || '' }</span>
                        }
                        {
                            'values' in props &&
                            <div
                                className={ styles.values }
                            >{
                                props.values?.map( ( value, index ) => (
                                    <span
                                        key={ index }
                                        className={ styles.value }
                                        dir={ 'ltr' }
                                    >{ value }</span>
                                ) )
                            }</div>
                        }
                        {
                            'location' in props && props.location &&
                            <Map
                                url={ props.location }
                            />
                        }
                    </>                        
                )
            }</div>
        );

    } else {
        return (
            <div
                className={ `${ styles.columnSection } ${ props.isPending && pendingStyles.skeleton }` }
            >{
                !props.isPending && (
                    <>
                        <div
                            className={ styles.table }
                        >{
                            props.values?.map( ( item, index ) => item.value && (
                                <div
                                    key={ index }
                                    className={ styles.item }
                                >
                                    <span
                                        className={ styles.label }
                                    >{ item.label }</span>
                                    {
                                        Array.isArray( item.value ) ? (
                                            item.value.map( ( valueItem, valueItemIndex ) => (
                                                <span
                                                    key={ valueItemIndex }
                                                    className={ styles.value }
                                                >{ valueItem }</span>
                                            ) )
                                        ) : (
                                            <span
                                                className={ styles.value }
                                            >{ item.value || '' }</span> 
                                        )
                                    }
                                </div>
                            ) )
                        }</div>
                        {
                            props.location &&
                            <Map
                                url={ props.location }
                            />
                        }    
                    </>
                )
            }</div>
        );
    };
};