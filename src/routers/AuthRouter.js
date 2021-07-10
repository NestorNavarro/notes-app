import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RecoverScreen } from '../components/auth/RecoverScreen';
import { ResetScreen } from '../components/auth/ResetScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/recover" component={RecoverScreen} />
                    <Route exact path="/auth/reset" component={ResetScreen} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </div>
    );
}
