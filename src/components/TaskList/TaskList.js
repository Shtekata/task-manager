import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import * as taskService from '../../services/taskService';
import Aside from '../Aside';
import Task from '../Task';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [currentTasks, setCurrentTasks] = useState([]);
    const [labels, setLabels] = useState({
        label: 'All', label1: 'P-M-A', label2: 'P-M-D', label3: 'P-M-K',
        label4: 'P-M-L', label5: 'P-M-N', label6: 'P-M-S', label7: 'P-M-T'
    });

    useEffect(() => {
        taskService.getEntities().then(x => {
            localStorage.setItem('token', x.token);
            const entities = x.enitities;
            setTasks(entities);
            setCurrentTasks(entities);
        });
    }, []);

    const onAsideItemClickApp = (id) => {
        if (!id) return setCurrentTasks(tasks);
        const task = tasks.slice(id - 1, id);
        setCurrentTasks(task);
    };

    return (
        <div className='article'>
            <div className='task-list'>
                <h1 className='title'>Some Articles</h1>
                <div>
                    {currentTasks.map(x => <Task key={x._id} task={x} />)}
                </div>
            </div>
            <Aside onAsideItemClick={onAsideItemClickApp} {...labels} />
            <style jsx>{`
            .title {
                text-align: center;
                color: #234465;
                text-decoration: underline;
                margin: 1% 0 2% 0;
            }
            .article {
                display: flex;
                height: 100%;
            }
            `}</style>
        </div>
    );
};

export default TaskList;