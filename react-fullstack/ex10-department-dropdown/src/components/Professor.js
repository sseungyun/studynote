import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const Professor = ({ deptno }) => {
  const [visible, setVisible] = useState(false);
  const [professor, setProfessor] = useState([]);
  useEffect(() => {
    if (deptno > -1) {
      setProfessor((student) => student.filter((v, i) => v.id === deptno));
      setVisible(true);
      (async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/professor?deptno=${deptno}`
          );
          setProfessor((professor) => response.data);
        } catch (e) {
          console.errer(e);
          console.log("Ajax 연동 실패");
        } finally {
          // 로딩 종료
          setVisible(false);
        }
      })();
    }
  }, [deptno]);
  return (
    <div>
      <h3>교수목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th>교수번호</th>
            <th>교수이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소속학과번호</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.position}</td>
                <td>{v.sal}</td>
                <td>{v.hiredate.substring(0, 10)}</td>
                <td>{v.comm}</td>
                <td>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Spinner visible={visible} />
    </div>
  );
};
export default React.memo(Professor);
