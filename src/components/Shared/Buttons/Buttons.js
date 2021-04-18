import {css} from '@emotion/react'

const NavButton = props => (
  <div
    css={css`
      color: maroon;
      text-align: center;
      outline: none;
      margin: 0 30px;
      padding: 12px 15px;
      border-bottom: 3px solid maroon;
      border-radius: 50px;
      background-color: darkorange;
      &:hover {
        cursor: pointer;
        border-bottom: none;
        border-top: 3px solid maroon;
        font-weight: bold;
      }
    `}>
    {props.name}
  </div>
)

const FormButton = props => (
  <input
    type={props.type}
    value={props.value}
    onClick={props.onClick}
    css={css`
      display: block;
      padding: 0.6rem 1rem;
      border-radius: 0.4rem;
      text-decoration: none;
      font-weight: bold;
      background: #4b61a1;
      color: rgb(255, 255, 255);
      border: none;
      font-size: 1rem;
      margin-top: 2rem;
      outline: none;
    `}
  />
)

const FormButtons = props => (
  <div
    css={css`
      display: flex;
      justify-content: space-around;
    `}>
    <FormButton type={props.typeOne} value={props.valueOne} />
    <FormButton type={props.typeTwo} value={props.valueTwo} onClick={props.onClick} />
  </div>
)

export {NavButton, FormButton, FormButtons}
