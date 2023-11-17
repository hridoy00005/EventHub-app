import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStore: (state, action) => {
      const { user, token } = action?.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
      // window.location.reload();
    },
    logoutStore: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.user = {};
    },
    updateProfile: (state, action) => {
      state.user={...state.user, ...action.payload}
    },
  },
});

export const { loginStore, logoutStore, updateProfile } = authSlice.actions;

export default authSlice;
