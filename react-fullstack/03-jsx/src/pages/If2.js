import React from 'react'

const If2 = () => {
  const isLogin = true;

  return (
    <div>
      <h2>If2</h2>
      {isLogin === true && <p>로그인 되셨습니다. </p>}
      {/** isLogin이 true라면 .. &는 전체가 참이어야함 
        *  만약 const isLogin이 = false라면 앞에 조건 자체가 거짓.
        *  그렇기 때문에 <p>로그인 되셨습니다. </p> 뒤에 부분 자체를
        *  안본다. 
        * 
        *  값이 true면 AND 연산자는 결과가 참인지 확인하기 위해 뒤에 내용도 
        *  확인을 해야 한다.
        *  그러는 동안 <p></p> 태그 부분이 출력이 된다.
        *  결론적으로는 앞에 조건이 참이면 뒤에 태그를 노출시켜라가 됨.
        */}
    </div>
  );
};



export default If2;
