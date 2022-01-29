/** 
학생별 총점과 평균 구하기

|이름 | 국어 | 영어 | 수학 |
|철수 |  92  |  81  |  76 |
|영희 |  72  |  95  |  84 |
|민혁 |  80  |  86  |  98 |
 */

// 학생 성적표 배열
const grade = [
    [ "철수", 92,81,76],  // 2차 배열이기 때문에 반복은 무조건 2중
    [ "영희", 72,95,84],
    [ "민혁", 80,86,98],
];

// 이 위치에서 변수를 초기화 하면 모든 학생의 총점.
let sum = 0; // 바깥에서 초기화를 정의하면 28번째 줄에 합산시키는 행 열 모두 더하겠다는 뜻

// 2차 배열 탐색
for (let i=0; i<grade.length; i++) { // i는 행을 의미하니깐 i가 0,1,2 일때가 됨.
    //학생 한명을 의미하는 부모 반복문 안에서 변수를 초기화 하면 학생 개인별 총점
    let personal_sum=0;

    // i번째 행에서 0번째 열은 학생 이름이므로 합산에서 제외한다. 이름이기 때문에 1번째 항목부터 합산시작 j=1 !!
    for (let j=1; j<grade[i].length; j++) {
        //console.log(grade[i][j]);
        sum += grade[i][j];
        personal_sum += grade[i][j]; //바깥에서 정의하는건 전체 합산 , 안쪽은 행마다 합산.
    }

    // 이름은 과목수에서 제외해야 하므로 "길이 -1"
    const personal_avg = personal_sum / (grade[i].length-1);
    console.log("%s의 총점은 %d이고 평균은 %d입니다.", grade[i],[0], personal_sum, personal_avg);
}

console.log("모든 학생의 총점은 %d입니다.", sum);