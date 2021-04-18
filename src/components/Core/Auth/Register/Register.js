import * as authService from '../../../../services/authService'
import {useHistory} from 'react-router-dom'
import {useContext, useState} from 'react'
import {Context} from '../../Context'
import {RegisterForm} from '../../../Shared/Forms/Forms'

const Register = () => {
  const history = useHistory()

  const [usernameMsg, setUsernameMsg] = useState('')
  const [userEmailMsg, setUserEmailMsg] = useState('')
  const [userPassMsg, setUserPassMsg] = useState('')
  const [userRePassMsg, setUserRePassMsg] = useState('')

  const [state, dispatch] = useContext(Context)

  const onSubmitHandler = e => {
    e.preventDefault()
    let pass = true
    if (e.target.username.value.length < 5) {
      pass = false
      setUsernameMsg('Username should be at least 5 characters')
      setTimeout(() => setUsernameMsg(''), 1500)
    }
    if (e.target.email.value.length < 5) {
      pass = false
      setUserEmailMsg('Email should be at least 5 characters')
      setTimeout(() => setUserEmailMsg(''), 1500)
    }
    if (e.target.password.value.length < 5) {
      pass = false
      setUserPassMsg('Password should be at least 5 characters')
      setTimeout(() => setUserPassMsg(''), 1500)
    }
    if (e.target.rePassword.value.length < 5) {
      pass = false
      setUserRePassMsg('Repeat password should be at least 5 characters')
      setTimeout(() => setUserRePassMsg(''), 1500)
    }
    if (e.target.password.value !== e.target.rePassword.value) {
      pass = false
      e.target.password.value = ''
      e.target.rePassword.value = ''
      setUserRePassMsg('Password and Repeat Password are different!')
      setTimeout(() => setUserRePassMsg(''), 1500)
    }
    if (pass) {
      authService
        .register({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
          rePassword: e.target.rePassword.value,
        })
        .then(x => {
          e.target.reset()
          dispatch({type: 'user', payload: x.username})
          dispatch({type: 'userId', payload: x.userId})
          dispatch({type: 'email', payload: x.email})
          dispatch({type: 'info', payload: x.message})
          history.push('/')
        })
        .catch(x => {
          !x.username ? dispatch({type: 'user', payload: null}) : dispatch({type: 'user', payload: x.username})
          dispatch({type: 'err', payload: x.message})
        })
    }
  }

  return (
    <RegisterForm
      legend='Register'
      usernameMsg={usernameMsg}
      userEmailMsg={userEmailMsg}
      userPassMsg={userPassMsg}
      userRePassMsg={userRePassMsg}
      onClick={() => history.push('/')}
      onSubmitHandler={onSubmitHandler}
    />
  )
}
export default Register
