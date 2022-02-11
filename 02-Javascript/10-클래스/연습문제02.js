/**
클래스로 변환

function Reatangle() {  // 생성자를 만들면서 현재 파라미터가 없는 상태.
    this._width = null; // 파라미터가 없으니 null로 초기화 한 후 나중에 추가.
    this._height = null;
}

Reatangle.prototype = {        //가로 세로를 getter setter로 관리하는 클래스를 정의하라고 나와있으니
    get width() {              //width height를 관리하기 위한 getter(는 리턴하는 것) setter(파라미터를 받아서 넣어줌)를 만듬.
        return this._width;
    },
    set width(param) {
        this._width = param;
    },
    get height() {
        return this._height;
    },
    set height(param) {
        this._height = param;
    },
    getAround: function () {
        return this.width * 2 + this.height * 2;
    },
    getArea: function () {
        return this.width * this.height;
    },
};

const rect = new Reatangle();
rect.width = 10;
rect.height = 5;

console.log("둘레의 길이는 %d이고 넓은 %d입니다.", rect.getAround(), rect.getArea());
 */

class Reatangle {
    constructor() {
        this._width = null;
        this._height = null;
    }

    get width() {
        return this._width;
    }

    set width(param) {
        this._width = param;

    }

    get height() {
        return this._height;
    }

    set height(param) {
        this._height = param;
    }

    getAround() {
        return this.width * 2 + this.height * 2;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rect = new Reatangle();
rect.width = 10;
rect.height = 5;

console.log("둘레의 길이는 %d이고 넓은 %d입니다." , rect.getAround(), rect.getArea());