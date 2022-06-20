import React from 'react';
import Spinner from '../components/Spinner';
import Table from '../components/Table';

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from 'react-redux'
// Slice에 정의된 액션 함수들 참조
import { getList } from '../slices/DepartmentSlice';

const Department = () => {
    // 컴포넌트가 마운트 될 때 콘솔의 모든 내용 삭제함(출력 결과가 복잡해 지는 것을 방지)
    React.useEffect(() => console.clear(), []);

    //hook을 통해 slice가 관리하는 상태값 가져오기     "department" store에서 리듀서에 명시한 key이름
    const [ data, loading, error ] = useSelector((state) => state.department);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 컴포넌트가 마운트 되면 데이터 조회를 위한 액션 함수를 디스패치 함.
     
    React.useEffect(() => {
        // 내가 slice안에 만들어놓은 ajax기능을 호출하고 싶으면 그 함수에 대한 호출을 dispatch에 연결해주면된다. 
        // 그럼 ajax 연동 실행을 시키고 ajax처리 결과가 위에 data, loading, error 상태값으로 연결이 된다. 
        // !!!!!!!!!!!!!  과정 잘 외우기! 그냥 외우기 
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <Spinner visible={loading} />
            {error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                    <hr />
                    <p>{error.message}</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>dname</th>
                            <th>loc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v, i) => (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.dname}</td>
                                <td>{v.loc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default React.memo(Department);