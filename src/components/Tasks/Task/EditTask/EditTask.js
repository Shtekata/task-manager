import { useContext, useEffect, useState } from "react";
import TaskFormView from "../TaskFormView";
import * as taskService from '../../../../services/taskService';
import { Context } from "../../../Core/Context";

const EditTask = ({ match, history }) => {
    const [task, setTask] = useState({});
    const [,,,setErr] = useContext(Context);

    useEffect(() => taskService.getEntity(match.params._id)
        .then(x => {
            x.entity.isPublic = x.entity.isPublic === true ? 'on' : '';
            setTask(x.entity)
        })
        .catch(x => setErr(x.message)), [match]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        taskService.editEntity(task)
            .then(x => { e.target.reset(); history.push({ pathname: `/tasks/details/${task._id}`, state: { task: x.entity } }) })
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