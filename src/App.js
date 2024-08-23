import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import StudentList from "./component/StudentList";
import Layout from "./Layout";
import CustomerList from "./component/CustomerList";
import counterContext from "./ContextAPI/ContextList";
import { useState } from "react";
import CounterA from "./ContextAPI/CounterA";
import CounterB from "./ContextAPI/CounterB";
import ContactManager from "./ContactManager";
import Todo from "./component/useReducerHook/Todo";
import TodoTask from "./component/todoTask/TodoTask";
import CounterComp from "./component/CounterComp";
import { CounterCompA } from "./component/CounterCompA";
import UseRefHook from "./UseRefHook";
import SignInForm from "./SignInForm";
import DtitleA from "./component/DtitleA";
import DtitleB from "./component/DtitleB";
import AddFruits from "./component/Pract-useReducer/AddFruits";
import ShoppingApps from "./component/Pract-useReducer/Shopping/ShoppingApps";
import Myorders from "./component/Pract-useReducer/Shopping/Myorders";
import PractUseRefHook from "./PractUseRefHook";
import ExpenseTracker from "./component/Pract-useReducer/ExpenseTracker/ExpenseTracker";
import Usememo from "./Usememo";
import ParentC from "./memo/ParentC";
import UsememoPractiseEx from "./UsememoPractiseEx";
import TodoExamplePract from "./TodoExamplePract";

function App() {
  let [count, setCount] = useState(0);
  let obj = {
    count,
    setCount,
  };
  return (
    <div>
      {/* <counterContext.Provider value={obj}>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/emplist" element={<EmployeeList />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/customerlist" element={<CustomerList />} />
            <Route path="/countera" element={<CounterA />} />
            <Route path="/counterb" element={<CounterB/>} />
            <Route path="/contactmanager" element={<ContactManager/>} />
            <Route path="/useReducer" element={<Todo/>} />
            <Route path="/todotask" element={<TodoTask/>} />
            <Route path="/counterComp" element={<CounterComp/>} />
            <Route path="/counterCompA" element={<CounterCompA/>} />
            <Route path="/dtitlea" element={<DtitleA/>} />
            <Route path="/dtitleb" element={<DtitleB/>} />
            <Route path="/fruitstodo" element={<AddFruits/>} />
            <Route path="/shoppingapp" element={<ShoppingApps/>} />
            <Route path="/myorders" element={<Myorders/>} />
            <Route path="/expensetracker" element={<ExpenseTracker/>} />
            <Route path="/usememo" element={<Usememo/>} />
            <Route path="/parentc" element={<ParentC/>} />
          </Routes>
        </BrowserRouter>
      </counterContext.Provider> */}
      {/* <UseRefHook/> */}
      {/* <SignInForm/> */}
      {/* <PractUseRefHook></PractUseRefHook> */}
      {/* <UsememoPractiseEx></UsememoPractiseEx> */}
      <TodoExamplePract/>
            </div>
  );
}

export default App;
