import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    advertise: (state, action) => {
      
      state.value = [...state.value, action.payload];
    },
  },
});

export const { advertise } = userSlice.actions;

export default userSlice.reducer;
