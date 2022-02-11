/**
 * [문자열 처리]
 * 
 * 문자열은 그 자체가 객체
 * 
 * 객체라는 것은 그 안에 멤버변수(프로퍼티)와 메서드(함수)가 내장되어 있음을 의미.
 * 
 * 그러므로 일반적으로 생성하는 문자열 변수 안에는 메서드와 프로퍼티가 자동으로 내장된다.
 * 
 * const foo = "Hello World"
 * foo.메서드() 내장되어있다는 뜻.
 * 
 * 문자열 객체에 내장된 메서드 들은 변수가 담고 있는 내용을 가공하거나 특정 내용을 추출하는 기능을 갖는다.
 * 
 * 
 * 
 * Number는 숫자 처리와 관련된 기본 기능들을 제공하는 내장 클래스.
 * 
 * 
 */

var a = new Number(123); // a === 123 false
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);


// Number() 함수를 통해 반환받는 값은 객체가 아닌 일반 숫자 
// Number() 함수는 parseFloat, parseInt와 비슷한 기능.
var b = Number('123');  // b === 123은 true
console.log(b);
console.log(typeof b); // false
console.log(b === 123);

var b = Number('123.45');  // b === 123은 true
console.log(b);
console.log(typeof b); // false
console.log(b === 123.45);

/** (정적)속성 */
// 표현 가능한 가장 큰 양수.
console.log(Number.MAX_VALUE);

// 표현 가능한 가장 작은 양수. 즉, 0보다 크지만 0에 가장 가까운 양수.
console.log(Number.MIN_VALUE);

//"숫자가 아님"을 나타내는 특별한 값.
console.log(Number.NaN);
console.log(isNaN(Number.NaN));

/** (정적)메서드 */
// 주어진 값이 NaN인지 확인 (isNaN과 동일)
// 숫자 변환이 불가능하면 true. 가능하면 false
console.log(Number.isNaN('123'));

// 주어진 값이 정수 인지 확인
console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));

// 내장 함수 parseFloat()와 동일
// 앞에서 소개한 Number() 함수와 동일
console.log(Number.parseFloat('123'));

// 내장 함수 parseInt()와 동일
console.log(Number.parseInt('123'));
