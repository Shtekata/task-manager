import { useEffect, useState } from "react";
import * as taskService from '../../services/taskService';

const useFetch = (initialValue) => {
    const [state, setState] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        taskService.getEntities()
            .then(x => {
                setState(x.entities)
                setIsLoading(false)
            })
    }, []);

    return [state, isLoading];
};
export default useFetch;