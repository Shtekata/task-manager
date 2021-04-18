import {css} from '@emotion/react'
import Message from '../../Errors/Message'
import {FormButtons} from '../Buttons'
import {FormInput} from '../Inputs'

const allCss = {display: 'block'}

const fieldsetLegendCss = {
  border: '1px solid #666',
  background: '#f9f9f9',
  borderRadius: '0.3rem',
  boxShadow: '0 0 1rem 0.1rem rgba(0, 0, 0, 0.1)',
}

const formCss = {
  maxWidth: '30rem',
  flexGrow: '1',
}

const fieldsetCss = {
  padding: '2.5em 2em 2em 2em',
  position: 'relative',
}

const legendCss = {
  width: '30%',
  padding: '0.5rem 1rem',
  left: '-1px',
  top: '-1.4rem',
  position: 'absolute',
}

const LoginForm = props => (
  <section
    css={css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
    <form css={[allCss, formCss]} onSubmit={props.onSubmitHandler}>
      <fieldset css={[allCss, fieldsetLegendCss, fieldsetCss]}>
        <legend css={[allCss, fieldsetLegendCss, legendCss]}>{props.legend}</legend>
        <FormInput label='Username' name='username' type='text' placeholder='Username' icon='fas fa-user' />
        <Message msg={props.usernameMsg} />
        <FormInput label='Password' name='password' type='password' placeholder='Password' icon='fas fa-key' />
        <Message msg={props.userPassMsg} />
        <FormButtons typeOne='submit' valueOne='Login' typeTwo='button' valueTwo='Back' onClick={props.onClick} />
      </fieldset>
    </form>
  </section>
)

const RegisterForm = props => (
  <section
    css={css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}>
    <form css={[allCss, formCss]} onSubmit={props.onSubmitHandler}>
      <fieldset css={[allCss, fieldsetLegendCss, fieldsetCss]}>
        <legend css={[allCss, fieldsetLegendCss, legendCss]}>{props.legend}</legend>
        <FormInput label='Username' name='username' type='text' placeholder='Username' icon='fas fa-user' />
        <Message msg={props.usernameMsg} />
        <FormInput label='Email' name='email' type='text' placeholder='Email' icon='fas fa-user' />
        <Message msg={props.userEmailMsg} />
        <FormInput label='Password' name='password' type='password' placeholder='Password' icon='fas fa-key' />
        <Message msg={props.userPassMsg} />
        <FormInput
          label='Repeat Password'
          name='rePassword'
          type='password'
          placeholder='Repeat password'
          icon='fas fa-key'
        />
        <Message msg={props.userRePassMsg} />
        <FormButtons typeOne='submit' valueOne='Login' typeTwo='button' valueTwo='Back' onClick={props.onClick} />
      </fieldset>
    </form>
  </section>
)
export {LoginForm, RegisterForm}
