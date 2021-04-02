import { useContext, useState } from "react";
import TaskFormView from "../TaskFormView";
import * as taskService from '../../../../services/taskService';
import { Context } from "../../../Core/Context";

const AddTask = ({history}) => {
    const [task, setTask] = useState({});
    const [setErr] = useContext(Context);

    const onSubmitHandler = (x) => {
        x.preventDefault();
        taskService.createEntity(task)
            .then(x => { x.target.reset(); history.push('/') })
            .catch(x => setErr(x.message));
    };

    const onChangeHandler = (e) => {
        setTask(x => ({ ...x, [e.target.name]: e.target.value }));
    };


    return (
        <TaskFormView task={{}} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} />
    )
};
export default AddTask;