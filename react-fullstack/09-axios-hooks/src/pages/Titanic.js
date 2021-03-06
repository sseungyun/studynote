import React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Table from '../components/Table';

// Axios 기능 제공 hook
import useAxios from 'axios-hooks';

// 페이지의 마운트 여부를 확인하기 위한 hook
import useMountedRef from "../hooks/useMountedRef";


/** 성별을 표시하기 위한 텍스트 라벨 */
                    // 스판태그 생성
const ColorText = styled.span`                    
    &:before { 
// 성별 값을 props값을 받아 그 값이 남자면 파란색 그렇지 않으면 핑크색으로 출력                        
        color: ${({sex}) => sex === 'male' ? '#06f' : '#c0c'};
// content 속성은 어떤 태그 안에 내용을 넣어주는 속성이 있다.  '   ' 안에 출력하는 내용이 HTML안에 출력이 됨. 이때 content는 :before :after 가상 클래스 안에서만 사용가능.
        content: '${({sex}) => sex === 'male' ? '남자' : '여자'}';
        font-weight: 600;
    }
`;

/** 탑승지를 표시하기 위한 텍스트 라벨 */
const EmbarkedBox = styled.span`
    &:before {
        color: ${({embarked}) => embarked === 'C' ? '#f60' : (embarked === 'Q' ? '#00f' : '#990')};
        content: '${({embarked}) => embarked === 'C' ? '셰르부르' : (embarked === 'Q' ? '퀸즈타운' : '사우스햄턴')}';
        font-weight: 600;
    }
`;

/** 생존 여부를 표시하기 위한 텍스트 라벨 */
const SurvivedBox = styled.span`
    &:before {
        background-color: ${({survived}) => survived ? '#090' : '#e90'};
        content: '${({survived}) => survived ? '생존' : '사망'}';
        color: #fff;
        font-weight: 600;
    }
`;

/** 드롭다운을 배치하기 위한 박스 */
const SelectContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;

    select {
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`

// 접속할 백엔드의 URL
const URL = "http://localhost:3001/titanic";

const Titanic = () => {
    // 탑승객 명단 목록을 AJax로 가져온다.
    // --> 기본적으로 컴포넌트의 마운트와 동시에 자동 실행되어 응답 결과를 data에 저장한다.
    const [{data, loading, error}, refetch] =useAxios(URL);
    // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
    const [state, setState] = React.useState({
        sex: '',
        embarked: '',
        survived: ''
    });
    // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    const mountedRef = useMountedRef();

    // 드롭다운 선택 변경시 호출되는 이벤트 

    const onSelectChange = React.useCallback(e => {
        e.preventDefault();

        // 드롭다운의 입력값 취득
        const current = e.target;
        const key = current.name;
        const value = current[current.selectedIndex].value;

        // 기존의 상태값을 그대로 복사한 상태에서 
        // 드롭다운의 name 속성과 일치하는 key에 대한 value를 수정
        const newState = {...state, [key]: value};

        //상태값 갱신
        setState(newState);

        // 갱신된 상태값 확인
        console.log(newState);

        // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
    }, [state]);

    /** state 상태값이 변경되었을 때 실행될 hook */
    React.useEffect(() => {
        // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
        if (mountedRef.current) {
            // 상태값 중에서 빈값이 아닌 항목들을 옮겨담는다.
            const params = {};
            for (const key in state) {
                if (state[key]) {
                    params[key] = state[key];
                }
            }

            // Ajax 재요청
            refetch({
                params: params
            });
        }
        // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
    }, [mountedRef, refetch, state]);

    /** 에러가 발생했다면 에러 메세지 표시 */
    if (error) {
        console.error(error);

        // 컴포넌트 자체가 함수이고, 함수가 실행도중 리턴 하므로
        // 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다.
        return(
            <div>
                <h1>Oops~!!! {error.code} Error. </h1>
                <hr />
                <p>{error.message}</p>
            </div>
        )
    }

    /** 메인 화면 구성 */
    return (
        <div>
            {/** 로딩바 */}
            <Spinner visible={loading} />

            {/** 검색 조건 드롭다운 박스 */}
            <SelectContainer>
                <select name='sex' onChange={onSelectChange}>
                    <option value="">-- 성별 선택 --</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
                <select name='embarked' onChange={onSelectChange}>
                    <option value="">-- 탑승지 선택 --</option>
                    <option value="C">세르브루</option>
                    <option value="Q">퀸즈타운</option>
                    <option value="S">사우스햄턴</option>
                </select>
                <select name='survived' onChange={onSelectChange}>
                    <option value="">-- 생존 여부 선택 --</option>
                    <option value="true">생존</option>
                    <option value="false">사망</option>
                </select>
            </SelectContainer>

            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동승자 수</th>
                        <th>객실 등급</th>
                        <th>방 호수</th>
                        <th>티켓 번호</th>
                        <th>요금</th>
                        <th>탑승지</th>
                        <th>생존여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(({
                        id, name, survived, pclass, sex, age, sibsp,
                        parch, ticket, fare, cabin, embarked
                    }, i) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td><ColorText sex={sex}/></td>
                                <td>{age}</td>
                                <td>{sibsp + parch}</td>
                                <td>{pclass}등석</td>
                                <td>{cabin}</td>
                                <td>{ticket}</td>
                                <td>{fare}</td>
                                <td><EmbarkedBox embarked={embarked} /></td>
                                <td><SurvivedBox survived={survived} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default React.memo(Titanic);