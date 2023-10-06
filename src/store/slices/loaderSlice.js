import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showSpinner: () => true,
    hideSpinner: () => false
  }
})

const { reducer, actions } = loaderSlice
export const { showSpinner, hideSpinner } = actions
export default reducer
