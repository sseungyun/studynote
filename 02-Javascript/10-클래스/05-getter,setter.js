class UserClass {
    constructor() {
        this._userName = null;
        this._email = null;
    }

    /** 멤버변수 _userName에 값을 할당하기 위한 setter함수 */
    set userName(value) {
        if (!value) {
            console.log("userName을 입력하세요.");  // 값이 올바르지 않다면 console.log를 뿌려주고
            return; // 처리 중단.
        }

        this._userName = value;   // 올바르게 처리되었다면 value값을 멤버변수 userName에 담아 생성자 멤버변수 userName에 담는다.
    }

    /** 멤버 변수 _userName 값을 반환하기 위한 getter 함수 */  // getter setter 의미가 그 변수를 사용하기에 적합한지 검사할 수 있다.
    get userName() {
        return this._userName; // 이미 setter에서 올바른 값인지 검사했으므로 this._userName을 리턴만 해 준다.
    }

    /** 멤버 변수 _email 값을 할당하기 위한 setter 함수 */
    set email(value) {
        if(!value) {
            console.log("email을 입력하세요.");
            return;
        }

        this._email = value;
    }

    /** 멤버 변수 _userName 값을 반환하기 위한 getter 함수 */
    get email() {
        return this._email;
    }

    /** 일반적인 기능을 수행하기 위한 메서드 */
    login() {
        if(!this.userName || !this.email) {       // 문자열이면 userName이나 email이 빈칸이라면 ! 
            console.log("userName이나 email을 확인하세요."); // console.log 뿌리고
            return;     // 처리 중단
        }

        console.log("로그인 되었습니다. >> userName=" + this.userName + ", email=" +this.email);
    }
}

const user = new UserClass();
user.login();

// setter을 통한 값의 간접 할당

user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email = "hello@world.com";
user.login();