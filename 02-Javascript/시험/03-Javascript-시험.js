function solution(a){
    let strArr = a.toString().split('');
    let numSum = 0;
    for(let num = 0; num<strArr.length; num++){
      numSum += strArr[num]*1
    }
    return (a % numSum === 0)? true: false;
  }
  
  console.log(solution(10)); 
  console.log(solution(12)); 
  console.log(solution(11)); 
  console.log(solution(13)); 
 