const number = 100;
let sum = 0;

for(i=1; i<number; i++) {
    if(i % 3 == 0) {
        console.log(i);
        sum = sum+i;
    }
}
console.log("1부터 3의 배수의 대한 총 합은 :",sum);