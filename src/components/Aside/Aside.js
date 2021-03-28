import { NavLink } from 'react-router-dom';


const Aside = ({ onAsideItemClick }) => {
    return (
        <aside className='aside'>
            <NavLink to='/aside/all' className='aside-item' onClick={() => onAsideItemClick()}>Going to All</NavLink>
            <NavLink to='/aside/1' className='aside-item' onClick={() => onAsideItemClick(1)}>Going to 1</NavLink>
            <NavLink to='/aside/2' className='aside-item' onClick={() => onAsideItemClick(2)}>Going to 2</NavLink>
            <NavLink to='/aside/3' className='aside-item' onClick={() => onAsideItemClick(3)}>Going to 3</NavLink>
            <NavLink to='/aside/4' className='aside-item' onClick={() => onAsideItemClick(4)}>Going to 4</NavLink>
            <NavLink to='/aside/5' className='aside-item' onClick={() => onAsideItemClick(5)}>Going to 5</NavLink>
            <NavLink to='/aside/6' className='aside-item' onClick={() => onAsideItemClick(6)}>Going to 6</NavLink>
            <NavLink to='/aside/7' className='aside-item' onClick={() => onAsideItemClick(7)}>Going to 7</NavLink>
            <style jsx>{`
            .aside{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                margin: 1rem;
            }
            .aside-item{
                flex-basis: 40px;
                width: 100px;
                border-left: 2px solid #234465;
                border-right: 2px solid #234465;
                margin: 11px auto;
                text-align: center;
            }
            .aside-item:hover{
                border-left: none;
                border-right: none;
                font-weight: bold;
                border-top: 2px solid #234465;
                border-bottom: 2px solid #234465;
                color: #ffa000;
            }
            .active {
                color: white;
                background-color: #234465;
            }
            `}</style>
        </aside>
    )
};

export default Aside;