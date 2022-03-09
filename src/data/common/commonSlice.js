import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    showModal: true
  },
  reducers: {
    showModal: (state) => {
        state.showModal= !state.showModal
    }
},
})

// Action creators are generated for each case reducer function
export const { changeName } = commonSlice.actions

export default commonSlice.reducer