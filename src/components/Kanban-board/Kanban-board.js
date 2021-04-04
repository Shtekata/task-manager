import DragNDrop from "./DragNDrop";
import useFetch from "../Hooks/useFetch";
import { Fragment, useContext } from "react";
import { Context } from "../Core/Context";
import Notification from "../Shared/Notification";

const KanbanBoard = () => {
    const [data] = useFetch([]);
    const [, , , , isLoad] = useContext(Context);

    return (
        <Fragment>
            <Notification type={isLoad?'l':''}/>
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