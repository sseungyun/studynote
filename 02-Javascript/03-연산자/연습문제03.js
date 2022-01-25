// 사과의 수 
const numOfApples = 123;

// 10으로 나눈 나머지를 소수점 값으로 환산
const extra = (numOfApples % 10) / 10 
console.log(extra);

//let basketCount = extra > 0 ? (numOfApples / 10) - extra + 1 : (numOfApples / 10 - extra);
//console.log(basketCount);

let basketCount = (numOfApples / 10) - extra;
basketCount += extra > 0 ? 1 : 0;
console.log(basketCount);


