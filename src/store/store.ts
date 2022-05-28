import { configureStore } from '@reduxjs/toolkit'
import cats from './slices/cats'
export const store = configureStore({
    reducer: {
    'cats': cats
    }
  })
  

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch