import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export const { login } = loginSlice.actions;

export const selectUser = (state) => state.user.user;

export default loginSlice.reducer;
