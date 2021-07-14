import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

export const NoteApp = () => {
    return (
        <Provider store={ store }>
             <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
             </PersistGate>
        </Provider>
    );
}
