import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';
import signInSlice from './auth/authSlice';
import { filterSlice } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']

}


export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, signInSlice.reducer),
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false

        }),
});
export const persistor = persistStore(store)



