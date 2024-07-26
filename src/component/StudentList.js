import useFetch from "../customHook/useFetch";

let StudentList = () => {
  let [student, errorMessage] = useFetch("http://localhost:8000/studentlist");
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
      {errorMessage.length ? <h1>Something Went Wrong</h1> : ""}
    </div>
  );
};

export default StudentList;
