import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = props => {

    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null);
    const [isLoad, setIsLoad] = useState(null);
    const [notif, setNotif] = useState(null);

    useEffect(() => {
        const localUser = localStorage.getItem('username');
        if (localUser !== 'undefined') setUser(localUser);
    }, []);

    return (
        <Context.Provider value={[user,setUser,err,setErr,isLoad,setIsLoad,notif,setNotif]}>
            {props.children}
        </Context.Provider>
    );
}