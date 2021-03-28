import { Link } from 'react-router-dom';
import NavLogin from './NavLogin';
import NavLogout from './NavLogout';

const Header = ({ user, logoutHandler }) => (
  <nav className='navigation'>
    <div className='div'>
      <Link to='/' className='header-item'><img src="/bird.png" alt="bird" /></Link>
      <Link to='/' className='header-item'>Home</Link>
      <Link to='/tasks-test' className='header-item'>Tasks Test</Link>
      <Link to='/contact-us' className='header-item'>Contact Us</Link>
      <Link to='/about' className='header-item'>About</Link>
      <Link to='/music' className='header-item'>Music</Link>
      {user
        ? <NavLogout user={user} logoutHandler={logoutHandler} />
        : <NavLogin />
      }
    </div>
    <style jsx>{`
  .navigation {
      width: 100%;
      height: 70px;
      background-color: #4b61a1;
      border-bottom: 2px solid #e29510;
      border-top: 2px solid #ffa000;
  }
  .div{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
  }
  .header-item {
    color: white;
    text-align: center;
    text-decoration: none;
  }
  .header-item > img {
    width: 100%;
  }
  .header-item:first-child {
    width: 43px;
  }
  .header-item:not(:first-child) {
    padding: 12px 15px;
    border-top: 2px solid #ffa000;
    flex-basis: 6%;
  }
  .header-item:hover {
    cursor: pointer;
    border-top: none;
    border-bottom: 2px solid #ffa000;
    font-weight: bold;
}
`}</style>
  </nav>
);

export default Header;