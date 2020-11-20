import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Login from './login/Login';
import Register from './register/Register';
import ActivationSent from './register/ActivationSent';
import ActivationConfirm from './register/ActivationConfirm';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/register/sent" exact component={ActivationSent}/>
            <Route path="/register/confirm/:key" exact component={ActivationConfirm}/>
        </Switch>
    </BrowserRouter>
);