import React from "react";

const Expr = () => {
  const name = "리엑트";
  const age = 19;
  const color = "#f00";
  const message = "리액트는 가장 주목받는 프론트앤드 프레임워크 입니다.";

  /** 개발자가 직접 정의한 함수 */
  //문자열, 숫자               아래에서 15가 호출됨.
  const myEllipasis = (message, len) => {
    let str = message;
    if (str.length > len) {
      str = str.substring(0, len) + "...";
    } //서브스트링으로 문자열까지 짤라내고 ... 붙힘.
    return str;
  };

  return (
    <div>
      <h2>
        Expr <small>(jsx 기본 표현식)</small>
      </h2>

      {/*기본 변수 출력하기 - 간단한 사칙연산 가능*/}
      {/* 기본 변수를 사용할땐 중괄호를 사용한다. */}
      <h3>
        {name}님은 {age + 1}세 입니다.
      </h3>
      <p>
        <font color="#00f">{name}</font>님은&nbsp;
        {/* HTML 속성에 변수를 출력할 경우 따옴표를 사용할 수 없다.
        중요한건 변수를 속성으로 사용할때는 <font color = {color} 이때 중요한건 '' 따옴표가 안들어간다. 
        따옴표를 붙히고 속성으로 사용하면 문자열로 읽는다. */}
        <font color={color}>리액트 개발자</font>입니다.
      </p>

      {/* 사용자 정의 함수 호출하기 */}
      <blockquote>{myEllipasis(message, 15)}</blockquote>
            {/** 메세지라는 변수에 15값도 같이 줬음 */}
    </div>
  );
};

export default Expr;
