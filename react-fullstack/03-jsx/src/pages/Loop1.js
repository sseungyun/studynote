import React from 'react'

/**
 * jsx반복 처리 (1) - 함수를 통한 반복문 활용
 */
const Loop1 = () => {
  /** 목록정의 태그를 구성하기 위한 사용자 정의 함수 */
                        //파라미터를 받아서
  const createListItems = (count) => {
    // <li>... </li> 단위를 저장할 배열
    let li = [];

    // 주어진 파라미터 count 수 만큼 반복
    for (let i = 0; i < count; i++) {
      /* 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 
         고유한 값을 갖는 key속성을 포함해야 함,(React 권고사항)
         key값이 브라우저에 전달되지는 않는다.*/
      // 빈 배열에 태그를 계속 push해서 집어넣고 
      li.push(<li key={i}>Item {i}</li>)
    }
      // 리턴하면 
    return li;
  }
  return (
    <div>
      <h2>Loop1</h2>
      {/** li태그가 한번에 출력된다. */}
      <ul>{createListItems(5)}</ul>
    </div>
  )
}



export default Loop1;
