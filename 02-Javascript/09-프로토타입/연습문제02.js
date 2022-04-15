/**
## 문제2.

가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

클래스는 JSON 형식으로 작성되어야 합니다.


#### 출력결과

가로가 10이고 세로가 5인 경우

```
둘레의 길이는 30이고 넓이는 50입니다.
```
 */

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
        return this.width * 2 + this.height * 2;              // this. 언더바가 없는건 getter를 통해 값을 받아오는 것.
    },
    getArea: function () {
        return this.width * this.height;
    },
};

const rect = new Reatangle();            // 객체를 만든 후 생성자 파라미터가 없으니 
rect.width = 10;                         // setter 로 값을 넣어 줌.
rect.height = 5;

console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", rect.getAround(), rect.getArea());