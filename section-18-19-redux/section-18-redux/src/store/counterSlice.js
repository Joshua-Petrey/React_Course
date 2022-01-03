import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;