import { compose, createStore, applyMiddleware, Middleware } from 'redux'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'

export type RootState = ReturnType<typeof rootReducer>

// const loggerMiddleware = (store: Store) => (next: (arg: UnknownAction) => void) => (action: UnknownAction): void => {
//     if (!action.type) {
//         return next(action)
//     }

//     console.log('type', action.type)
//     console.log('payload', action.payload)
//     console.log('current State', store.getState())

//     next(action)

//     console.log('next state', store.getState())
// }

type ExtendedPerssistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPerssistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter((middleware): middleware is Middleware => Boolean(middleware))

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)