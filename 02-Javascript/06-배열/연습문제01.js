const check_list = [true, false, false, true, false];
console.log("before -- > " + check_list);

// true 를 false로 , false를 true로 저장하기
// Boolean 값을 반전하기 위해서는 NOT연산자 "!" 를 사용해야 한다.
// ex) !true -- > fasle , !fasle -- > true

for (let i = 0; i<check_list.length; i++) {
    check_list[i] = !check_list[i];
}

console.log("after --> " + check_list);