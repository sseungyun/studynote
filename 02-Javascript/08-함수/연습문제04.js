/**

## 문제4

문제1번을 재귀함수 기법으로 다시 구현해 보세요.

```js
// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printStar(max, current=1) {
    ... 구현하세요 ...
}

printStar(5);
```
 */

function printStar(max, current=1) {
    //max는 최대 행의 수, current는 현재 행의 수를 의미하므로,
    //현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return 함수
    if (current > max) {
        return;
    } else {
        /** 한 줄을 출력하기 위한 코드 구성 */
        let star = "";

        for (let j=0; j<current; j++) {
            star += "*"
        }

        console.log(star);
        printStar(max, current+1);    // 원래는 0에서 시작했는데 1에서 시작해서 +1
    }
}

printStar(5);