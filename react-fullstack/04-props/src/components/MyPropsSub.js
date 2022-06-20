import React from 'react'
  //MyProps에서 속성들을 통채로 props라는 객체로 받는다.
const MyPropsSub = (props) => {
  console.group("MyPropsSub");
  console.log(props);
      //데이터 타입 확인 typeof 
  console.log(typeof props.name);
  console.log(typeof props.age);
  console.groupEnd();

  return (
    <div>
      <h3>MyPropsSub</h3>
      <p>
        제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b> 입니다.
      </p>
    </div>
  )
}

// 속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의 해 둘 수 있다.
// (defaultProps 객체 이름 고정)
// props를 사용할때 defualtProps 사용은 가급적 무조건 권장~!!!
// 쉽게 말하면 MypropsSub 변수에 props 중 name, age값이 없을 때를 대비한 
// 값들을 미리 설정 하는 것이다.
MyPropsSub.defaultProps = {    //defaultProps는 고정값.
  name : '이름없음',
  age : 20
};

export default MyPropsSub