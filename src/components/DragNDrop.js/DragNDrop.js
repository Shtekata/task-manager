import { Fragment, useEffect, useRef, useState } from "react";
import * as taskService from '../../services/taskService';
import Notification from "../Shared/Notification";

const DragNDrop = ({ data, isLoading }) => {
    const [list, setList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        setList(data);
        setIsLoad(isLoading);
    }, [data,isLoading])

    const dragItem = useRef();
    const currentItem = dragItem.current;
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        dragItem.current = params.cord;
        dragNode.current = e.target;
        setTimeout(() => setDragging(true), 0);
        dragNode.current.addEventListener('dragend',
            () => handleDragEnd({ _id: params._id, col: params.cord.i, row: params.cord.ii }));
    };

    const handleDragEnter = (e, params) => {
        if (currentItem.i !== params.i || currentItem.ii !== params.ii) {
            setList(x => {
                let newList = JSON.parse(JSON.stringify(x));
                newList[params.i].items.splice(params.ii, 0, newList[currentItem.i].items.splice(currentItem.ii, 1)[0]);
                dragItem.current = params;
                return newList;
            })
        }
    }

    const handleDragEnd = ({ _id, col, row }) => {
        if (dragItem.current !== null && (col !== dragItem.current.i || row !== dragItem.current.ii)) {
            taskService.shiftEntity({ _id, col: dragItem.current.i, row: dragItem.current.ii })
                .catch(x => { setType(''); setMsg(x.message); setTime(3000); setType('e'); });
        };
        if (dragNode.current !== null) dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        setDragging(false);
    };

    const getStyles = (params) => {
        if (currentItem.i === params.i && currentItem.ii === params.ii) return 'current dnd-item';
        return 'dnd-item';
    }

    return (
        <Fragment>
            <Notification type={type} msg={msg} time={time}/>
            {isLoad ? <h1>Is Loading...</h1> : true}
            <div className='drag-and-drop'>
                {list.map((x, i) => (
                    <div
                        key={x.title}
                        className="dnd-group"
                        onDragEnter={dragging && !x.items.length ? (e) => handleDragEnter(e, { i, ii: 0 }) : null}
                    >
                        <div className="group-title">{x.title}</div>
                        {x.items.map((y, ii) => (
                            <div
                                key={y._id}
                                draggable
                                className={dragging ? getStyles({ i, ii }) : "dnd-item"}
                                onDragStart={(e) => handleDragStart(e, { cord: { i, ii }, _id: y._id })}
                                onDragEnter={dragging ? (e) => handleDragEnter(e, { i, ii }) : null}
                            >
                                <p className='dnd-item-title'>{y.title}</p>
                                <div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                ))}
            </div>
            <style jsx>{`
            .drag-and-drop{
                padding: 1rem .5rem;
                display: grid;
                gap: 1rem;
                height: 100%;
                align-items: baseline;
                grid-template-columns: repeat(auto-fill, 32%);
                justify-content: center;
            }
            .dnd-group{
                background-color: rgb(247, 225, 240);
                border-radius: 5px;
                padding: .5rem;
            }
            .group-title{
                color: brown;
                text-align: left;
                margin-bottom: .5rem;
                font-size: 1.5rem;
            }
            .dnd-item{
                color: blue;
                background-color: white;
                min-height: 150px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .dnd-item *{
                font-size: 1.2rem;
            }
            .dnd-item:not(:last-of-type){
                margin-bottom: .5rem;
            }
            .dnd-item-title{
                align-self: flex-start;
                font-weight: bold;
            }
            .current{
                background-color: mistyrose;
            }
            `}</style>
        </Fragment>
    )
};
export default DragNDrop;