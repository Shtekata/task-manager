import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className='footer'>
        <div className='div'>
            <Link to='/' className='footer-item'>Home</Link>
            <Link to='/about' className='footer-item'>About</Link>
            <Link to='/contact-us' className='footer-item'>Contact Us</Link>
            <Link to='/contact-us-custom' className='footer-item'>Con Us Cus</Link>
            <Link to='/about' className='footer-item'>About</Link>
            <Link to='/about' className='footer-item'>About</Link>
            <Link to='/about' className='footer-item'>About</Link>
            <Link to='/' className='footer-item'><img src="/caveman.png" alt="caveman" /></Link>
        </div>
        <p>Gehslandia &copy; <span className='ala-bala'>2021</span></p>
        <style jsx>{`
.footer {
    width: 100%;
    background-color: #ffa000;
    border-top: 2px solid #234465;
    border-bottom: 2px solid #234465;
}
.footer p {
    text-align: center;
    font-weight: bold;
    color: maroon;
    background-color: darkorange;
    margin: 0;
    border-bottom: 2px solid #234465;
    font-size: 14px;
}
.div{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer-item {
    color: #234465;
    text-align: center;
    text-decoration: none;
    outline: none;
  }
  .footer-item > img {
    width: 100%;
  }
  .footer-item:last-child {
    width: 55px;
    padding-top: .2rem;
  }
  .footer-item:not(:last-child) {
    padding: 12px 15px;
    border-bottom: 2px solid #234465;
    flex-basis: 6%;
  }
  .footer-item:not(:last-child):hover {
    cursor: pointer;
    border-bottom: none;
    border-top: 2px solid #234465;
    font-weight: bold;
}
`}</style>
    </footer>
);

export default Footer;