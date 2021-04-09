import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import * as authService from '../../../../services/authService';
import profilePicture from '../../../../img/profile.png'
import { Form, Formik, useField } from 'formik';
import * as y from 'yup';
import Message from "../../../Errors/Message/Message";

const CustomTextInput = ({...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='custom-text-input'>
            <input className='grow' {...field} {...props} />
            {meta.touched && meta.error ? <Message msg={meta.error} /> : null}
        </div>
    );
};

const CustomSelectInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Fragment>
            <select className='selectPhoneCode' {...field} {...props} />
            {meta.touched && meta.error ? <Message msg={meta.error} /> : null}
        </Fragment>
    );
};

const Profile = () => {

    const [state, dispatch] = useContext(Context);
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        authService.getUser(state.userId || localStorage.getItem('userId'))
            .then(x => setUser(x.user))
            .catch(x => {
                !x.username ? dispatch({ type: 'user', payload: null }) : dispatch({ type: 'user', payload: x.username });
                dispatch({ type: 'err', payload: x.message });
            });
    }, [state]);

    const onEditClickHandler = () => {
        setEditMode(true);
    };

    const onCancelClickHandler = () => {
        setEditMode(false);
    }

    return (
        <Fragment>
            <Formik
                initialValues={{
                    photoUrl: '',
                    username: '',
                    email: '',
                    alternativeEmail: '',
                    phoneNumber: '',
                    address: '',
                    selectPhoneCode: '+349'
                }}
                validationSchema={y.object({
                    photoUrl: y.string().min(5, 'Must be at least 5 characters').max(200, 'Must be 200 characters or less'),
                    username: y.string().min(5, 'Must be at least 5 characters').max(20, 'Must be 20 characters or less').required('Required'),
                    email: y.string().email('Invalid email').required('Required'),
                    alternativeEmail: y.string().email('Invalid email'),
                    phoneNumber: y.number('Must fill only numbers').positive().integer(),
                    address: y.string().min(5, 'Must be at least 5 characters').max(500, 'Must be 500 characters or less'),
                    selectPhoneCode: y.string().oneOf(['+349', '+359', '+369', '+379', '+389'], 'Invalid phone code')
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    values.phoneNumber = values.selectPhoneCode + values.phoneNumber;
                    console.log(values);
                    resetForm();
                    setSubmitting(false);
                }}
            >
                {props => (
                    <Form>
                        <div className="page">
                            <div className="profile">
                                {user ? user.pictureUrl
                                    ? <img src="userWithUsernameAndTel.photoURL" alt="userWithUsernameAndTel" />
                                    : <img src={profilePicture} alt="default userWithUsernameAndTel" />
                                    : ''}
                                <h3>User Profile:</h3>
                                {editMode ?
                                    <div className="flex">
                                        <label htmlFor='photoUrl'>Photo URL: </label>
                                        <CustomTextInput type="text" name="photoUrl" id="photoUrl" />
                                    </div>
                                    : null}
                                <div className="flex">
                                    {editMode ? <label htmlFor='username'>Username: </label> : <p>Username: </p>}
                                    {user ? editMode
                                        ? <CustomTextInput type='text' name='username' id='username' placeholder='Username' />
                                        : user.username
                                            ? <p>{user.username}</p>
                                            : <p className="fill">please fill in your details...</p>
                                        : ''}
                                </div>
                                <div className="flex">
                                    {editMode ? <label htmlFor='email'>Email: </label> : <p>Email: </p>}
                                    {user ? editMode
                                        ? <CustomTextInput type='text' name='email' id='email' />
                                        : user.email
                                            ? <p>{user.email}</p>
                                            : <p className="fill">please fill in your details...</p>
                                        : ''}
                                </div>
                                <div className="flex">
                                    {editMode ? <label htmlFor='alternativeEmail'>Alternate Email: </label> : <p>Alternate Email: </p>}
                                    {user ? editMode
                                        ? <CustomTextInput type='text' name='alternativeEmail' id='alternativeEmail' />
                                        : user.alternativeEmail
                                            ? <p>{user.alternativeEmail}</p>
                                            : <p className="fill">please fill in your details...</p>
                                        : ''}
                                </div>
                                <div className="flex">
                                    {editMode ? <label htmlFor='phoneNumber'>Phone: </label> : <p>Phone: </p>}
                                    {user ? editMode
                                        ? <div className='grow flex'>
                                            <CustomSelectInput name="selectPhoneCode" id="selectPhoneCode" class="selectPhoneCode">
                                                <option value="+349">+349</option>
                                                <option value="+359">+359</option>
                                                <option value="+369">+369</option>
                                                <option value="+379">+379</option>
                                                <option value="+389">+389</option>
                                            </CustomSelectInput>
                                            <CustomTextInput type='text' className='grow phoneNumber' name='phoneNumber' id='phoneNumber' />
                                        </div>
                                        : user.phoneNumber
                                            ? <p>+359 {user.phone}</p>
                                            : <p className="fill">+359 please fill in your details...</p>
                                        : ''}
                                </div>
                                <div className="flex">
                                    {editMode ? <label htmlFor='address'>Address: </label> : <p>Address: </p>}
                                    {user ? editMode
                                        ? <CustomTextInput type='text' name='address' id='address' />
                                        : user.address
                                            ? <p>{user.address}</p>
                                            : <p className="fill">please fill in your details...</p>
                                        : ''}
                                </div>
                                <div className="profile-buttons">
                                    {editMode ?
                                        <button className="edit-button" type='submit'>{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                                        : <button className="edit-button" onClick={onEditClickHandler}>Edit</button>}
                                    {editMode ? <button className="edit-button" onClick={onCancelClickHandler}>Cancel</button> : null}
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <style jsx>{`
            .page {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 80vh;
            }
            .profile {
              padding: 1.5rem;
              border: .3rem solid rgb(255, 0, 36);
              border-radius: 35%;
              color: brown;
              background-color: hsla(0, 0%, 94.1%, .8);
              box-shadow: 0 0 1em 0 #000;
              display: flex;
              flex-direction: column;
            }
            .profile h3 {
                text-decoration: underline;
                margin: 1rem;
            }
            .profile img {
                width: 7em;
                height: 7em;
                margin: 0 auto;
                display: block;
                border-radius: 50%;
            }
            .grow {
                flex-grow: 1;
            }
            .flex>input.phoneNumber {
                margin-right: 0;
            }
            .flex {
                display: flex;
                align-items: center;
            }
            .flex p:first-child {
                text-align: right;
                margin: .5em;
            }
            .flex p:last-child {
                text-align: left;
                margin: .5em;
                font-weight: bold;
                flex-grow: 1;
            }
            .profile button {
                color: #FF0024;
                border: none;
                border-radius: 12%;
                padding: .5em;
                outline: none;
                margin: 2rem 0.5rem 0 0.5rem;
                background-color: #20526E;
                font-size: 1.2em;
                font-weight: bold;
                align-self: center;
                width: 6rem;
                cursor: pointer;
            }
            .flex>input, .flex>div {
                text-align: left;
                margin: .5em;
            }
            .red-button {
                background-color: red;
            }
            .green-button {
                background-color: green;
            }
            input, select {
                padding: 0.5em;
            }
            .input-error {
                border-left: 3px solid red;
            }
            .error {
                color: red;
            }
            .fill {
                opacity: 0.5;
            }
            .err-msg {
                margin-top: 0.3rem;  
            }
            .custom-text-input {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            `}</style>
        </Fragment>
    )
};
export default Profile;