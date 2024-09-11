import { configureStore } from "@reduxjs/toolkit";

import ExpenseSlice from "../Slice/ExpenseSlice";

const expenseStore = configureStore({
  reducer: {
    expense: ExpenseSlice,
  },
});

export default expenseStore;
