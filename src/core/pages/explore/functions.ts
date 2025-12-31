'use client'

// Import
/// Types
import { DispatchSetState } from '@/core/types';
import { Context, OnRequestParams, Request, UseNeedRequestParams } from './types';

/// Functions
import { createContext, useEffect, useState } from 'react';
import { getContext } from '@/core/functions/hooks/context/functions';

/// Actions
import { getOptions } from '@/core/actions/options/actions';
import { isArraysEqual } from '@/core/functions/data/array/functions';

/// Context
export const CTX = createContext< null | Context >( null );

// Functions
export function useContext () {
    const context = getContext( { context: CTX } );
    return context
};

export function useNeedRequest ( { state }: UseNeedRequestParams ): [ boolean, DispatchSetState< boolean > ] {
    // Use state
    const [ needRequest, setNeedRequest ] = useState< boolean >( true );
    const [ request, setRequest ] = useState< Request >( {
        exclude: state.exclude,
        provinces: state.filter.provinces.values,
        activities: state.filter.activities.values,
        budget: state.filter.budget.values
    } );

    // Use effect
    useEffect( () => {
        // Functions
        const useHasChange = () => (
            !isArraysEqual( { value1: request.exclude, value2: state.exclude } ) ||
            !isArraysEqual( { value1: request.provinces, value2: state.filter.provinces.values } ) ||
            !isArraysEqual( { value1: request.activities, value2: state.filter.activities.values } ) ||
            !isArraysEqual( { value1: request.budget, value2: state.filter.budget.values } )
        );

        const onScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const hasChange = useHasChange();
            const needRequest =
            ( documentHeight - ( scrollTop + windowHeight ) ) <= 400;

            if (
                state.options.length > 0 &&
                state.errors.length === 0 &&
                hasChange &&
                needRequest
            )
            setNeedRequest( () => true );

            if ( hasChange )
            setRequest( () => ( {
                exclude: state.exclude,
                provinces: state.filter.provinces.values,
                activities: state.filter.activities.values,
                budget: state.filter.budget.values
            } ) )
        };

        // Add event
        window.addEventListener( 'scroll', onScroll );

        // Clean Event
        return () => window.removeEventListener( 'scroll', onScroll );

    }, [ state ] );

    // Return
    return [ needRequest, setNeedRequest ];
};

export async function onRequest ( { lang, state, setState, setIsPending, setNeedRequest }: OnRequestParams ) {
    // Set state
    setIsPending( () => true );

    // Get
    const response = await getOptions( {
        lang,
        filter: {
            exclude: state.exclude,
            provinces: state.filter.provinces.values,
            activities: state.filter.activities.values,
            budget: state.filter.budget.values
        }
    } );

    // If failed
    if ( !response.success )
    return setState( ( state ) => ( {
        ...state,
        options: [],
        errors: response.errors.errors
    } ) );

    // Set state
    const newOptions = response.success ? response.options : [];
    const newExclude = newOptions.map( ( option ) => option._id );
    
    setState( ( state ) => ( {
        ...state,
        exclude: [ ...state.exclude, ...newExclude ],
        options: [ ...state.options, ...newOptions ],
        errors: []
    } ) );

    setIsPending( () => false );
    setNeedRequest( () => false );
};