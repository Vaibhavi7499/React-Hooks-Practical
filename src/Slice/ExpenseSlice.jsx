import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "expense",
  arr: [],

  reducers: {
    ADD_EXPENSE: [...arr, { name: action?.payload }],
  },
});

export const { ADD_EXPENSE } = expenseSlice.actions;
export default ExpenseSlice.reducer;
