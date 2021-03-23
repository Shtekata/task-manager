import DragNDrop from "../DragNDrop.js/DragNDrop";

const data = [
    { title: 'Group 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Group 2', items: ['Item 4', 'Item 5'] }
];

const KanbanBoard = () => (
    <div className='kanban-board'>
        <DragNDrop data={data}/>
        <style jsx>{`
        .kanban-board{
            color: white;
            background-color: thistle;
            min-height: 100vh;
            font-size: calc(10px + 2vmin);
        }
        `}</style>
    </div>
);
export default KanbanBoard;