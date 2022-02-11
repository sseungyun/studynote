/**
 * ## 문제1.

앞 단원에서 수행한 연습문제 1,2번을 Class 기반의 객체지행으로 재구성하시오.

function Student(korm, eng, math) {
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
const s1 = new Student(72, 95, 98);
const s1 = new Student(80, 86, 84);
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());
console.groupEnd();
*/

class Student {
    constructor(kor, eng, math) {
        this._kor = kor;
        this._eng = eng;
        this._math = math;
    }

    sum() {
        return this._kor + this._eng + this._math;
    }

    avg() {
        return this.sum() / 3;
    }
}

const s1 = new Student(92, 81, 76);
const s2 = new Student(72, 95, 84);
const s3 = new Student(80, 86, 98);
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());
