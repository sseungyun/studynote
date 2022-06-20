// react 기본 패키지 참조 (필수)
import React from "react";
// mySubComponent라는 js를 참조하면서 MySubComponent라는 객체 안에 담는다. 
import MySubComponent from './MySubComponent';

/** 
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적.
 */

const MyComponent1 =() => {
    // 리턴은 항상 HTML 구조를 의미하는 JSX 문법이어야 하고,
    // JSX 구조는 반드시 단 하나의 태그요소만 반환해야 함.
    // --> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미
    return (
        <div>
            <h2>안녕하세요 리액트</h2>
            <p>리액트 컴포넌트 구조 연습입니다.</p>
            <MySubComponent />
        </div>
    );
};

export default MyComponent1;