import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = ({ loginHandler, logoutHandler }) => (
    <Switch>
        <Route path='/auth/login'><Login loginHandler={loginHandler} /></Route>
        <Route path='/auth/register'><Register loginHandler={loginHandler} /></Route>
    </Switch>
);
export default Auth;