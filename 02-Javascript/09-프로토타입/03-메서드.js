//  생성자 함수 만들고 파라미터로 멤버 변수 값 대기 상태 
const User3 = function(id,email) {
    this._id = id;
    this._email = email;
};

// 객체 안 prototype속성 정의 후 login은 마음대로 정의 후 로그인 수행 하는 메서드 
User3.prototype.login = function() {
    // 객체 안에 속한 메서드 안에서는 생성자가 정의한 멤버변수를 마음껏 활용할 수 있다.
    console.log("로그인 되었습니다. -> id = " + this._id + ", email=" + this._email);
}
// 로그 아웃 수행하는 메서드 정의
User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다. -> id = " + this._id + ", email=" + this._email);
};


// 객체 생성 후 생성자 함수에 파라미터 값 출력
const student = new User3('학생', 'gsh05144@naver.com');

// 객체 안에 있는 login, logout 호출.
student.login();
student.logout();

// 객체 생성하기
const teacher = new User3("강사", "gsh05144");

// 객체 안에 내장된 메서드 호출하기.
teacher.login();
teacher.logout();

// 객체가 갖는 멤버 변수 수정
teacher._id = '선생님'
teacher._email = "000000@naver.com";

teacher.login();
teacher.logout();