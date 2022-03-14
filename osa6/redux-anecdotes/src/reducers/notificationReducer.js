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

export const {notify, clear} = notificationSlice.actions
export default notificationSlice.reducer