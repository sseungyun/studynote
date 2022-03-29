let text = 'Life is too short, You need Javascript';
let count = 0;
let search = 'e'; 
let num = text.indexOf(search); 

while (num !== -1) {
  count++;
  num = text.indexOf(search, num + 1); 
}

console.log("알파벳 e의 등장 횟수는 %d회 입니다", count);