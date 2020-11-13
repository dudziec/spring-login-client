import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Login from './login/Login';
import Register from './register/Register';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
        </Switch>
    </BrowserRouter>
);