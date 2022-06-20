import React from "react";

const If1 = () => {
  /** 조건에 따라 다른 jsx를 반환하는 함수 정의 */
              // 아래 함수서 true를 호출  
  const btnLogin = (isLogin) => {
    if (isLogin === true) {
      return <button type="button">Logout</button>;
    } else {
      return <button type="button">Login</button>;
    }
  };
  return (
    <div>
      <h2>If1</h2>
      {btnLogin(true)} {/** 여기서 함수 출력 */}
    </div>
  );
};

export default If1;
