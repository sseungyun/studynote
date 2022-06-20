import React from "react";
import Professor from "./components/Professor";
import Student from "./components/Student";
import Spinner from "./components/Spinner";
import axios from "axios";
function App() {
  const [department, setDepartment] = React.useState([]);
  const [value, setValue] = React.useState(-1);
  const [loading, setLoading] = React.useState(false);
  const change = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);
  React.useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const resopnse = await axios.get("http://localhost:3001/department");
        setDepartment(resopnse.data);
      } catch (e) {
        console.error(e);
        alert("Ajax 통신 오류");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      <Spinner visible={loading} />
      <h1>Exam 09</h1>
      <hr />
      <select onChange={change}>
        {department.map((v, i) => {
          return (
            <option key={i} value={v.id}>
              {v.dname}
            </option>
          );
        })}
      </select>
      <Student deptno={value} />
      <Professor deptno={value} />
    </div>
  );
}
export default App;
