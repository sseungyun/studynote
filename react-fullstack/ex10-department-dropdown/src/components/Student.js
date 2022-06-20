import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const Student = ({ deptno }) => {
  const [visible, setVisible] = useState(false);
  const [student, setStudent] = useState([]);
  useEffect(() => {
    if (deptno > -1) {
      setVisible(true);
      (async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/student?deptno=${deptno}`
          );
          setStudent((student) => response.data);
        } catch (e) {
          console.errer(e);
          console.log("Ajax 연동 실패");
        } finally {
          setVisible(false);
        }
      })();
    }
  }, [deptno]);
  return (
    <div>
      <h3>학생목록</h3>
      <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>아이디</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.grade}</td>
                <td>{v.idnum.substring(0, 6)}-*******</td>
                <td>{v.birthdate.substring(0, 10)}</td>
                <td>{v.tel}</td>
                <td>{v.height}</td>
                <td>{v.weight}</td>
                <td>{v.deptno}</td>
                <td>{v.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Spinner visible={visible} />
    </div>
  );
};
export default Student;
