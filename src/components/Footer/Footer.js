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
            <Link to='/' className='footer-item'><img src="blue-origami-bird-flipped.png" alt="Blue origami" /></Link>
        </div>
        <p>Software University &copy; <span className='ala-bala'>2021</span></p>
        <style jsx>{`
.footer {
    width: 100%;
    height: 70px;
    background-color: #ffa000;
    border-top: 2px solid #234465;
    border-bottom: 2px solid #234465;
}
.footer p {
    text-align: center;
    font-weight: bold;
    padding: 2px 0 5px 0;
    color: maroon;
    background-color: darkorange;
    margin: 0;
    border-bottom: 2px solid #234465;
}
.div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
.footer-item {
    color: #234465;
    text-align: center;
  }
  .footer-item > img {
    width: 100%;
  }
  .footer-item:last-child {
    width: 67px;
  }
  .footer-item:not(:last-child) {
    padding: 12px 15px;
    border-bottom: 2px solid #234465;
    flex-basis: 6%;
  }
  .footer-item:hover {
    cursor: pointer;
    border-bottom: none;
    border-top: 2px solid #234465;
    font-weight: bold;
}
`}</style>
    </footer>
);

export default Footer;