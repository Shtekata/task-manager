import { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import * as authService from '../../../../services/authService';


const NavLogout = () => {

    const history = useHistory();
    const [user, setUser] = useContext(Context);

    const logoutClickHandler = (e) => {
        e.preventDefault();
        authService.logout()
        .then(x => { setUser(null); history.push('/') })};

    return (
        <Fragment>
            <Link to='#' className='header-item' onClick={logoutClickHandler}>Logout</Link>
            <Link to='#' className='header-item'>{user}</Link>
        </Fragment>
    )
};
export default NavLogout;