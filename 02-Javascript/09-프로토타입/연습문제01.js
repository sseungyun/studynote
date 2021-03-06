/**
## 문제1. 

국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

클래스는 JSON 형식으로 작성되어야 합니다.

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |


#### 출력결과

```
철수의 총점은 249점 이고 평균은 83점 입니다.
영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
민혁의 총점은 264점 이고 평균은 88점 입니다.
```

 */


function Student(kor, eng, math) {   // 생성자에서 파라미터를 받는 이유는 멤버변수를 초기화하기 위함이다. 
    this._kor = kor;                 // 그러니 이 값들을 멤벼 변수에 연결해주는걸 기본 패턴!
    this._eng = eng;
    this._math = math;
}

Student.prototype = {
    sum: function() {
        return this._kor + this._eng + this._math;
    },

    avg : function() {
        return this.sum() / 3;      //this.sum() 이라고 하면 같은 그룹에 속해있는 함수를 호출이 가능하다.! 
    }
};

const grade = [
    ["철수", 92, 81, 77],     // cons=item           item[0] = 철수 
    ["영희", 72, 95, 98],
    ["민혁", 80, 86, 84],
];

for(const item of grade) {     //2차 배열을 통째로 걸었으니깐 item은 철수 성적 한줄이 된다. item[0]="철수"
//학생 한명에 대한 객체 생성   국      영      수   점수 삽입.
    const s = new Student(item[1], item[2], item[3]); // 점수 합계에 대한 합계, 평균값을 리턴받을 수 있다.
    console.log("%s 의 총점은 %d점이고 평균은 %d점 입니다", item[0] , s.sum(), s.avg());
}


/** 
function Student(kor, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
}

Student.prototype = {
    sum : function() {
        return this._kor + this._eng + this._math;
    },

    avg : function() {
        return this.sum() / 3;
    }
};

console.group("반복문 안에서 객체 활용");
const grade = [
    ["철수", 92, 81, 77],
    ["영희", 72, 95, 98],
    ["민혁", 80, 86, 84],
];

for (const item of grade) {
    const s = new Student(item[1], item[2], item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다." , item[0], s.sum(), s.avg());

}
console.groupEnd();

console.group("하드코딩");
const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const s3 = new Student(80, 86, 84);
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());
console.groupEnd();

*/