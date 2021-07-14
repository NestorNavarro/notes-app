import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from '../reducers/authReducers';
import { noteReducers } from '../reducers/noteReducers';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducers,
    ui: uiReducer,
    note: noteReducers,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'ui', 'note'],
  }
   
export const persistedReducer   = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export const persistor = persistStore(store);