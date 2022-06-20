/**
 * PATH 파라미터를 전달받는 페이지
 */

import React from "react";

//PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로부터 참조함.
/* App.js에서 보낸 파라미터 201/hello , 202/world를 useParams을 통해 가져옴. 
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
*/
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
    // 기존의 콘솔 출력 내용 삭제함.

    console.clear();

    // 요청 데이터 확인하기 
    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);  // json객체로 바로 떨어짐. 
    console.groupEnd();

    // 필요한 변수값과 데이터 타입 확인           params.id,msg라고 호출하는 이유는 App.js에서 <Route path="/department_path/:id/:msg" element={<DepartmentPath/>} /> 변수지정 했기 때문.
    console.debug("요청된 학과번호 값=%s (%s)" , params.id , typeof params.id);    //GET방식과 달리 json객체로 바로 떨어져 함수로 찾을 필요 없고 .으로 찾아준다.
    console.debug("요청된 메세지 내용=%s (%s)" , params.msg, typeof params.msg);   
    console.groupEnd();

    // 한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    // 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> Ajax

    const departmentList = {
        item: [
           { id: 201, dname: '전자공학과', loc:'3호관' },
           { id: 202, dname: '기계공학과', loc:'4호관' }
        ]
    };

    // 전달된 파라미터를 정수로 변환
    const id = parseInt(params.id);

    // 조회결과가 저장될 객체
    let departmentItem = null;

    // 미리 준비한 JSON에서 deptno값이 일치하는 정보를 조회
    departmentList.item.some((item, index) => {     // { id: 201, dname: '전자공학과', loc:'3호관' } 객체 하나를 item이라는 이름으로 받아와서
        if (item.id === id) {                       // item의 id가 querystring에 id와 일치하면
            departmentItem = item;                  // 복사하고 반복 중단
            return true;
        }

        return false;
    });

    // 조회 결과가 없는 경우
    if (!departmentItem) {
        return (<he>존재하지 않는 데이터에 대한 요청입니다.</he>)
    }

    // 정상 화면 출력
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );

};

export default DepartmentPath;