/**
문제 1 - 다음을 만족하는 Student 클래스를 작성하시오.

1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
2) getter, setter를 정의
3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

 */

class Student {
  constructor(depart, studentId) {
    this._depart = depart;
    this._studentId = studentId;
  }

  get depart() {
    return this._department;
  }

  set depart(depart) {
    this._department = depart;
  }

  get studentId() {
    return this._studentId;
  }

  set studentId(studentId) {
    this._studentId = studentId;
  }

  sayHello() {
    console.log("나는 %s과 %d학번 입니다.", this.depart, this.studentId);
  }
}

const stu = new Student();
stu.depart = "컴퓨터공학";
stu.studentId = "17"
stu.sayHello();
