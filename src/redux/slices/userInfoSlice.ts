import {createSlice} from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {}
  },
  reducers: {
    addUserInfo: (state,action) => {
      state.userInfo=action.payload
    }
  }
})

export const {addUserInfo}=userInfoSlice.actions

export default userInfoSlice.reducer