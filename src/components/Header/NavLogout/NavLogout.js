import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../../../services/authService';

const NavLogout = ({ user, logoutHandler }) => {
    const logoutClickHandler = () => authService.logout()
        .then(x => logoutHandler(x));

    return (
        <Fragment>
            <Link to='#' className='header-item' onClick={logoutClickHandler}>Logout</Link>
            <Link to='#' className='header-item'>{user}</Link>
        </Fragment>
    )
};
export default NavLogout;