import Task from '../Task';

const TaskList = ({ tasks }) => (
    <div className='task-list'>
        <h1>Some Tasks</h1>
        <div>
            {tasks.map(x => <Task key={x._id} task={x} />)}
        </div>
        <style jsx>{`
        h1{
            text-align: center;
            color: #234465;
            text-decoration: underline;
            margin: 1% 0 2% 0;
        }
        `}</style>
    </div>
);

export default TaskList;