import React from 'react'

const If4 = () => {
  const isLogin = true;
  return (
    <div>
        <h2>If4</h2>

        { /** 삼항 연산자를 중괄호로 묶음 */
          isLogin === true ?    /** 조건이 참이면 앞에가 출력(login) */
          <button type='button'>로그아웃</button>:
          <button type='button'>로그인</button>
        }
    </div>
  )
}



export default If4;
