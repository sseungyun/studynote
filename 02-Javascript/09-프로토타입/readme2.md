# 강의메모


## 생성자에서 파라미터를 받는 이유
```

멤버 변수를 초기화 하기 위함이다.
따라서 파라미터 값들을 멤버 변수로 연결 해줘야 함.

```

```js
ex)
function Student(korm, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
}
```


