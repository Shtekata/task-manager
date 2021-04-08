import { useContext, useEffect, useState } from "react";
import * as authService from '../../../../services/authService';
import { Context } from "../../Context";
import profilePicture from '../../../../img/profile.png'

const Profile = () => {

    const [state, dispatch] = useContext(Context);
    const [user, setUser] = useState(null);

    useEffect(() => {
        authService.getUser(state.userId)
            .then(x => setUser(x))
            .catch(x => {
                !x.username ? dispatch({ type: 'user', payload: null }) : dispatch({ type: 'user', payload: x.username });
                dispatch({ type: 'err', payload: x.message });
            });
    }, []);

    const onClickHandler = () => {
        console.log('Hello')
    };

    return (
        <div className="page">
            <div className="profile">
                {user ? user.pictureUrl ? <img src="userWithUsernameAndTel.photoURL" alt="userWithUsernameAndTel" /> : <img src={profilePicture} alt="default userWithUsernameAndTel" />:''}
                <h3>User Info:</h3>
                <div className="flex">
                    <p>Username: {user?user.username:''}</p>
                    <p className="fill">please fill in your details...</p>
                    <p></p>
                </div>
                <div className="flex">
                    <p>Alternate Email: </p>
                    <p className="fill">please fill in your details...</p>
                    <p></p>
                </div>
                <div className="flex">
                    <p>Phone: </p>
                    <p className="fill">+359 please fill in your details...</p>
                    <p>+359 </p>
                </div>
                <div className="flex">
                    <p>Address: </p>
                    <p className="fill">please fill in your details...</p>
                    <p></p>
                </div>
                <button className="edit-button" onClick={onClickHandler}>Edit</button>
            </div>
            <style jsx>{`
            .page {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 80vh;
            }
            .profile {
                max-width: 31vw;
                padding: 2.5em;
                border: .3em solid rgb(255, 0, 36);
                border-radius: 50%;
                color: #444;
                background-color: hsla(0, 0%, 94.1%, .8);
                box-shadow: 0 0 1em 0 #000;
                max-height: 56vh;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                flex-grow: 1;
            }
            .profile h3 {
                text-decoration: underline;
            }
            .profile img {
                width: 7em;
                height: 7em;
                margin: 0 auto;
                display: block;
                border-radius: 50%;
            }
            .flex {
                display: flex;
            }
            .flex p:first-child {
                width: 35%;
                text-align: right;
                margin: .5em;
            }
            .flex p:last-child {
                width: 55%;
                text-align: left;
                margin: .5em;
                font-weight: bold;
            }
            .profile button {
                color: #FF0024;
                border: none;
                border-radius: 50%;
                padding: 1em;
                outline: none;
                margin: 0 10px;
                background-color: #20526E;
                font-size: 1.2em;
                font-weight: bold;
                align-self: center;
            }
            .flex>input, .flex>div {
                width: 50%;
                text-align: left;
                margin: .5em;
            }
            .flex>div>input {
                width: 55%;
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
            `}</style>
        </div>
    )
};
export default Profile;