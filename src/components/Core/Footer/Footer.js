import {css} from '@emotion/react'
import {Link} from 'react-router-dom'

const imgWidth = {
  width: '57px',
}

const Footer = () => (
  <footer
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-height: 75px;
      background-color: #ffa000;
      border-top: 2px solid #234465;
      border-bottom: 2px solid #234465;
    `}>
    <div css={imgWidth}></div>
    <p
      css={css`
        text-align: center;
        font-weight: bold;
        color: maroon;
        background-color: darkorange;
        font-size: 15px;
        padding: 7px 30px;
        border-radius: 20px;
        margin: 0 20px;
        &:hover {
          color: blue;
          background-color: antiquewhite;
        }
      `}>
      Copyright &copy; 2021 Gehslandia Inc.
    </p>
    <Link
      to='/'
      css={css`
        margin: 0 20px;
      `}>
      <img css={imgWidth} src='/caveman.png' alt='caveman' />
    </Link>
  </footer>
)

export default Footer
