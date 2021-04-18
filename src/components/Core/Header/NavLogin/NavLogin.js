import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {NavButton} from '../../../Shared/Buttons/Buttons'

const NavLogin = () => (
  <Fragment>
    <Link to='/auth/login'>
      <NavButton name='Login' />
    </Link>
    <Link to='/auth/register'>
      <NavButton name='Register' />
    </Link>
  </Fragment>
)
export default NavLogin
