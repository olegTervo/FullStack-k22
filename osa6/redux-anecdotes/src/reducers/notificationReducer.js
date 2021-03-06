import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: ""
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clear() {
      return { message: "" }
    },
    notify: {
      reducer: (state, action) => {
        return {message: action.payload}
      },
      prepare: (message) => {
        return { payload: message }
      }
    },
  },
})

export const notifyForATime = (message, secounds) => {
  return async dispatch => {
    dispatch(notify(message))
    setTimeout(() => dispatch(clear()), Number(secounds)*1000)
  }
}

export const {notify, clear} = notificationSlice.actions
export default notificationSlice.reducer