import {useContext, useEffect} from 'react'
import {Context} from '../Context'
import Notification from '../../Shared/Notification'
import profilePicture from '../../../img/profile.png'
import Navigation from './Navigation/Navigation'

const Header = () => {
  const [state, dispatch] = useContext(Context)

  useEffect(() => {
    if (state.isLoad || state.err || state.info)
      setTimeout(() => {
        dispatch({type: 'info', payload: null})
        dispatch({type: 'err', payload: null})
      }, state.time)
  }, [state.isLoad, state.info, state.err])

  return (
    <header>
      <Notification
        type={state.isLoad ? 'l' : state.info ? 'i' : state.err ? 'e' : null}
        msg={state.info ? state.info : state.err ? state.err : null}
      />
      <Navigation user={state.user} userId={state.userId} photoUrl={state.photoUrl} profilePicture={profilePicture} />
    </header>
  )
}

export default Header
