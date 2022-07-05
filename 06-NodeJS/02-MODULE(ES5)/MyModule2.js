/** exports의 하위 속성으로 변수, JSON, 함수 추가하기 */
module.exprots.name = "노드";
module.exprots.property = {id:'nodejs', type:'javascript'};
module.exprots.say = function() {
    console.log("Hello World");
};

/** exports 속성으로 객체 추가 */
module.exprots.home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress:function() {
        console.log(this.postcode+ ' ' + this.address);

    }
};

/**
 {
    name = "노드";
    property = {id:'nodejs', type:'javascript'};
    say = function() {
        console.log("Hello World");
    },
    home: {
        postcode: '12345',
        address: '서울시 강남구 역삼동',
        getAddress:function() {
            console.log(this.postcode+ ' ' + this.address);
        }    
    }
}
 */