import {Link} from 'react-router-dom'
import NavLogin from '../NavLogin'
import NavLogout from '../NavLogout'
import {css, keyframes} from '@emotion/react'
import {NavButton} from '../../../Shared/Buttons/Buttons'

const flexCent = {
  display: 'flex',
  alignItems: 'center',
}

const header = {
  minHeight: '75px',
  backgroundColor: '#4b61a1',
  borderBottom: '2px solid #e29510',
  borderTop: '2px solid #ffa000',
  justifyContent: 'space-between',
}

const headerDiv = {
  flexBasis: '30%',
}

const headerLeft = {
  justifyContent: 'flex-start',
}

const headerCentral = {
  justifyContent: 'center',
  color: 'gold',
  '@media (min-width: 989px)': {
    fontSize: '2rem',
  },
}

const headerRight = {
  justifyContent: 'flex-end',
}

const imgCss = {width: '100%'}

const profilePicture = {borderRadius: '50%'}

const rotate = keyframes`
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }`

const Navigation = props => (
  <nav css={[flexCent, header]}>
    <div css={[flexCent, headerDiv, headerLeft]}>
      <Link to='/'>
        <div
          css={css`
            width: 43px;
            margin: 0 30px;
          `}>
          <img css={imgCss} src='/bird.png' alt='bird' />
        </div>
      </Link>
      <Link to='/'>
        <NavButton name='Home' />
      </Link>
    </div>
    <div css={[flexCent, headerDiv, headerCentral]}>
      <h1>Task</h1>
      <img
        css={css`
          width: 50px;
          margin: 0 50px;
          animation: ${rotate} infinite 5s linear;
        `}
        src='/basketball.png'
        alt='flowers'
      />
      <h1>Manager</h1>
    </div>
    <div css={[flexCent, headerDiv, headerRight]}>
      {props.user ? <NavLogout /> : <NavLogin />}
      <div
        css={css`
          width: 53px;
          margin: 0 30px;
        `}>
        {props.user ? (
          props.photoUrl ? (
            <Link to={`/auth/profile/${props.userId}`}>
              <img src={props.photoUrl} css={[profilePicture, imgCss]} alt='no picture' />
            </Link>
          ) : (
            <Link to={`/auth/profile/${props.userId}`}>
              <img src={props.profilePicture} css={[profilePicture, imgCss]} alt='no picture' />
            </Link>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  </nav>
)
export default Navigation
