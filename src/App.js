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
import UseRefHook from "./UseRefHook";

function App() {
  
  let [count, setCount] = useState(0);
  let obj={
    count,
    setCount
  }
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
          </Routes>
        </BrowserRouter>
      </counterContext.Provider> */}
      <UseRefHook/>
    </div>
  );
}

export default App;
