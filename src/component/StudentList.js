import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../customHook/useFetch";

let StudentList = () => {
    let [student] = useFetch("http://localhost:8000/studentlist")
  //let [student, setStudentData] = useState([]);

//   function getStudentList() {
//     axios.get("http://localhost:8000/studentlist").then((res) => {
//       setStudentData(res.data);
//     });
//   }

//   useEffect(() => {
//     getStudentList();
//   }, []);

  return (
    <div>
      <ul>
        {student.map((e) => (
          <li key={e?.id}>{e?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
