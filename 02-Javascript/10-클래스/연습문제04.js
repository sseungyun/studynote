/**
문제 - 2. 다음을 만족하는 클래스 Account를 작성하시오.

1) 다음의 2 개의 필드를 선언
    문자열 owner; (이름)
    숫자형 balance; (금액)
2) 위 모든 필드에 대한 getter와 setter의 구현
3) 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
3) 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
    deposit(amount)
4) 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
    withdraw(long amount)
    인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
 */

class Account {
    /** 생성자 */
    constructor(owner, balance) {
        //문자열 owner; (이름)
        this._owner = owner;
        //숫자형 balance; (금액)
        this._balance = balance;
    }

    get owner() {
        return this._owner;
    }

    set owner(value) {
        this._owner = value;
    }

    get balance() {
        return this._balance;
    }

    get balance(value) {
        this._balance = value;
    }

    /** 인자인 금액을 저축하는 메소드 */
    disposit(amount) {
        this.balance += amount;

    }

    withdraw(amount) {
        // 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
        if (this.balance < amount) {
            console.log("잔액이 부족합니다.");
            return 0;
        }

        this.balance -= amount;
        return amount;
    }
}

const acc = new Account("Hello", 15000);

// Hello의 잔액은 15000원
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// 저축
acc.disposit(5000);
// Hello의 잔액은 20000원
console.log("%s의 잔액은 %d원", acc._owner, acc.balance);

acc.disposit(15000);
// Hello의 잔액은 5000원
console.log("%s의 잔액은 %d원", acc._owner, acc.balance);

acc.disposit(5000);
// Hello의 잔액은 10000원
console.log("%s의 잔액은 %d원", acc._owner, acc.balance);

acc.disposit(15000);
// 잔액이 부족합니다.
// Hello의 잔액은 10000원
console.log("%s의 잔액은 %d원", acc._owner, acc.balance);