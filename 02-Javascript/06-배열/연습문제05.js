// 배열이 두개 이상이나오면 인덱스 값이 거의 같음. **중요**

// 총 몇개인지 갯수를 세는거니 count를 사용.

// 단가 배열
const price = [38000, 20000, 17900, 17900];

// 주문 수량 배열
const qty = [6, 4, 3, 5];

// 단가*수량 중에서 가장 큰 값을 구해야 하므로 처음에 저장하는 값도 단가*수량으로 설정
let money = price[0] * qty[0];

// 단가 * 수량에 대한 최대값 구하기 
// --> 인덱스가 동일한 요소들끼리의 계산이므로 
//     인덱스 번호를 알 수 없는 for~of 문은 사용할 수 없다.
for (let i=1; i<price.length; i++) {
    // i번째에 대한 총금액을 구한다.
    const sum = price[i] * qty[i];

    if(money < sum ) {
        money = sum;
    
    }
}

console.log("가장 높은 상품금액: " + money + "원");