import React from 'react'
import useMyWidht from '../hook/Myhook'

const MyWidth = () => {
  // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
  React.useEffect(() => console.clear(), []);

  const myWidht = useMyWidht();

  return (
    <div>
      <h2>MyState</h2>
      <h3>windowWidth: {myWidht}</h3>    
    </div>
  )
}

export default MyWidth