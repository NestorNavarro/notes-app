import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { NotesScreen } from '../components/notes/NotesScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const auth = useSelector(state => state.auth);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(auth?.token && typeof auth.user?.uid === 'number'){
            setIsAuth(true);
        } else{
            setIsAuth(false);
        }
    }, [auth]);

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" isAuth={ isAuth } component={ NotesScreen } />
                    <PublicRoute path="/auth" isAuth={ isAuth } component={ AuthRouter } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
