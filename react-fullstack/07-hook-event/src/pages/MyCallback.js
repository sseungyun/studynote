import React from 'react'

const MyCallback = () => {
  // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
  React.useEffect(() => console.clear(), []);

  const [myText, setMyText] = React.useState('Hello React');

  // 컴포넌트가 최초 렌더링 될 때 1회만 이벤트 핸들러 함수를 정의하고 이후 부터는 계속적으로 재사용된다.
  // 만약 두 번째 파라미터인 배열에 특정 state값을 지정할 경우 해당 값이 수정될 때만 이벤트가 정의된다.
  // --> 이벤트 핸들러의 중복 정의를 방지해서 성능 향상을 꾀함.
  const onInputChange = React.useCallback( (e) => {
    setMyText(e.currentTarget.value);           // 이벤트를 위한 콜백함수를 React.useCallback 이라는 hook으로 감싸면 기본 구성은 useEffect랑 동일하다.
  }, []);                                       // useCallback은 이벤트의 정의를 딱 한번 정의하고 아무리 화면을 왔다갔다 해도 계속적으로 재사용된다.
                                                // 이벤트 정의할때는 무조건 useCallback 쓰기 ! 
  return (
    <div>
      <h2>MyCallback</h2>
      <h3>{myText}</h3>                                     
      <input type="text" placeholder="input..." onChange={onInputChange}/>  
    </div>
  )
}

export default MyCallback