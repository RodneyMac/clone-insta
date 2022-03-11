import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "user",
    email: "user@gmail.com",
    id: "845078",
    followers: [],
    post: [],
    following: [],
    img: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
  },
  reducers: {
    changeName: (state) => {
        state.name= "Lucas"
    }
},
})

// Action creators are generated for each case reducer function
export const { changeName } = userSlice.actions

export default userSlice.reducer