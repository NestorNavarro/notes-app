import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducers } from '../reducers/authReducers';
import { noteReducers } from '../reducers/noteReducers';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducers,
    ui: uiReducer,
    note: noteReducers,
});

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);