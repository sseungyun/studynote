/**

다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.

```js
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
```

### 2-1.

위 데이터에서 학생별 총점과 평균을 구하시오.
#### 출력결과

철수의 총점은 341점 이고 평균은 85.25점 입니다.
민영의 총점은 369점 이고 평균은 92.25점 입니다.
남철의 총점은 257점 이고 평균은 64.25점 입니다.
혜진의 총점은 322점 이고 평균은 80.5점 입니다.


 */

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

//JSON의 key에 대한 반복 처리
for (const key in exam) {
    // 학생별 총점을 위한 변수 초기화
    let sum = 0;

    // exam[key]는 학생 한명의 점수 배열.
    // 이 배열의 원소를 스캔하는 반복문을 사용하여 총점 구하기
    for (const p of exam[key]) {
        sum += p;
    }

    // 총점을 학생 개개인의 과목수로 나누어 평균 구하기
    let avg = sum / exam[key].length;

    console.log("%s위 총점은 %d점이고 평균은 %d점입니다." , key, sum, avg);
}