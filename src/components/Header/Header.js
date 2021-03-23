import { Link } from 'react-router-dom';

const Header = () => (
  <nav className='navigation'>
    <div className='div'>
      <Link to='/' className='header-item'><img src="white-origami-bird.png" alt="White origami" /></Link>
      <Link to='/' className='header-item'>Home</Link>
      <Link to='/tasks-test' className='header-item'>Tasks Test</Link>
      <Link to='/contact-us' className='header-item'>Contact Us</Link>
      <Link to='/contact-us-custom' className='header-item'>Con Us Cus</Link>
      <Link to='/about' className='header-item'>About</Link>
      <Link to='/about' className='header-item'>About</Link>
      <Link to='/about' className='header-item'>About</Link>
    </div>
    <style jsx>{`
  .navigation {
      width: 100%;
      height: 70px;
      background-color: #234465;
      border-bottom: 2px solid #ffa000;
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
  }
  .header-item > img {
    width: 100%;
  }
  .header-item:first-child {
    width: 67px;
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