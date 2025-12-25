'use client'

// Import
/// Dictionary
import { getGlobalDictionary, translate } from '@/core/dictionary';
import { getOptionDictionary } from './dictionary';

/// Types
import { OptionState } from './types';

/// Safeguards
import { isDeparture, isEvent, isMeetup, isPlace } from '@/core/actions/options/types';

/// Functions
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/core/functions/hooks/context/functions';
import { dateToDateString, dateToTime, isDatesSameDay } from '@/core/functions/data/date/functions';
import { onMount } from './functions';

/// Styles
import pendingStyles from '@/core/styles/pending.module.css';
import styles from './option.module.css';

/// Components
import Images from './components/images/images';
import Section from './components/section/section';

// Component
export default function Option () {
    // Id
    const pathname = usePathname();
    const id = pathname?.split( '/')[ 2 ] as string;

    // Dictionary
    const lang = useGlobalContext().lang;
    const days = getGlobalDictionary( { lang } ).date.days;
    const dictionary = getOptionDictionary( { lang } );

    // Use state
    const [ isPending, setIsPending ] = useState< boolean >( true );
    const [ state, setState ] = useState< OptionState >( {
        option: null,
        errors: []
    } );

    // Use effects
    useEffect( () => {
        onMount( { lang, id, setState, setIsPending } );
    }, [] );

    // Return
    return (
        <div
            className={ styles.wrapper }
        >{
            state.errors.length === 0 ? (
                <>
                    <div
                        className={ `${ styles.titleWrapper } ${ isPending && pendingStyles.skeleton }` }
                    >
                        <div
                            className={ styles.titleContainer }
                        >
                            <h1
                                id={ styles.title }
                            >{ state.option?.title[ lang ] || '' }</h1>
                        </div>
                    </div>
                    <div
                        className={ `${ styles.imagesWrapper } ${ isPending && pendingStyles.skeleton }` }
                    >
                        <div
                            className={ styles.imagesContainer }
                        >
                            <Images
                                srcs={ state.option?.images || [] }
                                isPending={ isPending }
                            />

                        </div>
                    </div>
                    <div
                        className={ styles.mainWrapper }
                    >
                        <div
                            className={ styles.main }
                        >
                            <div
                                className={ styles.sections }
                            >
                                <Section
                                    type={ 'row' }
                                    label={ dictionary.description.label }
                                    text={ state.option?.description[ lang ] }
                                    isPending={ isPending }
                                />
                                <Section
                                    type={ 'row' }
                                    label={ dictionary.activities.label }
                                    values={
                                        state.option?.activities.map( ( value ) =>
                                            translate( {
                                                lang: { user: lang, input: 'en' },
                                                key: 'activities',
                                                value }
                                            )
                                        )
                                    }
                                    isPending={ isPending }
                                />
                                <Section
                                    type={ 'column' }
                                    values={ [ {
                                        label: dictionary.address.label,
                                        value: state.option?.address[ lang ]
                                    }, {
                                        label: dictionary.budget.label,
                                        value: state.option?.budget &&
                                            translate( {
                                                lang: { user: lang, input: 'en' },
                                                key: 'budget',
                                                value: state.option.budget
                                            } )
                                    }, {
                                        label: dictionary.by.label,
                                        value: state.option?.by[ lang ]
                                    } ] }
                                    isPending={ isPending }
                                />
                                {
                                    ( isPending || ( isPlace( state.option ) && state.option.hours && Object.keys( state.option.hours ).length > 0 ) ) &&
                                    <Section
                                        type={ 'column' }
                                        values={
                                            Object.entries(
                                                isPlace( state.option ) && state.option.hours
                                                ? state.option.hours
                                                : {}
                                            )
                                            .map( ( [ key, value ] ) => ( { label: days[ Number( key ) ], value } ) )
                                        }
                                        isPending={ isPending }
                                    />
                                }
                                {
                                    isDeparture( state.option ) &&
                                    <Section
                                        type={ 'row' }
                                        label={ dictionary.location.label }
                                        location={ state.option?.destination }
                                        isPending={ isPending }
                                    />
                                }
                            </div>
                            <div
                                className={ styles.sections }
                            >
                                {
                                    ( isPending || isPlace( state.option ) ) &&
                                    <Section
                                        type={ 'row' }
                                        label={ dictionary.location.label }
                                        location={
                                            isPlace( state.option )
                                            ? state.option.location
                                            : undefined 
                                        }
                                        isPending={ isPending }
                                    />
                                }
                                {
                                    ( isDeparture( state.option ) || isMeetup( state.option ) || isEvent( state.option ) ) &&
                                    <Section
                                        type={ 'column' }
                                        values={ 
                                            isDeparture( state.option ) ? [ 
                                                { label: dictionary.date.label, value: dateToDateString( { lang, value: state.option.departures[ 0 ].date } ) },
                                                { label: dictionary.time.label, value: dateToTime( { lang, value: state.option.departures[ 0 ].date } ) },
                                            ] :

                                            isMeetup( state.option ) ? [ 
                                                { label: dictionary.date.label, value: dateToDateString( { lang, value: state.option.dates[ 0 ] } ) },
                                                { label: dictionary.time.label, value: dateToTime( { lang, value: state.option.dates[ 0 ] } ) },
                                            ] :

                                            isEvent( state.option ) ? [ 
                                                {
                                                    label: dictionary.date.label,
                                                    value: dateToDateString( { lang, value: state.option.schedule.from } )
                                                },
                                                {
                                                    label: '',
                                                    value: !isDatesSameDay( { values: [ state.option.schedule.from, state.option.schedule.to ] } )
                                                    ? dateToDateString( { lang, value: state.option.schedule.to } )
                                                    : undefined
                                                },
                                                {
                                                    label: dictionary.time.label,
                                                    value: `${ dateToTime( { lang, value: state.option.schedule.from } ) } - ${ dateToTime( { lang, value: state.option.schedule.to } ) }`
                                                },
                                            ] : []
                                        }
                                        location={
                                            isMeetup( state.option ) || isEvent( state.option )
                                            ? state.option.location
                                            : state.option.departures[ 0 ].location
                                        }
                                        isPending={ isPending }
                                    />
                                }
                                {
                                    ( isPending || state.option?.phoneNumbers ) &&
                                    <Section
                                        type={ 'row' }
                                        label={ dictionary.contact.label }
                                        values={ state.option?.phoneNumbers }
                                        isPending={ isPending }
                                    />
                                }

                            </div>
                        </div>
                    </div>     
                </>
            ) : (
                <h2
                    className={ styles.error }
                >{ state.errors[ 0 ] }</h2>
            )
        }</div>
    );
};