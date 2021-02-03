import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Login from './components/Login'
import FG from "./components/ForgotPassword";

export default function routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/forgot-password" component={FG} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
