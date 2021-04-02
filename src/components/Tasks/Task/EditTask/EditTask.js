import { useContext, useEffect, useState } from "react";
import TaskFormView from "../TaskFormView";
import * as taskService from '../../../../services/taskService';
import { Context } from "../../../Core/Context";

const EditTask = ({ match, history }) => {
    const [task, setTask] = useState({});
    const [setErr] = useContext(Context);

    useEffect(() => taskService.getEntity(match.params.petId)
        .then(x => setTask(x))
        .catch(x => setErr(x.message)), [match]);

    const onSubmitHandler = (x) => {
        x.preventDefault();
        taskService.editEntity(task)
            .then(x => { x.target.reset(); history.push(`/tasks/details/${task._id}`) })
            .catch(x => setErr(x.message));
    };

    const onChangeHandler = (e) => {
        setTask(x => ({ ...x, [e.target.name]: e.target.value }));
    };

    return (
        <TaskFormView type='edit' task={task} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} />
    )
};
export default EditTask;