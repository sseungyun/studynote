import React from "react";
import MyBox from "../components/MyBox";

const MyRef = () => {
  // 컴포넌트 렌더링시(화면에 등장을 하면) 콘솔에 출력된 내역 삭제하기
  React.useEffect(() => console.clear(), []);

  // HTML 태그를 react안에서 참조할 수 있는 변수를 생성
  const myDname = React.useRef(); //Ref는 파라미터 설정 x 함수 호출 후 리턴을 무조건 받는다.
  const myLoc = React.useRef();
  const myResult = React.useRef();
  // 컴포넌트에 설정하기 위한 ref
  const myBoxRef = React.useRef();

  return (
    <div>
      <h2>MyRef</h2>

      {/**미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
      <div>
        <label htmlFor="dname">학과명</label>
        <input type="text" ref={myDname} id="dname" />
      </div>

      <div>
        <label htmlFor="dname">학과위치</label>
        <input type="text" ref={myLoc} id="loc" />
      </div>

      <h3>
        입력값 : <span ref={myResult}></span>
      </h3>

      <button
        onClick={(e) => {
          // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근가능
          // --> "참조변수.current" 해당 HTML을 의미하는 Javascript DOM 객체

          console.log(myDname);
          console.log(myLoc);
          // --> myDname.current와 document.querySelector(...), document.getElementById(.  ..)등으로 생성한 객체가 동일한 DOM객체이다.
          const dname = myDname.current.value;
          const loc = myLoc.current.value;
          // 입력값 받아와서 출력하는 방식.
          myResult.current.innerHTML = dname + ", " + loc;
        }}
      >
        클릭
      </button>

      <hr />

      <h3>컴포넌트에 ref 적용하기</h3>

      {/** ref 참조변수를 컴포넌트에 전달한다. */}
      <MyBox ref={myBoxRef} />

      <button
        type="button"
        onClink={() => {
          // mybox를 통해 myboxref를 주입받은 dom에 접근하여 제어함.
          myBoxRef.current.style.backgroundColor = "#f00";
        }}
      >
        Red
      </button>

      <button
        type="button"
        onClink={() => {
          // mybox를 통해 myboxref를 주입받은 dom에 접근하여 제어함.
          myBoxRef.current.style.backgroundColor = "#00f";
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default MyRef;
