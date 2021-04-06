import { useContext, useEffect, useState } from "react";
import * as taskService from '../../../services/taskService';
import { Context } from "../../Core/Context";

const useFetch = ({ initialValue, render }) => {
    const [tasks, setTasks] = useState(initialValue);
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        dispatch({ type: 'isLoad' });
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
                setTasks(x)
                dispatch({ type: 'isLoad' });
            })
            .catch(x => {
                !x.username ? dispatch({ type: 'user', payload: null }) : dispatch({ type: 'user', payload: x.username });
                dispatch({ type: 'err', payload: x.message });
            });
    }, [render]);

    return [tasks];
};
export default useFetch;