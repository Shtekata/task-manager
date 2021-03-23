import { useEffect, useRef, useState } from "react";

const DragNDrop = ({ data }) => {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const currentItem = dragItem.current;
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        dragItem.current = params;
        dragNode.current = e.target;
        setTimeout(() => setDragging(true), 0);
        dragNode.current.addEventListener('dragend', handleDragEnd);
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

    const handleDragEnd = () => {
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        setDragging(false);
    };

    const getStyles = (params) => {
        if (currentItem.i === params.i && currentItem.ii === params.ii) return 'current dnd-item';
        return 'dnd-item';
    }

    return (
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
                            key={y}
                            draggable
                            className={dragging ? getStyles({ i, ii }) : "dnd-item"}
                            onDragStart={(e) => handleDragStart(e, { i, ii })}
                            onDragEnter={dragging ? (e) => handleDragEnter(e, { i, ii }) : null}
                        >
                            <p className='dnd-item-title'>{y}</p>
                            <div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <style jsx>{`
        .drag-and-drop{
            padding: .5rem;
            display: grid;
            gap: .5rem;
            width: 100%;
            height: 100%;
            align-items: start;
            grid-template-columns: repeat(auto-fill, 300px);
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
        </div>
    )
};
export default DragNDrop;