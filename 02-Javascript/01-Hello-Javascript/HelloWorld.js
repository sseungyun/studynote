"use strict"; // 엄격 모드 적용 --> ES6가 등장하면서 함께 추가된 변경사항을 활성화 시킴

// 메세지 그룹핑

console.group("MyMessage1");
    console.log("안녕하세요. Javasctipt1");
    console.log("안녕하세요. Javasctipt2");
    console.log("안녕하세요. Javasctipt3");
console.groupEnd();

console.group("MyMesssage2"); // 출력하는 내용을 그룹으로 묶음
    console.log("안녕하세요. Javascript4");

    console.group("MyMessage2-1"); // 그룹안에 하위그룹 생성
        console.log("안녕하세요. Javascript5");
        console.log("안녕하세요. Jacascript6");
    console.groupEnd; // 하위 그룹으로 묶기 끝!!
console.groupEnd; // 그룹으로 묶기 끝!!