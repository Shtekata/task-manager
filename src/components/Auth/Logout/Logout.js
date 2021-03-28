import { useEffect } from 'react';
import * as authService from '../../../services/authService';
import { useHistory } from 'react-router-dom';

const Logout = ({logoutHandler}) => {
    const history = useHistory();

    useEffect(() => {
        authService.logout()
            .then(x => { history.push('/'); logoutHandler(x) });
    },[]);
    
    return null;
};
export default Logout;