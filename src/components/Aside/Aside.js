import { NavLink } from 'react-router-dom';


const Aside = ({ onAsideItemClick }) => {
    
    return (
        <aside className='aside'>
            <NavLink to='/aside/1' className='aside-item' onClick={() => onAsideItemClick(1)}>Going to 1</NavLink>
            <NavLink to='/aside/2' className='aside-item' onClick={() => onAsideItemClick(2)}>Going to 2</NavLink>
            <NavLink to='/aside/3' className='aside-item' onClick={() => onAsideItemClick(3)}>Going to 3</NavLink>
            <NavLink to='/aside/4' className='aside-item' onClick={() => onAsideItemClick(4)}>Going to 4</NavLink>
            <NavLink to='/aside/5' className='aside-item' onClick={() => onAsideItemClick(5)}>Going to 5</NavLink>
            <NavLink to='/aside/6' className='aside-item' onClick={() => onAsideItemClick(6)}>Going to 6</NavLink>
            <NavLink to='/aside/7' className='aside-item' onClick={() => onAsideItemClick(7)}>Going to 7</NavLink>
            <NavLink to='/aside/8' className='aside-item' onClick={() => onAsideItemClick(8)}>Going to 8</NavLink>
            <NavLink to='/aside/9' className='aside-item' onClick={() => onAsideItemClick(9)}>Going to 9</NavLink>
            <NavLink to='/aside/10' className='aside-item' onClick={() => onAsideItemClick(10)}>Going to 10</NavLink>
            <style jsx>{`
            .aside{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
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