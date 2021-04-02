import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = () => (
    <Switch>
        <Route path='/auth/login'><Login /></Route>
        <Route path='/auth/register'><Register /></Route>
    </Switch>
);
export default Auth;