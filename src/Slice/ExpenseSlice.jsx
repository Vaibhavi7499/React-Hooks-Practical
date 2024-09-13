import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  initialState: [],
  name: "expense",

  reducers: {
    addExpenses: (state, action) => {
      state.push(action?.payload);
    },

    removeExpenses: (state, action) => {
      return state.filter((e) => {
        return e?.id !== action?.payload;
      });
    },

    updateExpenses: (state, action) => {
      return state.map((e) => {
        if (e?.id === action?.payload.id) {
          return {
            ...e,
            expenseName: action?.payload.expenseName,
          };
        } else {
          return e;
        }
      });
    },
  },
});

export const { addExpenses, removeExpenses, updateExpenses } =
  ExpenseSlice.actions;
export default ExpenseSlice.reducer;
