import { useState } from "react";

const DragNDrop = ({ data }) => {
    const [list, setList] = useState(data);

    const handleDragStart = (e, props) => {
        console.log('Drag starting...', props);
    };

    return (
        <div className='drag-and-drop'>
            {list.map((x, i) => (
                <div key={x.title} className="dnd-group">
                    <div className="group-title">{x.title}</div>
                    {x.items.map((y, ii) => (
                        <div draggable onDragStart={(e)=>handleDragStart(e,{i,ii})} key={y} className="dnd-item">
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
        `}</style>
        </div>
    )
};
export default DragNDrop;