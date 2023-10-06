import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './slices/accountsSlice'
import documentsReducer from './slices/documentsSlice'
import loaderReducer from './slices/loaderSlice'
import messageReducer from './slices/messageSlice'

export const rootReducer = {
  accounts: accountsReducer,
  documents: documentsReducer,
  loader: loaderReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
