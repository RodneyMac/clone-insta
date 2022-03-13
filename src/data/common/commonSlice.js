import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    showModal: false
  },
  reducers: {
    changeModal: (state) => {
        state.showModal= !state.showModal
    }
},
})

// Action creators are generated for each case reducer function
export const { changeModal } = commonSlice.actions

export default commonSlice.reducer