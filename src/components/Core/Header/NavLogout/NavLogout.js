import {Fragment, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Context} from '../../Context'
import * as authService from '../../../../services/authService'
import {NavButton} from '../../../Shared/Buttons/Buttons'

const NavLogout = () => {
  const history = useHistory()
  const [state, dispatch] = useContext(Context)

  const logoutClickHandler = e => {
    e.preventDefault()
    authService
      .logout()
      .then(x => {
        dispatch({type: 'user', payload: null})
        dispatch({type: 'userId', payload: ''})
        dispatch({type: 'email', payload: ''})
        dispatch({type: 'photoUrl', payload: ''})
        dispatch({type: 'info', payload: x.message})
        history.push('/')
      })
      .catch(x => {
        dispatch({type: 'err', payload: x.message})
        history.push('/')
      })
  }

  return (
    <Fragment>
      <Link to='#' onClick={logoutClickHandler}>
        <NavButton name='Logout' />
      </Link>
      <Link to={`/auth/profile/${state.userId}`}>
        <NavButton name={state.user} />
      </Link>
    </Fragment>
  )
}
export default NavLogout
