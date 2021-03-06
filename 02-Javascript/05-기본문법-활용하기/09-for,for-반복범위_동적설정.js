/** 반복범위 동적 설정 */
// 자식 반복문의 조건식이 부모 반복문의 조건변수를 활용하여 새로운 값을 계산하면 자식 반복문의 반복 범위에 변화를 줄 수 있다.

for (let i=0; i<5; i++) {         // 0~4까지 i가 1씩 증가한다. 

    console.group("i에 대한 반복 수행 시작 >> i="  + i);  // i에 대한 반복 수행 시작이 >> i = 1~4까지 출력된다.

    for (let j=0; j<i+1; j++) {    // j는 0, i에 값에 따라서 i보다 1적은 수로 출력되며 j는 1씩 증가한다.
        console.log("i=%d, j=%d", i , j); // 1.  i는 0 , j는 1보다 적으니 0 , 즉 1번 출력됨.
    }                                     // 2.  i가 1 , j는 1보다 적은 0과 1이 참이니 0과 1 , 즉 2번 출력됨.
                                          // 3.  i가 2 , j는 i(2)+1 = 3보다 작은 0 , 1, 2, 가 참이니 세번출력됨.
    console.groupEnd();
}