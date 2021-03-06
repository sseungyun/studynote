/**## 문제 5.

for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.

```
0 1 2 3 
1 2 3 4 
2 3 4 5 
3 4 5 6 
```
*/

// 가로 세로 일정하면 반복문 무조건 겹침.
// 행의 수와 열의 수를 고려해야 한다. 4행 4열

for(let i=0; i<4; i++) {  //4행만들기

    // 한 줄에 출력할 문자열 변수
    let str = "";

    for (let j=0; j<4; j++) {//4열 만들기
        str += i+j;

        if (j+1 <4) {
            str = str + " ";
        }
    
    }

    console.log(str);
}
