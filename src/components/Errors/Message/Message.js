import {css} from '@emotion/react'
import {Fragment} from 'react'

const Message = ({msg}) => {
  if (msg?.includes('phoneNumber must be a `number` type')) msg = 'Must fill only numbers'
  return (
    <Fragment>
      <p
        css={css`
          color: red;
          margin-top: 15px;
        `}>
        {msg}
      </p>
    </Fragment>
  )
}
export default Message
