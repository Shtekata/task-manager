import DragNDrop from "./DragNDrop";
import useFetch from "../Hooks/useFetch";
import Notification from "../Shared/Notification";
import { useEffect, useState } from "react";

const KanbanBoard = () => {
    const [data, isDataLoading] = useFetch([]);

    return (
        <div className='kanban-board'>
            <DragNDrop data={data} isLoading={isDataLoading} />
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