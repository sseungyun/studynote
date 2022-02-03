// 단가 정보
const price = [38000, 20000, 17900, 17900];
// 수량 정보
const qty = [6, 4, 3, 5];
// 총 합계 금액
let money = 0;

for (let i=0; i<price.length; i++) {
    // 단가 * 수량의 합을 구한다.
    money += price[i] * qty[i];
}

console.log("전체 결재 금액: " + money + "원");