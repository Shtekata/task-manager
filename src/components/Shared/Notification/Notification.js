import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {useEffect, useState} from 'react'

const Notification = ({msg, type}) => {
  const [classesL, setClassesL] = useState('hidden')
  const [classesI, setClassesI] = useState('hidden')
  const [classesE, setClassesE] = useState('hidden')

  const NotificationDiv = styled.div`
    color: #ffffff;
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
      <NotificationDiv id='loadingBox' className={classesL}>
        <span>Loading …</span>
      </NotificationDiv>
      <NotificationDiv id='infoBox' className={classesI}>
        <span>{msg}</span>
      </NotificationDiv>
      <NotificationDiv id='errorBox' className={classesE}>
        <span>{msg}</span>
      </NotificationDiv>
      <style>{`
            .hidden{
                display: none;
            }
            span {
               padding: 0.3em 1em 0.3em 1em;
               border-radius: 10px;
               font-size: 16px;
               font-style: italic;
            }
            #infoBox {
                position: absolute;
                right: 20px;
                top: 90px
            }
            #infoBox>span {
                background: #393;
                box-shadow: 0px 0px 11px 8px rgba(68, 157, 68, 0.5)
            }
            #errorBox {
                position: absolute;
                right: 20px;
                top: 130px
            }
            #errorBox>span {
                background: #F50;
                box-shadow: 0px 0px 11px 8px rgba(251, 96, 22, 0.5)
            }
            #loadingBox {
                position: absolute;
                right: 20px;
                top: 170px
            }
            #loadingBox>span {
                background: #7CB3E9;
                box-shadow: 0px 0px 11px 8px rgba(133, 180, 231, 0.5)
            }
        `}</style>
    </div>
  )
}

export default Notification
