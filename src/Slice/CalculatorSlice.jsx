import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
  initialState: 0,
  name: "Calculator",

  reducers: {
    add: (state, action) => {
      return (state =
        Number(action?.payload?.firstValue) +
        Number(action?.payload?.secondValue));
    },

    sub: (state, action) => {
        return (state =
          Number(action?.payload?.firstValue) -
          Number(action?.payload?.secondValue));
      },

      mul:(state, action) => {
        return (state =
          Number(action?.payload?.firstValue) *
          Number(action?.payload?.secondValue));
      },

      div:(state, action) => {
        return (state =
          Number(action?.payload?.firstValue) /
          Number(action?.payload?.secondValue));
      },
  },
});

export const {add,sub,mul,div} = CalculatorSlice.actions;
export default CalculatorSlice.reducer
