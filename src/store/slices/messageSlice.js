import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  msg: '',
  severity: undefined
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showSucceded: (state, action) => {
      state.show = true
      state.msg = action.payload
      state.severity = 'success'
      return state
    },
    showWarning: (state, action) => {
      state.show = true
      state.msg = action.payload
      state.severity = 'warning'
      return state
    },
    showError: (state, action) => {
      state.show = true
      state.msg = action.payload
      state.severity = 'error'
      return state
    },
    showInfo: (state, action) => {
      state.show = true
      state.msg = action.payload
      state.severity = 'info'
      return state
    },
    hideAlert: (state) => {
      state.show = false
      return state
    }
  }
})

const { reducer, actions } = messageSlice
export const { showSucceded, showWarning, showError, showInfo, hideAlert } = actions
export default reducer
