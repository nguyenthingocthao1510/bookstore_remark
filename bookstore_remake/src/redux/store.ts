import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let store: any;

export default configureStore({
    reducer: {}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;