
const K = 30;
const N = 4;
const M = 100;
const cookie = K * N;
const price = cookie > M ? cookie - M : 0;
console.log("동수가 부모님께 받아야 하는 돈은 %d 원입니다", price);


