import React from "react";
import ProfessorSub from "../components/ProfessorSub";
import myschool from "../myschool";
import myStyle from '../assets/css/mystyle.module.css';
const Professor = () => {
  const { professor } = myschool;
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>교수번호</th>
            <th>교수이름</th>
            <th className={myStyle.myCssBox}>아이디</th>
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
              <ProfessorSub
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                position={v.position}
                sal={v.sal}
                hiredate={v.hiredate}
                comm={v.comm}
                deptno={v.deptno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Professor;
