import React from "react";

import sea from "../assets/img/1.jpg";

const MyEffect = () => {
  // 이미지의 밝기를 위한 상태값
  const [myBirghtness, setBirghtness] = React.useState(100);

  // 브라우저의 넓이를 의미하는 상태값.
  const [myWidth, setMyWidht] = React.useState(window.innerWidth);

  // 사용자 정의 함수.
  const onMyResize = () => setMyWidht(window.innerWidth);

  // 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨
  React.useEffect(() => {
    console.clear();
    console.log(
      "[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능 ", new Date());
      //           브라우저 사이즈가 바뀔 때 onMyResize함수가 실행.
    window.addEventListener("resize", onMyResize);
   
    // 화면에서 벗어날 때 remove를 사용해 이벤트 제거
    // 함수를 리턴하면 화면을 종료할 때 실행됨.
    return () => {console.log("화면에서 벗어남");
                
    window.removeEventListener("resize", onMyResize);
  }; 
 }, []); // 두번째 파라미터로 빈 배열을 걸면 1회 실행된다.


  /** !파라미터가 하나도 없으면! 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨. */
  React.useEffect(() => {
    console.log(
      "[MyEffect2] %s ::: 화면에 컴포넌트가 처음로드되거나 state,props 중 하나라도 변경될 때 호출됨",
      new Date()
    );
  });    


  /** 두번째 괄호에 특정 변수값을 걸면 초기 한번 실행 후 상태값이 변경될 때만 실행됨. */
  React.useEffect(() => {
    console.log("[MyEffect4] %s  ::: myBirghtness값이 변경됨", new Date());
  }, [myBirghtness]);

  /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 : return(클로저)함수를 이용해 사용. */
  React.useEffect(() => {
    return () => {
      console.log(
        "[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능",
        new Date()
      );
    };
  });

  return (
    <div>
      <h2>MyEffect</h2>

      <h3>window Width: {myWidth}</h3>

      <div>
        <input
          type="range"
          min="0"
          max="200"
          step="1"
          value={myBirghtness}
          onchange={(e) => {
            setBirghtness(e.currentTarget.value);
          }}
        />
      </div>

      <img
        alt="hello React"
        src={sea}
        width="480"
        style={{
          // 이미지에 밝기를 설정 가능
          filter: "brightness(" + myBirghtness + "%)",
        }}
      />
    </div>
  );
};

export default MyEffect;
