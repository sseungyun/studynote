//(1) 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from "react";

// (3-1) 직접 작성한 컴포넌트 참조
import Hello from './MyComponent1';
import World from './MyComponent2';

function App() {
  return(
    <div> 
      <h1>Hello React</h1>

      {/* (3-2) Hello와 World라는 이름의 컴포넌트 출력*/}
      <Hello />
      <World />
      
    </div>
  );        //JSX : React전용 JS확장 문법이다. 리턴하는 태그가 두개 이상이면 무조건 div로 묶어줘야 한다. 

}

//내보내기
export default App;
