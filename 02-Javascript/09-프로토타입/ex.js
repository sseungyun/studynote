const User3 = function(id, email) {
    this._id = id;
    this._email = email;
};

User3.prototype.login = function() {
    console.log("로그인 되었습니다. -> id=" + this._id + ", email=" + this._email)
};

User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다. ->id=" + this._id + ", email=" + this._email);
}

const student = new User3("학생", "gsh05144@naver.com");

student.logout();
student.login();

const teacher = new User3("강사", "gsh05144@naver.com");

teacher._id = "선생님";
teacher._email = "gsh@naver.com";
teacher.login();
teacher.logout();