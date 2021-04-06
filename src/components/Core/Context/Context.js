import { createContext, useEffect, useReducer, useState } from "react";

export const Context = createContext();

export const Provider = props => {

    const initialState = { user: null, err: null, isLoad: null, info: null, time: 2000, };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'user': return { ...state, user: state.user = action.payload };
            case 'err': return { ...state, err: state.err = action.payload };
            case 'info': return { ...state, info: state.info = action.payload };
            case 'time': return { ...state, time: state.time = action.payload };
            case 'isLoad': return { ...state, isLoad: state.isLoad = state.isLoad ? false : true };
            default: return { ...state, err: state.err = 'Wrong use of reducer' };
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const localUser = localStorage.getItem('username');
        if (localUser !== 'undefined') dispatch({ type: 'user', payload: localUser });
    }, []);

    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    );
}