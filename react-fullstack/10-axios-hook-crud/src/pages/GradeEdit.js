import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
// 수정 페이지에 접근할 때는 http://localhost:3000/edit 라고 하고서 몇번데이터를 수정할거냐해서 값을 받아야 한다.
// 이것때문에 Router edit/:id 이런식으로 path파라미터를 정의한다. 이걸 받기 위해 useParams를 정의. 
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";
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
`;
const GradeEdit = () => {
  // Path 파라미터로 전달된 일련번호
  // useParams 해서 path 파라미터로 받아온다. id값 하나만 비구조 문법으로 정의
  const { id } = useParams();

  // 데이터 수정 후(다시 수정하기 전 페이지로 돌아가 수정내용 확인 해야하기 때문에) 목록 페이지로 강제 이동하기 위한 함수 생성
  const navigate = useNavigate();

  // 수정할 대상을 백엔드로부터 로드한다(수정대상 조회). --> 자동실행모드
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3001/grade/${id}`
  );

  /** <form>의 submit 버튼이 눌러졌을 때 호출된 이벤트 핸들러 </form>*/
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

    let json = null;

    // 입력, 수정 , 삭제 처리는 async-awiat 문법을 사용해야 한다.

    (async () => {
      try {
        //refetch함수로 전송
        const response = await refetch({
          mathod: "PUT",
          data: {
            name: name, //Post형식이므로 data 보냄.
            level: parseInt(level), // 숫자 => 형변환(정수로)
            sex: sex,
            kor: parseInt(kor),
            eng: parseInt(eng),
            math: parseInt(math),
            sin: parseInt(sin),
          },
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status}] ${e.response.statusText}\n${e.message}`
        );
      }

      // 정상적으로 저장되어 응답을 받았다면?
      if (json != null) {
        window.alert("수정되었습니다.");
        // 페이지 강제 이동 (window.loaction.href = URl 기능과 동일함)
        navigate("/");
      }
    })();
  };

  return (
    <div>
     
      <Spinner visible={loading} />
       {/** 에러가 있다면 에러 처리 */}
      {error ? (
        <div>
          <h1>Oops~ !!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        /** error가 없다면 data가 있을 때만 form을 뿌려라.  */
        //Ajax를 통해 조회한 결과가 존재할 때만 데이터 표시함
        data && (
          <form onSubmit={onSubmit}>
            <TableEx>
              {/** col그룹은 각칸에 연결된다. <th>이름</th>부분 넓이가 120 */}
              <colgroup>
                <col width="120" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className="inputWrapper">
                    {/** html에서는input태그에 값을 넣어주는건 value속성인데 React에서는 onChange이벤트가 있어야만 value사용 가능.
                     * onChange 입력값을 상태값에 복사한 후 그 상태값을 value속성에 뿌려줘야한다.
                     * 그렇지 않고 지금처럼 data 로드해서 출력만 할때는 defaultvalue속성을 사용한다.
                     */}
                    <td className="inputWrapper"><input className="field" type="text" name="name" defaultValue={data.name} /> </td>
                  </td>
                </tr>
                <tr>
                  <th>학년</th>
                  <td className="inputWrapper">
                    <select name="level" className="field" defaultValue={data.level}>            
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
                  <td className="inputWrapper">
                    <label>      {/** dafaultChecked가 true면 선택사항이 된다. 입력되어 있는 성별값이 남자면 남자가 true 그렇지 않으면 여자가 true */}
                      <input type="radio" name="sex" value="남자" defaultChecked={data.sex === "남자"} />
                      남자
                    </label>
                    <label>
                      <input type="radio" name="sex" value="여자" defaultChecked={data.sex === "여자"} />
                      여자
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>국어</th>
                  <td className="inputWrapper">
                    <input
                      type="field"
                      name="number"
                      placeholder="숫자만 입력(0~100)"
                      defaultValue={data.kor}
                    />
                  </td>
                </tr>
                <tr>
                  <th>영어</th>
                  <td className="inputWrapper">
                    <input
                      type="field"
                      name="number"
                      placeholder="숫자만 입력(0~100)"
                      defaultValue={data.eng}
                    />
                  </td>
                </tr>
                <tr>
                  <th>수학</th>
                  <td className="inputWrapper">
                    <input
                      type="field"
                      name="number"
                      placeholder="숫자만 입력(0~100)"
                      defaultValue={data.math}
                    />
                  </td>
                </tr>
                <tr>
                  <th>과학</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="sin"
                      min="0"
                      max="100"
                      step="1"
                      placeholder="숫자만 입력(0~100)"
                      defaultChecked={data.sin}
                    />
                  </td>
                </tr>
              </tbody>
            </TableEx>

            <div style={{ textAlign: "center" }}>
              <button type="submit">저장하기</button>
            </div>
          </form>
        )
      )}
    </div>
  );
};

export default GradeEdit;
