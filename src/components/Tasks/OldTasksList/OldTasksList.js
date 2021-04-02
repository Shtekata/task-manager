import { useEffect, useState } from 'react';
import * as taskService from '../../../services/taskService';
import Aside from '../../Shared/Aside';
import Task from './OldTask';

const OldTasksList = () => {

    const [tasks, setTasks] = useState([]);
    const [currentTasks, setCurrentTasks] = useState([]);
    const [labels, setLabels] = useState([
        ['aside/all', 'All'], ['aside/p-m-a', 'P-M-A'], ['aside/p-m-d', 'P-M-D'], ['aside/p-m-k', 'P-M-K'],
        ['aside/p-m-l', 'P-M-L'], ['aside/p-m-n', 'P-M-N'], ['aside/p-m-s', 'P-M-S'], ['aside/p-m-t', 'P-M-T']
    ]);

    useEffect(() => {
        taskService.getEntities().then(x => {
            localStorage.setItem('token', x.token);
            const entities = x.entities;
            setTasks(entities);
            setCurrentTasks(entities);
        });
    }, []);

    const onAsideItemClickApp = (id) => {
        if (id===0) return setCurrentTasks(tasks);
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
            <Aside onAsideItemClick={onAsideItemClickApp} path='aside' labels={labels} />
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

export default OldTasksList;