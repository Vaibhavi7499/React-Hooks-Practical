import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../customHook/useFetch";

let EmployeeList = () => {
const [employee] = useFetch("http://localhost:8000/emplist")

  //let [employee, setEmpData] = useState([]);

//   function getEmpData() {
//     axios.get("http://localhost:8000/emplist").then((r) => {
//       setEmpData(r.data);
//     });
//   }

//   useEffect(() => {
//     getEmpData();
//   }, []);

  return (
    <div>
      <ul>
        {employee.map((e) => (
          <li key={e?.id}>{e?.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default EmployeeList;
