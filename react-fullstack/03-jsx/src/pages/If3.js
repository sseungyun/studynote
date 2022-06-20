import React from 'react'

/**
 * jsx 조건분기 (3) - 조건식과 '||' 연산자 사용
 * 
 * {조건 || (조건이 거짓인 경우 출력할 내용)}
 * 
 * 조건이 참인 경우 표시되는 내용 없음
 * 
 */
const If3 = () => {
  /** 출력할 내용이 없는 경우 */
  // -> undefined, null, 0 , false, '' (빈문자열) 중 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않음.
  // -> 특히 undefined 변수를 바로 리턴하는 경우 에러 발생함
  const articlaList = undefined;

  return (
    <div>
      <h2>If3</h2>
      {articlaList || <p>조회된 게시글이 없습니다. </p>}
      {/** false상태고 or 연산자는 하나라도 참이면 true 
         * or연산자는 조건이 거짓일 때 뒤에 부분을 출력한다가됨.
         */}
    </div>
  )
}



export default If3;
