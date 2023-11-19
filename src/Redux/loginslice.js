import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginslice",
  initialState: {
    data: {},

    islogedin: false,
    userState:"",
    appState: "",
  },
  reducers: {
    funcuserState: (state, action) => {
      state.userState = action.payload;
    },
    funcData: (state, action) => {
      state.data = action.payload;
    },

    funclogedin: (state, action) => {
      state.islogedin = action.payload;
    },
    funcappState: (state, action) => {
      state.appState = action.payload;
    },
  },
});
export const { funcData, funclogedin,funcuserState } = loginSlice.actions;

export default loginSlice.reducer;
