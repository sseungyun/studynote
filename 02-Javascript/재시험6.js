function count() {
    let num = 0;
  
    for (let i = 1; i <= 10000; i++) {
      const str = i + '';
      for (let j = 0; j < str.length; j++) {
        if (str[j] === '8') 
        { ++num; }
      }
    }
    return num;
  }
  
  console.log("1~10000까지 8이 나오는 횟수는 %d회 입니다." , count());