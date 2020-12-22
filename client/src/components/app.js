import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AuthContainer from './UserAuth/AuthContainer.js';
import RegisterForm from './UserAuth/RegisterForm.js';
import LoginForm from './UserAuth/LoginForm.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/register'
                        render={(props) => (
                            <AuthContainer {...props}>
                                {(props) => (
                                    <RegisterForm {...props} />
                                )}
                            </AuthContainer>
                        )}
                    />
                    <Route
                        exact
                        path='/login'
                        render={(props) => (
                            <AuthContainer {...props}>
                                {(props) => (
                                    <LoginForm {...props} />
                                )}
                            </AuthContainer>
                        )}
                    />
                </Switch>
            </Router>
        )
    }
};
