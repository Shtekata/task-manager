import DragNDrop from "./DragNDrop";
import useFetch from "../Hooks/useFetch";
import { Fragment } from "react";

const KanbanBoard = () => {
    const [data] = useFetch([]);
    return (
        <Fragment>
            <div className='kanban-board'>
                <DragNDrop data={data} />
            </div>
            <style jsx>{`
            .kanban-board{
                color: white;
                background-color: thistle;
                font-size: calc(10px + 2vmin);
                height: 100%;
            }
            `}</style>
        </Fragment>
    )
};
export default KanbanBoard;