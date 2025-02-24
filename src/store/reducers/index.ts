import { configureStore } from '@reduxjs/toolkit'
import appReducer from './carrinho'
import api from '../../services/api'

export const store = configureStore({
  reducer: {
    app: appReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
