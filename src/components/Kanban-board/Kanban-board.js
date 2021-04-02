import DragNDrop from "../DragNDrop.js/DragNDrop";
import useFetch from "../../Hooks/useFetch";
import Notification from "../Shared/Notification";
import { useEffect, useState } from "react";

const KanbanBoard = () => {
    const [data, isDataLoading, err] = useFetch([]);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (err) {
        setMsg(err.message);
        setType('e');
        setTime(5000);    
        };
    }, [err]);
    
    return (
        <div className='kanban-board'>
            <Notification type={type} msg={msg} time={time}/>
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