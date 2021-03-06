import { createSlice } from '@reduxjs/toolkit';
import image1 from "../../components/Followers/img/img-1.png";
import image2 from "../../components/Followers/img/img-2.png";
import image3 from "../../components/Followers/img/img-3.png";
import image4 from "../../components/Followers/img/img-4.png";
import img1 from "../../components/Posts/img/img1.jpeg";
import img2 from "../../components/Posts/img/img2.jpeg";
import img3 from "../../components/Posts/img/img3.jpeg";

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
    post: [
      {
        img: img1,
      },
      {
        img: img2,
      },
      {
        img: img3
      }
  ],
    following: [
      {
        id: 1,
        username: "johnnyrotten",
        name: "John",
        img: image1,
        following: true
      },
      {
        id: 2,
        username: "moonkate",
        name: "Kate",
        img: image2,
        following: true
      },
      {
        id: 3,
        username: "paul_90",
        name: "Paul",
        img: image3,
        following: true
      },
      {
        id: 4,
        username: "onlynani",
        name: "Hannah",
        img: image4,
        following: true
      }
    ],
    img: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
  },

  reducers: {
    changeName: (state) => {
        state.name= "Usuario"
    },
    deleteFollower: (state, action) => {
      return ({
        ...state,
        followers: state.followers.filter((item) => item.id !== action.payload.id)
      })
    },
    unfollowRequest: (state, action) => {
      return ({
        ...state,
        following: state.following.map((item) => {
          if(item.id === action.payload.id) {
            return {...item, following: false}
          }
          return item;
        })
      })
    },
    followRequest: (state, action) => {
      return({
        ...state,
        following: state.following.map((item) => {
          if(item.id === action.payload.id) {
            return {...item, following: true}
          }
          return item;
        })
      })
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeName, deleteFollower, unfollowRequest, followRequest} = userSlice.actions

export default userSlice.reducer