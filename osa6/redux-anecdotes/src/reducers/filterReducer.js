import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: ""
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    clearFilter() {
      return { filter: "" }
    },
    changeFilter: {
      reducer: (state, action) => {
        return {filter: action.payload}
      },
      prepare: (filter) => {
        return { payload: filter }
      }
    },
  },
})

export const {changeFilter, clearFilter} = filterSlice.actions
export default filterSlice.reducer