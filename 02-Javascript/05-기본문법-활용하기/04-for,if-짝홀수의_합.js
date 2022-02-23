let oddSum = 0;  //홀수의 합
let evenSum = 0;  //짝수의 합

// i가 1~10까지 1씩 증가하는 동안 반복
for (let i=1; i<=10; i++) {
    // 반복문 안에서의 조건문은 주로 반복문의 초기식 변수(i)에 대한 경우의 수를 판별함.
    if (i % 2 == 0) {  //%는 나머지를 뜻함 = 2로 나눴을때 나머지가 0이면 i에 더함
        console.log("%d(은)는 짝수," , i);
        evenSum= i+1; // 2 + 5 + 7 + 9 + 11
    }   else {
        console.log("%d(은)는 홀수", i);
        oddSum = i+1; // 4 + 6 + 8 + 10
        
    }
}

console.log("1~10 까지 홀수들의 합: %d", oddSum);
console.log("1~10 까지 짝수들의 합: %d", evenSum);
