const number = 457;

//100단위에 대한 나머지값을 소수점으로 구하기
const extra = (number % 100) / 100;
console.log(extra);

const result = ((number / 100) - extra) * 100;
console.log(result);