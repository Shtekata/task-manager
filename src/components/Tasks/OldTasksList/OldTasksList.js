import { useEffect, useState } from 'react';
import * as taskService from '../../../services/taskService';
import Aside from '../../Shared/Aside';
import Task from './OldTask';

const OldTasksList = () => {

    const [tasks, setTasks] = useState([]);
    const [currentTasks, setCurrentTasks] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        taskService.getEntities().then(x => {
            setTasks(x.entities);
            setCurrentTasks(x.entities);
            setLabels([['aside/all', 'All'], ...x.entities.map(x => [`aside/${x.title}`, x.title])]);
        });
    }, []);

    const onAsideItemClickApp = (title) => {
        if (title === 'All') return setCurrentTasks(tasks);
        const task = tasks.filter(x => x.title === title);
        setCurrentTasks(task);
    };

    return (
        <div className='article'>
            <div className='task-list'>
                <h1 className='title'>Old Tasks</h1>
                <div>
                    {currentTasks.map(x => <Task key={x._id} task={x} />)}
                </div>
            </div>
            <Aside onAsideItemClick={onAsideItemClickApp} labels={labels} />
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