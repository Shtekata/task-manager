import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {useEffect, useState} from 'react'

const Notification = ({msg, type}) => {
  const [classesL, setClassesL] = useState('hidden')
  const [classesI, setClassesI] = useState('hidden')
  const [classesE, setClassesE] = useState('hidden')

  const NotificationDiv = styled.div`
    color: #ffffff;
    position: absolute;
    right: 20px;
  `
  const NotificationSpan = styled.span`
    padding: 0.3em 1em 0.3em 1em;
    border-radius: 10px;
    font-size: 16px;
    font-style: italic;
  `

  useEffect(() => {
    type === 'l' ? setClassesL('') : setClassesL('hidden')
    if (msg) {
      if (type === 'i') setClassesI('')
      if (type === 'e') setClassesE('')
    } else {
      setClassesI('hidden')
      setClassesE('hidden')
    }
  }, [msg, type])

  return (
    <div
      css={css`
        opacity: 0.9;
      `}>
      <NotificationDiv
        css={css`
          top: 170px;
        `}
        className={classesL}>
        <NotificationSpan
          css={css`
            background: #7cb3e9;
            box-shadow: 0px 0px 11px 8px rgba(133, 180, 231, 0.5);
          `}>
          Loading …
        </NotificationSpan>
      </NotificationDiv>
      <NotificationDiv
        css={css`
          top: 90px;
        `}
        className={classesI}>
        <NotificationSpan
          css={css`
            background: #393;
            box-shadow: 0px 0px 11px 8px rgba(68, 157, 68, 0.5);
          `}>
          {msg}
        </NotificationSpan>
      </NotificationDiv>
      <NotificationDiv
        css={css`
          top: 130px;
        `}
        className={classesE}>
        <NotificationSpan
          css={css`
            background: #f50;
            box-shadow: 0px 0px 11px 8px rgba(251, 96, 22, 0.5);
          `}>
          {msg}
        </NotificationSpan>
      </NotificationDiv>
    </div>
  )
}

export default Notification
