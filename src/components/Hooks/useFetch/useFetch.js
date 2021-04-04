import { useContext, useEffect, useState } from "react";
import * as taskService from '../../../services/taskService';
import { Context } from "../../Core/Context";

const useFetch = (initialValue) => {
    const [state, setState] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    const [, setUser,, setErr] = useContext(Context);

    useEffect(() => {
        setIsLoading(true);
        taskService.getEntities()
            .then(x => {
                x = x === undefined ? { entities: [] } : x;
                return [{
                    title: 'To Do',
                    items: x.entities.filter(x => x.isToDo === true)
                }, {
                    title: 'In Progress',
                    items: x.entities.filter(x => x.isInProgress === true)
                }, {
                    title: 'Done',
                    items: x.entities.filter(x => x.isDone === true)
                }];
            })
            .then(x => {
                setState(x)
                setIsLoading(false)
            })
            .catch(x => { setErr(x.message); setUser(x.username) });
    }, []);

    return [state, isLoading];
};
export default useFetch;