import {css} from '@emotion/react'

const FormInput = props => (
  <p>
    <label
      css={css`
        display: block;
        font-weight: bold;
        margin: 0.5rem;
      `}
      htmlFor={props.name}>
      {props.label}
    </label>
    <span
      css={css`
        display: flex;
        position: relative;
        align-items: center;
      `}>
      <input
        css={css`
          border: none;
          flex: 1 1 auto;
          padding: 0.8rem;
          outline: none;
          background: transparent;
          z-index: 1;
          order: 2;
          &:focus + span {
            border-color: #090;
          }
          &:focus + span + .fas {
            color: #090;
          }
        `}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
      <span
        css={css`
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 0.3rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}></span>
      <i
        css={css`
          padding: 0 0 0 0.8rem;
          font-size: 0.9em;
          z-index: 1;
          order: 1;
        `}
        className={props.icon}></i>
    </span>
  </p>
)

export {FormInput}
