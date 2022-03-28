import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    showModal: false,
    showFollowersModal: false,
    showPosts: true,
  },
  reducers: {
    changeModal: (state) => {
      state.showFollowersModal = false;
      if(!state.showModal) {
        state.showModal = !state.showModal
      }
    },
    changeFollowersModal: (state) => {
      state.showModal = false;
      if(!state.showFollowersModal) {
        state.showFollowersModal = !state.showFollowersModal
      }
    },
    closeModal: (state) => {
      state.showModal = false;
      state.showFollowersModal = false;
    },
    changePosts: (state) => {
      state.showModal = false;
      state.showFollowersModal = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeModal, changeFollowersModal, closeModal, changePosts } = commonSlice.actions

export default commonSlice.reducer