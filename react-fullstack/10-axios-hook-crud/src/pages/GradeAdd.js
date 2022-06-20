import React from 'react';
import useAxios from 'axios-hooks'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

// Table 컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;

    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;

        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin-left: 7px;
            margin-right: 10px;

            input {
                margin-right: 10px;
            }
        }
    }
    
`

const GradeAdd = () => {
    /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
    // navigate를 함수로 사용하여 navigate(괄호 안에 url을 지정하면 강제 이동)
    const navigate = useNavigate();

    /** 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성 - 메뉴얼 전송 모드 */
    const [{loading}, refetch] = useAxios({
        url: "http://localhost:3001/grade",
        method: 'POST'
        // 사용자가 입력하면 입력결과가 바로 화면에 결과가 보일 때가있다.
        // 회원가입은 입력 -> 저장이 이루어지면 '가입을 축하합니다!' 라는 메세지와 함께 페이지가 이동해버림
        // 이 때는 화면이 이동해서 결과를 받아 올 필요가 없다. 
        // 저장이나 수정해서 화면에 반영하려면 결과를 받아와야  한다.
    }, { manual: true });

    /** <from>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러. </from> */
    const onSubmit = (e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체 
        const current = e.target;

        // 입력받은 값 취득하기
        // 폼 안에 있는 input태그 name속성을 통해 입력값 가져온다.
        const name = current.name.value;
        const level = current.lavel.value;
        const sex = current.sex.value;
        const kor = current.kor.value;
        const eng = current.eng.value;
        const math = current.math.value;
        const sin = current.sin.value;

        //------------------
        // 입력값에 대한 유효성 검사
        // -----------------

        let json = null;

        // 입력, 수정 , 삭제 처리는 async-awiat 문법을 사용해야 한다.

        (async () => {
            try {                      //refetch함수로 전송
                const response = await refetch({
                    data: {
                        name: name,    //Post형식이므로 data 보냄.
                        level: parseInt(level), // 숫자 => 형변환(정수로)
                        sex: sex,
                        kor : parseInt(kor),
                        eng : parseInt(eng),
                        math: parseInt(math),
                        sin: parseInt(sin)
                    }
                });

                json = response.data;
            } catch (e) {
                console.error(e);
                window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
            }

            // 정상적으로 저장되어 응답을 받았다면?
            if (json != null) {
                window.alert("저장되었습니다.");
                // 페이지 강제 이동 (window.loaction.href = URl 기능과 동일함)
                navigate('/');
            }
        })();
    }
    return (
        <div>
            <Spinner visible={loading} />

            <form onSubmit={onSubmit}>
                <TableEx>
                    {/** col그룹은 각칸에 연결된다. <th>이름</th>부분 넓이가 120 */}
                    <colgroup>
                        <col width='120' />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td className='inputWrapper'><input className='field' type='text' name="name" /></td>
                        </tr>
                        <tr>
                            <th>학년</th>
                            <td className='inputWrapper'>
                                <select name='level' className='field'>
                                    <option value="">----- 선택하세요 ------</option>
                                    <option vlaue="1">1학년</option>
                                    <option vlaue="2">2학년</option>
                                    <option vlaue="3">3학년</option>
                                    <option vlaue="4">4학년</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td className='inputWrapper'>
                                <label><input type='radio' name='sex' value="남자" />남자</label>
                                <label><input type='radio' name='sex' value="여자" />여자</label>
                            </td>
                        </tr>
                        <tr>
                            <th>국어</th>
                            <td className='inputWrapper'>
                                <input type='field' name='number' placeholder='숫자만 입력(0~100)' />
                            </td>
                        </tr>
                        <tr>
                            <th>영어</th>
                            <td className='inputWrapper'>
                                <input type='field' name='number' placeholder='숫자만 입력(0~100)' />
                            </td>
                        </tr>
                        <tr>
                            <th>수학</th>
                            <td className='inputWrapper'>
                                <input type='field' name='number' placeholder='숫자만 입력(0~100)' />
                            </td>
                        </tr>
                        <tr>
                            <th>과학</th>
                            <td className='inputWrapper'>
                                <input className="field" type='number' name='sin' min="0"
                                max="100" step="1" placeholder='숫자만 입력(0~100)' />
                            </td>
                        </tr>
                    </tbody>
                </TableEx>

                <div style={{ textAlign: 'center'}}>
                    <button type='submit'>저장하기</button>
                </div>
            </form>
        </div>
    );
};

export default GradeAdd;