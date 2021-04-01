import { NavLink } from 'react-router-dom';


const Aside = ({ labels, onAsideItemClick }) => {
    return (
        <aside className='aside'>
            {labels.map((x, i) =>
                <NavLink key={i} to={`/${x[0]}`} className='aside-item' onClick={() => onAsideItemClick(i)}>{x[1]}</NavLink>
            )}
            <style jsx>{`
            .aside{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                margin: 1rem;
            }
            .aside-item{
                width: 100px;
                border-left: 2px solid #4B61A1;
                border-right: 2px solid #4B61A1;
                margin: 11px auto;
                padding: 10px 0;
                border-radius: 50px;
                text-decoration: none;
                outline: none;
            }
            .aside-item:hover{
                border-left: none;
                border-right: none;
                font-weight: bold;
                border-top: 2px solid #4B61A1;
                border-bottom: 2px solid #4B61A1;
                color: #ffa000;
                background-color: antiquewhite;
            }
            .active {
                color: white;
                background-color: #4B61A1;
            }
            `}</style>
        </aside>
    )
};

export default Aside;