/** JSON을 활용한 클래스 정의하기 */
// 생성자와 멤버변수 정의
function Member(username, password) {
    this._username = username;
    this._password = password;
}

// getter, setter, 메서드 일괄 정의
// meber라는 이름의 생성자한테 prototype하고서 json {} 을 대입한다. json의 형식은 key : value이다. 
// js는 값이 들어갈 자리에 function(메서드)이 들어가도 된다.
Member.prototype =  {         
    get username() {        // json안에서 get,set은 이름이 단순화 된다. 
        return this._username;
    },

    set username(param) {
        this._username = param;
    },

    // 멤버 변수 _password에 대한 getter, setter
    get password() {
        return this._password
    },

    set password(param) {
        this._password = param;
    },

    // 로그인을 수행하는 메서드
    login: function() {    // key : value , key : value  (값들 사이 사이에 쉼표 꼭 넣기)
        console.log("[Member] 로그인되었습니다. username=" + this.username + ", password=" + this.password );
    },

    logout: function() {
        this.username = "";
        this.password = "";
        console.log("[Member] 로그아웃되었습니다. username=" + this.username + ", password=" + this._password);
    }
};

console.log(Member.prototype); // prototype 이라는 단어 뜻 그대로 '시제품' Member라는 함수에 대한 기본 구조들이 출력됨. 

// 생성자를 통한 객체 생성
const member1 = new Member('hello', '1234');  // 생성자로 파라미터 전달 받은 변수 

// getter를 통한 멤버변수 반환받기
console.log(member1.username);    //getter를 통해서 확인한 다음
console.log(member1.password);

// 메서드 호출
member1.login();               // 호출
member1.logout();


// setter를 통한 멤버변수 변경
member1.username = "world"      // setter로 값을 바꾸어 보고 
member1.password = "1234";

// 메서드 호출
member1.login();           // 호출
member1.logout();