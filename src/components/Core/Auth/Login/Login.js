import * as authService from '../../../../services/authService'
import {useHistory} from 'react-router-dom'
import {useContext, useState} from 'react'
import {Context} from '../../Context'
import {LoginForm} from '../../../Shared/Forms/Forms'

const Login = () => {
  const history = useHistory()
  const [usernameMsg, setUsernameMsg] = useState('')
  const [userPassMsg, setUserPassMsg] = useState('')

  const [state, dispatch] = useContext(Context)

  const onSubmitHandler = e => {
    e.preventDefault()
    let pass = true
    if (e.target.username.value.length < 5) {
      pass = false
      setUsernameMsg('Username should be at least 5 characters')
      setTimeout(() => setUsernameMsg(''), 1500)
    }
    if (e.target.password.value.length < 5) {
      pass = false
      setUserPassMsg('Password should be at least 5 characters')
      setTimeout(() => setUserPassMsg(''), 1500)
    }
    if (pass) {
      authService
        .login({username: e.target.username.value, password: e.target.password.value})
        .then(x => {
          e.target.reset()
          dispatch({type: 'user', payload: x.username})
          dispatch({type: 'userId', payload: x.userId})
          dispatch({type: 'email', payload: x.email})
          dispatch({type: 'info', payload: x.message})
          dispatch({type: 'photoUrl', payload: x.photoUrl})
          history.push('/')
        })
        .catch(x => {
          !x.username ? dispatch({type: 'user', payload: null}) : dispatch({type: 'user', payload: x.username})
          dispatch({type: 'err', payload: x.message})
          history.push('/')
        })
    }
  }

  return (
    <LoginForm
      legend='Login'
      usernameMsg={usernameMsg}
      userPassMsg={userPassMsg}
      onClick={() => history.push('/')}
      onSubmitHandler={onSubmitHandler}
    />
  )
}
export default Login
