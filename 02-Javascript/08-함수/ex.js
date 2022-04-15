const grade = [
    [ "철수", 92,81,76],  // 2차 배열이기 때문에 반복은 무조건 2중
    [ "영희", 72,95,84],
    [ "민혁", 80,86,98],
];

let sum=0;

for(let i=0; i<grade.length; i++) {

    let personal_sum=0;

    for(let j=1; j<grade[i].length; j++) {
        sum+= grade[i][j];
        personal_sum += grade[i][j]
    }

    const personal_avg = personal_sum/ (grade[i].length-1);
    console.log("%s의 총점은 %d이고 평균은 %d입니다.", grade[i],[0], personal_sum, personal_avg);

    }

    console.log("모든 학생의 총점은 %d 입니다.", sum);