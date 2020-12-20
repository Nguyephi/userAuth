import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AuthContainer from './UserAuth/AuthContainer';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/register'
                        render={(props) => (
                            <AuthContainer {...props} />
                        )}
                    />
                </Switch>
            </Router>
        )
    }
};
