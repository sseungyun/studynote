/** 
 * encodeURL(string).
 * 
 * 주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(= 인코딩)하는 처리
 * 인코딩하지 않는 문자.
 *  A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' () #
 * 
 *  예를들어 네이버 주소 마지막에 query= 자바스크립트라고 검색하면 화면이 바뀌지만
 *  vsc에서 작동하면 변환되어 보임. 그렇기 때문에 작업폴더들은 모두 영어로 하는게 호환성에 좋다.
 * 
 * 네이버에서 검색했을 때:https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=리액트
 * 
 * VSC에 복사 붙혀넣기 했을 때 : https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%A6%AC%EC%95%A1%ED%8A%B8
 * 
 * [잘못된 경우]
 * <a herf= "result.html?a= 100&b=200&name=자바스크립트">click</a>
 * 
 * [올바른 경우]
 * <a herf= "result.html?a= 100&b=200&name=%EB%A6%AC%EC%95%A1%ED%8A%B8">click</a>
 */

const set1 = ';,/?:@&=+$#'  // 예약 문자
const set2 = "-_.!~*'()"; // 비예약 문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = "자바스크립트" // 

// 특수문자(예약문자 및 비예약문자)를 변환하지 못하기 때문에 UTF-8 환경에서는 사용이 불가.
const enc1 = encodeURI(set1); // ;,/?:@&=+$#
const enc2 = encodeURI(set2); // -_.!~*'()
const enc3 = encodeURI(set3); // ABC abc 123 (공백은 으로 인코딩)
const enc4 = encodeURI(set4); 

console.group("encodeURI");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

// 인코딩 된 문자열을 원래의 문자열로 역변환(디코딩)
console.group("decodeURI");
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();