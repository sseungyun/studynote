/**
 * 프로그램 시작점.
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */

//import 는 다른 파일을 참조한다는 뜻이다.
// 리액트의 기본을 구성하는 패키치 참조.
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';

// 이 소스파일 (index.js)과 동일한 위치의 App.js("./App")를 App이라는 이름으로 가져온다.
// ./ 은 상대경로이다. 같은 파일안에 있는 파일을 참조 하더라도 무조건 ./붙는다.
// 보통 객체이름 함수이름은 헷갈리지 말라고 서로 맞춘다.
import App from './App'; 

/** 컴포넌트를 페이지에 랜더링한다. */
// App.js에서 정의한 'App'이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다, 여러 번 재사용이 가능하다.
// -> <React.StrictMode>(엄격모드)이 적용되어 있는 경우, 선언만 하고 사용되지 않는 변수들에 대한 경고 메세지가 브라우저 콘솔에 표시된다.
//     개발용이므로 최종 빌드시에는 제거하는 것이 좋다.
//'root'는 public폴더 안에있는 index.html(react홈페이지 열면 바로 보이는 폴더) div태그이다. 그걸 가져와서 react.dom에 root생성 
const root = ReactDOM.createRoot(document.getElementById('root'));
// render은 그린다는 뜻 (랜더링)
root.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>
);

// <App/>이 자리에 App함수 안에 들어있는  <h1>Hello World</h1> 가 리턴되면서 출력된다.