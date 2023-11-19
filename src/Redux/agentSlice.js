import { createSlice } from "@reduxjs/toolkit";

const agentSlice = createSlice({
  name: "agentSlice",
  initialState: {
    drawerstate: "dashboard",
  },
  reducers: {
    funcdrawerstate: (state, action) => {
      state.drawerstate = action.payload;
    },
  },
});
export const { funcdrawerstate } = agentSlice.actions;

export default agentSlice.reducer;
