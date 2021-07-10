import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NotesScreen } from '../components/notes/NotesScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ NotesScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
}
