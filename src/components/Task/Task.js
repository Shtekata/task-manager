const Task = ({ task: x }) => (
    <div className='task'>
        <img className='task-img' src="blue-origami-bird.png" alt="Origami" />
        <p className='description'>{x.description}</p>
        <div className='task-div'>
            <small>Author: </small> {x.creator.username}
        </div>
        <style jsx>{`
            .task {
                border: 2px solid #234465;
                margin-bottom: 35px;
                border-radius: 5px;
            }
            .task-img{
                width: 32px;
                height: 32px;
                padding: 3px 0 0 3px;
            }
            .task-div{
                text-align: right;
                text-decoration: underline;
                padding-right: 1%;
                margin-bottom: 0.5%;
            }
            .description {
                word-wrap: break-word;
                padding: 0 10px;
                font-style: italic;
                margin-bottom: 0.5%;
                ;
            }
        `}</style>
    </div>
);

export default Task;