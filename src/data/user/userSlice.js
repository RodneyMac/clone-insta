import { createSlice } from '@reduxjs/toolkit';
import image1 from "../../components/Followers/img/img-1.png";
import image2 from "../../components/Followers/img/img-2.png";
import image3 from "../../components/Followers/img/img-3.png";
import image4 from "../../components/Followers/img/img-4.png";
import img1 from "../../components/Posts/img/img1.jpeg";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "user",
    email: "user@gmail.com",
    id: "845078",
    followers: [
      {
        id: 1,
        username: "johnnyrotten",
        name: "John",
        img: image1,
      },
      {
        id: 2,
        username: "moonkate",
        name: "Kate",
        img: image2,
      },
      {
        id: 3,
        username: "paul_90",
        name: "Paul",
        img: image3,
      },
      {
        id: 4,
        username: "onlynani",
        name: "Hannah",
        img: image4,
      }
    ],
    post: [{
      img1: img1,
    }],
    following: [
      {
        id: 1,
        username: "johnnyrotten",
        name: "John",
        img: image1,
      },
      {
        id: 2,
        username: "moonkate",
        name: "Kate",
        img: image2
      },
      {
        id: 3,
        username: "paul_90",
        name: "Paul",
        img: image3
      },
      {
        id: 4,
        username: "onlynani",
        name: "Hannah",
        img: image4
      }
    ],
    img: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
  },

  unfollow: true,

  reducers: {
    changeName: (state) => {
        state.name= "Usuario"
    },
    deleteFollower: (state, action) => {
      return ({
        ...state,
        followers: state.followers.filter((item) => item.id != action.payload.id)
      })
    },
    followUnfollow: (state) => {
        if(state.unfollow) {
          return {
            unfollow: !state.unfollow
          }
        }
        return state
    }
    // followUnfollow: (state, action) => {
    //   return({
    //     ...state,
    //     following: state.following.filter((item) => item.id != action.payload.id ? true : false)
    //   });
    // }
    // unfollow: (state) => {
    //     state.following = true ? "Siguiendo" : "Seguir";
    // }
    // unfollow: (state, action) => {
    //   return({
    //     ...state,
    //     following: state.following.filter((item) => item.id != action.payload.id && item.id === true ? "Siguiendo" : "Seguir")
    //   })
    // }
    // unfollow: (state, action) => {
    //   return({
    //     ...state,
    //     following: state.following.filter((item) => item.id != action.payload.id)
    //   });
    // }
  },
});

// Action creators are generated for each case reducer function
export const { changeName, deleteFollower, followUnfollow} = userSlice.actions

export default userSlice.reducer