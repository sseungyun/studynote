/** ```javascript
covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]
```


#### 출력결과

```
누적 확진자 수: 3346
평균 확진자 수: 418.25
```


### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과

```
확진자가 가장 많이 나타난 날: 0127
```
*/

covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]

let max_active = covid19[0].active;
let max_date = covid19[0].date;

for (const j of covid19) {
    if(max_active < j.active) {
        max_active = j.active;
        max_date = j.date;
    }
}

console.log("확진자가 가장 많이 나타난 날: %s", max_date);