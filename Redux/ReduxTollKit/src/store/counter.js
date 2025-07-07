import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
      console.log(state, action);
    },
    decrement: (state, action) => {
      state.counterVal--;
      console.log(state, action);
    },
    add: (state, action) => {
      state.counterVal = state.counterVal + Number(action.payload.num);
      console.log(state, action);
    },
    sub: (state, action) => {
      state.counterVal = state.counterVal - Number(action.payload.num);
      console.log(state, action);
    },
  },
});

export const counterAction = counterSlice.actions;
 export default counterSlice; 