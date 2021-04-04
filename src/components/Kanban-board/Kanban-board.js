import DragNDrop from "./DragNDrop";
import { Fragment } from "react";

const KanbanBoard = () => {
    return (
        <div className='kanban-board'>
            <DragNDrop />
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