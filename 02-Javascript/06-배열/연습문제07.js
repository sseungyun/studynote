// 상품가격 배열
const price = [209000, 109000, 119000, 109000, 94000];

console.log('상품 가격 --> ' + price);

// 낮은 가격순으로 정렬 수행
// (공식) 부모 반복문 -> i가 0부터 길이-1 보다 작은 동안
//        자식 반복문 -> j가 i+1부터 길이보다 작은 동안
//        i번째와 j번째의 크기를 비교하여 맞교환 처리 수행
for (let i=0; i < price.length -1; i++) {
    for (let j = 1 + 1; j<price.length; j++) {
        if (price[i] > price[j]) {
            const tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}

console.log("낮은 가격순 --> " + price);