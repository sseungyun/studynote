/*//이중 반복문 구구단 
for (let i=2; i<10; i++) {

    console.group("%d단", i);

    for (let j=1; j<10; j++) { //1~9단 j는 1씩 증가 9번실행됨.
        console.log("%d x %d = %d", i , j , i*j);  // i=2 j=1 i*j=2 가 총 9번 반복한다.
    }
    console.groupEnd();
}
*/




for (let i=2; i<10; i=i+1) {
    
    console.group("%d단", i);

    for(let j=1; j<10; j=j+1){
        console.log("%d x %d = %d" , i , j , i*j);
    }
    console.groupEnd();
}



