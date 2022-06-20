import React from "react";
import myschool from '../myschool';

const Department = () => {
  const {department} = myschool;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
          </tr>
        </thead>
          {department.map((v, i) => {
            return(
              <tr>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>                
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Department;
