const OldTask = ({ task: x }) => (
    <div className='task'>
        <img className='task-img' src="/skull.png" alt="skull" />
        <h2 className='task-title'>{x.title}</h2>
        <p className='description'>{x.description}</p>
        <div className='task-div'>
            <div className="old-task-author">
                <small>Author: </small> {x.creator.username}
            </div>
            <div className="old-task-createdAt">
                <small className='old-task-createdAt'>Created at: </small> {`${x.createdAt.slice(0,10)} ${x.createdAt.slice(11,19)}`}
            </div>
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
                padding-right: 1%;
                margin-bottom: 0.5%;
                display: flex;
                justify-content: space-between;
            }
            .task-title{
                display: inline-block;
                text-align: center;
                width: 90%;
            }
            .description {
                word-wrap: break-word;
                padding: 0 10px;
                font-style: italic;
                margin: 1% auto;
                ;
            }
            .old-task-author, .old-task-createdAt {
                padding: .5rem;
            }
        `}</style>
    </div>
);

export default OldTask;