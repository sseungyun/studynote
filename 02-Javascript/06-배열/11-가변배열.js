const a = [1,3,5,7,9];
const b = [2,4,6];


const data = [a, b];
console.log(data);

for (let i=0; i<data.length; i++) {
    console.log(data[i]);

    for (let j=0; j<data[i].length; j++) {  // 데이터에 i(0번째즉 (1,2,3,4,5)=5)
        console.log(data[i][j]);  
    }
}