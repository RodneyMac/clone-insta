import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./data/user/userSlice";

export default configureStore({
  reducer: {
      user: userReducer
  },
})

