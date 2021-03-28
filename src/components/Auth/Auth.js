import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

const Auth = ({ loginHandler, logoutHandler }) => (
    <Switch>
        <Route path='/auth/login'><Login loginHandler={loginHandler} /></Route>
        <Route path='/auth/logout'><Logout logoutHandler={logoutHandler} /></Route>
    </Switch>
);
export default Auth;