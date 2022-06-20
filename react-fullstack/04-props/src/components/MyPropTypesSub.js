import React from 'react'

import PropTypes from 'prop-types';

  //const MyPropTypesSub = (props) => {
  // 비구조 문법을 통해 변수 속성값을 변수로 선언
  // const {name, age, hobby} = props;      
const MyPropTypesSub = ({name, age, hobby}) => {
  return (
    <div>
      <h3>MyPropTypesSub</h3>
      <p>
         안녕하세요, 제 이름은 {name} 이고, 나이는 {age}세 입니다.
      </p>
      <p>
        {hobby && (<span>취미는 {hobby} 입니다.</span>)}
        {/** hobby && 는 취미가 있다면 취미를 출력해라. */}
      </p>
    </div>
  )
}
              // 데이터 타입 지정.
MyPropTypesSub.prototype = {
  // name속성의 데이터 타입을 문자열 지정
  // name은 문자열이다 , age는 숫자다라고 데이터 타입을 정할 수 있음.
  name : PropTypes.string,
  age : PropTypes.number,
  // hobby의 데이터 타입과 필수 여부 지정
  // --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
  hobby: PropTypes.string.isRequired
};

export default MyPropTypesSub