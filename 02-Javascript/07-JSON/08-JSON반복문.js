// 예제를 위한 임의의 JSON 정의
// for in은 JSON용 , for of 는 배열용

const student = {
    studno: 10101,
    grade: 1,
    name: "학생",
    phoneno: "010-1231-2342"
};

//JSON이나 멤버변수를 갖는 객체에 대한 반복문
// -> 변수로 선언한k에 객체의 key가 순차적으로 저장된다.
for (let k in student) {
    console.log("%s : %s ", k , student[k]);
}