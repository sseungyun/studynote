/**
 * HTTP GET 파라미터를 전달받는 페이지
 */

import React from "react";

// GET 파라미터 추출 기능을 갖는 useLocation() 함수를 react-router-dom 패키지로부터 참조함.
import { useLocation } from "react-router-dom";


const DepartmentGet = () => {
    // 기존의 콘솔 출력 내용 삭제함.
    console.clear();

    // 요청 데이터 확인하기 
    const location = useLocation(); // 객체들 중 우리에게 필요한 값 , search: '?id=101&msg=hello'
    console.group("useLocation()의 리턴값 확인");
    console.debug(location); 
    console.groupEnd();

    //QueryString을 객체 형태로 변환
    const {search} = location;
    const query = new URLSearchParams(search);
    console.group("QeruyString 확인");
    console.debug("query");
    console.groupEnd();

    // 추출된 변수값과 데이터 타입 확인
    console.group("파라미터 처리 결과 확인");
    console.debug("요청된 학과번호 값=%s (%s)" , query.get('id'), typeof query.get('id'));   // get메서드로 객체에서 id값, msg값 추출 후 데이터 타입이 문자열(string)인걸 확인 
    console.debug("요청된 메세지 내용=%s (%s)" , query.get('msg'), typeof query.get('msg')); // queryString에 전달되는 값은 문자열(string)인걸 확인 숫자로 바꾸려면 형 변환 필요.            
    console.groupEnd();

    // 한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    // 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> Ajax
    const departmentList = {
        item: [
           { id: 101, dname: '컴퓨터공학과', loc:'1호관' },
           { id: 102, dname: '멀티미디어학과', loc:'2호관' }
        ]
    };

    // 전달된 파라미터를 정수로 변환
    const id = parseInt(query.get('id')); //query 객체에서 학과번호 추출한 후 id가 문자열(string)이었으니 정수로 바꿔준다.

    // 조회결과가 저장될 객체
    let departmentItem = null;

    // 미리 준비한 JSON에서 deptno값이 일치하는 정보를 조회
    departmentList.item.some((item, index) => {
        if (item.id === id) {          // 준비된 JSON안에 있는 id값과 QueryString안에 있는 id값이 일치한다면 
            departmentItem = item;     // 그 값을 준비한 빈 배열에 복사하고
            return true;               // some함수는 return한 값이 true라면 실행 종료.
        }

        return false;                  // 같은게 없으면 계속 진행.
    });

    // 조회 결과가 없는 경우
    if (!departmentItem) {
        return (<he>존재하지 않는 데이터에 대한 요청입니다.</he>)
    }
    // 함수 안에서 return이면 그 즉시 실행 중단이니 아래쪽은 실행 안됨.
    // 그렇지 않다면 정상 화면 출력
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

export default DepartmentGet;