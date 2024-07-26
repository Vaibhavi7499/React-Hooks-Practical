import useFetch from "../customHook/useFetch";

let EmployeeList = () => {
  const [employee, errorMessage] = useFetch("http://localhost:8000/emplist");

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
      {errorMessage.length ? <h1>Something Went Wrong</h1> : ""}
    </div>
  );
};
export default EmployeeList;
