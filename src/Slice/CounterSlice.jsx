import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "counter",
  initialState: 0,

  reducers: {
    increment: (state) => state + 1,

    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
