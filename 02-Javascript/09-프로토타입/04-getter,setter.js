function User4() {
    //멤버변수 정의
    this._id = null;      //
    this._email = null;
}

Object.defineProperty(User4.prototype, 'id', {
    get: function() {
        console.log("id에 대한 getter 호출됨");
        // 멤버변수의 값을 반환하는 기능
        // 반환 전에 필요하다면 멤버변수의 값을 가공하여 반환 가능
        return this._id;
    },

    set: function(param) {
        console.log("id에 대한 setter 호출됨");
        //파라미터의 값을 멤버변수에 복사하는 기능
        //필요하다면 파라미터값을 가공하여 멤버 변수에 복사 가능.
        this._id = param;
    }
});

Object.defineProperty(User4.prototype, 'email', {
    get: function() {
        console.log("email에 대한 getter 호출됨");
        return this._email;
    },
    set: function(param) {
        console.log("email에 대한 setter 호출됨");
        this._email = param;
    }
});

// 객체 생성하기 = 객체를 만들면 생성자에서는 출력하고 있는게 아무것도 없어서 아직은 실행결과 없음.
const friend = new User4();
// 언뜻보기엔 변수에 값을 대입되는것처럼 보이지만 setter가 호출됨. 변수에 값을 대입하듯 사용.
friend.id = "친구";
// friend.id란 변수를 호출하면 getter가 호출된다.
console.log(friend.id);

friend.email = "fir@hanmail.net";
console.log(friend.email);