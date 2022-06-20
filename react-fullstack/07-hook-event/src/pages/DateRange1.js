import React from "react";
import dayjs from "dayjs"; // for 날짜 처리

/**
 *
 * useState 를 사용하여 날짜 범위 선택 기능 구현
 */

const DateRange1 = () => {
  const day = dayjs();

  //const [startDate, setStartDate] = React.useState(...);
  //const [endDate, setEndDate] = React.useState(...);

  /**
   * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
   * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.
   */

  const [MyDate, setMyDate] = React.useState({      
    startDate: day.format("YYYY-MM-DD"), // 기본적으로 day는 현재날짜를 갖고 있는데 format함수를 걸어주면 날짜 형식을 변경할 수 있다.
    endDate: day.format("YYYY-MM-DD"),
  });

  return (
    <div>
      <h2>DateRange1</h2>   
      <p>
        {MyDate.startDate} ~ {MyDate.endDate}
      </p>

      <button
        type="button"
        onClick={(e) => {
          //...MyDate의 모든 내용을 복제하고 startDate만 새로 정의
          setMyDate({     // endDate는 고정값이니 계속 그대로 두고
            ...MyDate,
                          // 날짜를 7일 전으로 돌려서 형식을 오늘 날짜로 . 
            startDate: day.add(-7, "d").format("YYYY-MM-DD"),
          });
        }}
      >
        {" "}
        {/* 날짜를 7일 전으로해서 날짜형식 지정 */}
        7일
      </button>

      <button
        type="button"
        onClick={(e) => {
          setMyDate({
            ...MyDate,
                          // 날짜를 15일 전으로 돌려서 형식을 오늘 날짜로 .
            startDate: day.add(-15, "d").format("YYYY-MM-DD"),
          });
        }}
      >
        15일
      </button>

      <button
        type="button"
        onClick={(e) => {
          setMyDate({
            ...MyDate,
            startDate: day.add(-1, "M").format("YYYY-MM-DD"),
          });
        }}
      >
        1개월
      </button>

      <button
        type="button"
        onClick={(e) => {
          setMyDate({
            ...MyDate,
            startDate: day.add(-3, "M").format("YYYY-MM-DD"),
          });
        }}                                                 
      >
        3개월
      </button>

      <button
        type="button"
        onClick={(e) => {
          setMyDate({
            ...MyDate,
            startDate: day.add(-6, "M").format("YYYY-MM-DD"),
          });
        }}
      >
        6개월
      </button>
    </div>       
  );
};

export default DateRange1;
