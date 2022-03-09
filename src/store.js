import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./data/user/userSlice";
import useCommon from "./data/common/commonSlice";


export default configureStore({
  reducer: {
      user: userReducer,
      common: useCommon
  },
})

