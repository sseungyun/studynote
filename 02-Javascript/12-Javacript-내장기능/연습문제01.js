email = "혼05144@naver.com";

p = email.indexOf("@");
id = email.substring(0, p);
damain = email.substring(p+1);

console.log(id);
console.log(domain);