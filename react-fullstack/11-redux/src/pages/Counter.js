import React from 'react';

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from 'react-redux'
// Slice에 정의된 액션함수들 참조
import { plus, minus} from '../slices/CounterSlice';

const Counter = () => {
    // 컴포넌트가 마운트 될 때 콘솔의 모든 내용 삭제함(출력 결과가 복잡해 지는 것을 방지)
    React.useEffect(() => console.clear(), []);

    // hook을 통해 slice가 관리하는 상태값 가져오기
                                        //이 콜백에 전달되는 state는 store.js에 reducer {  ... } json이 들어온다.
    const { number, color } = useSelector((state) => state.counter);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex'}}>
            <button onClick={(e) => {dispatch(plus(5)); }}>+5</button>
            <h2 style={{
                color: color,
                margin: '10px',
                width: '50px',
                textAlign: 'center'
            }}>{number}</h2>
            <button onClick={(e) => {dispatch(minus(3)); }}>-3</button>
        </div>
    );
};

export default React.memo(Counter);