import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavLogout = ({ user }) => (
    <Fragment>
        <Link to='/auth/logout' className='header-item'>Logout</Link>
        <Link to='#' className='header-item'>{user}</Link>
    </Fragment>
);
export default NavLogout;