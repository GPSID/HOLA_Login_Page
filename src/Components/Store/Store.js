import storage from 'redux-persist/lib/storage'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {
    persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER
} from 'redux-persist'
import reducer from './Reducer'

const persistConfig = {
    key: 'checkedElements',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER]
        }
    })
})