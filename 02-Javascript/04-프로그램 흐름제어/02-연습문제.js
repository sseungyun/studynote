let bit = 1; //누적된 곱셈에 대한 초기값은 1부터 시작.
let i = 1;   //초기식

while(i <= 10) { //조건식
    bit = bit*2;
    console.log("이진수 %d개는 %d개의 정보를 표시 가능", i , bit);
    i=i+1;        //증감식
}
