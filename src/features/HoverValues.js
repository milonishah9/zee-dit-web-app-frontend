import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'hoverValue',
  initialState: {
    hoverValue: '',
  },
  reducers: {
    setHoverValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setHoverValue } = counterSlice.actions

export const selectCount = (state) => state.hoverValue.value

export default counterSlice.reducer
