import React from "react";

/** 
 * 사용자 정의 함수.
 * useState와 useEffect를 하나의 함수로 묶는 용도로 정의함.
 */

const useMyWidht = () => {
    // 브라우저의 넓이를 의미하는 상태값
    const [myWidht, setMyWidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수.
    //     이벤트를 걸어서     브라우저에 창크기를 myWidth에 적용되게 함. 
    const onMyResize = () => setMyWidth(window.innerWidth);
    //    onMyResize함수는 언제 사용하냐면 웹페이지가 처음로드될때!

    // 페이지 로드시에 이벤트 정의, 페이지 종료시에 이벤트 해제
    React.useEffect(() => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, []);

    // 마지막에 상태값을 리턴한다.
    return myWidht;
};

export default useMyWidht;