import { configureStore } from "@reduxjs/toolkit";

import ExpenseSlice from "../Slice/ExpenseSlice";
import CounterSlice from "../Slice/CounterSlice";
import CalculatorSlice from "../Slice/CalculatorSlice";

export const store = configureStore({
  reducer: {
    expense: ExpenseSlice,
    counter: CounterSlice,
    calculator: CalculatorSlice,
  },
});
