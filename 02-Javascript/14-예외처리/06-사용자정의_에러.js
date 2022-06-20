/**
 * 에러의 종류를 세분화 하기 위해 기본 Error 클래스의 기능을 확장하여
 * 개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다.
 */
                // 클래스 확장 = extends
class XlessError extends Error {
    // error 클래스의 생성자는 에러 메세지를 파라미터로 요구한다. 
    constructor(msg) {
     // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제 호출해야 한다.(super(...))
     // constructor(msg)파라미터를 부모한테 순회해 주는걸로 퉁칠 수 있다.
        super(msg);
        super.name = 'XlessError';
    }
}

class YlessError extends Error {
    // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제 호출 해야 한다. --> super(...)
    constructor(msg) {
        super(msg);
        super.name = 'YlessError';
    }
}

function foo(x, y) {
    if (x < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수는 호출하는 위치를 에러로 인식한다.
        throw new XlessError("x가 0보다 작습니다.")
    }

    if (y < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new YlessError("y가 0보다 작습니다.")
    }

    return x + y;
} 

// try 블록 안의 코드는 최소화 하는 것이 프로그램 효율에 좋다.
// 그래서 k값을 정상적으로 리턴 받았다면 그 결과값을 활용하는 처리는 try블록 안에서 하는것이 좋다.
// 에러 점검이 끝난 후 try~catch 블록 밖에서 k값을 활용하려면
// 변수의 선언 위치가 try 블록보다 상위에 위치해야 한다. --> 변수의 스코프 규칙
const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러이름 : %s", err.name);
    console.log("에러내용 : %s", err.message);
}

try {
    b = foo(10, -1);
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

console.log(a);
console.log(b);