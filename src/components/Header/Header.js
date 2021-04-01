import { Link } from 'react-router-dom';
import Notification from '../Shared/Notification';
import NavLogin from './NavLogin';
import NavLogout from './NavLogout';

const Header = ({ user, logoutHandler }) => (
  <nav className='navigation'>
    <div className='header-div'>
      <div className="header header-side header-div header-left">
        <Link to='/' className='header-item-img'><img src="/bird.png" alt="bird" /></Link>
        <Link to='/' className='header-item'>Home</Link>
      </div>
      <div className='header header-central'>
        <h1>Task</h1>
        <img src="/basketball.png" className="header-img" alt="flowers" />
        <h1>Manager</h1>
      </div>
      <div className="header header-side header-div header-right">
        {user
          ? <NavLogout user={user} logoutHandler={logoutHandler} />
          : <NavLogin />
        }
      </div>
    </div>
    <style jsx>{`
    .navigation {
        width: 100%;
        min-height: 75px;
        background-color: #4b61a1;
        border-bottom: 2px solid #e29510;
        border-top: 2px solid #ffa000;
        display: flex;
        align-items: center;
    }
    .header-div{
        display: flex;
        align-items: center;
        height: 100%;
        flex-grow: 1;
    }
    .header-item {
      color: maroon;
      text-align: center;
      text-decoration: none;
      outline: none;
      margin: 0 30px;
      padding: 12px 15px;
      border-bottom: 3px solid maroon;
      border-radius: 50px;
      background-color: darkorange;
    }
    .header-item-img > img {
      width: 100%;
    }
    .header-item-img {
      width: 43px;
      margin: 0 30px;
    }
    .header-item:hover {
      cursor: pointer;
      border-bottom: none;
      border-top: 3px solid maroon;
      font-weight: bold;
    }
    .header-left {
      justify-content: flex-start;
    }
    .header-right {
      justify-content: flex-end;
    }
    .header-img {
      width: 50px;
      margin: 0 50px;
    }
    .header-central {
      display: flex;
      align-items: center;
      color: gold;
      font-size: 2rem;
    }
    @media (prefers-reduced-motion: no-preference) {
      .header-img {
        animation: App-logo-spin infinite 5s linear;
      }
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `}</style>
  </nav>
);

export default Header;