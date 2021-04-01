import DragNDrop from "../DragNDrop.js/DragNDrop";
import useFetch from "../../Hooks/useFetch";



const data = [
    { title: 'To Do', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'In Progress', items: ['Item 4', 'Item 5'] },
    { title: 'Done', items: ['Item 4', 'Item 5'] }
];

const KanbanBoard = () => {
    const [serverData, isDataLoading] = useFetch({});
    return (
        <div className='kanban-board'>{console.log(serverData)}
            <DragNDrop data={data} />
            <style jsx>{`
        .kanban-board{
            color: white;
            background-color: thistle;
            font-size: calc(10px + 2vmin);
            height: 100%;
        }
        `}</style>
        </div>
    )
};
export default KanbanBoard;