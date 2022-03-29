// 1 
const ssn = "9203211";
const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gen = parseInt(ssn.substring(7,8));


yy = (gen > 2) ? yy+2000 : yy+1900;

const age = now_year - yy ;
const sex = (gen % 2) ? "여자" : "남자";


console.log("당신은 %d세 %s입니다.", age, sex)






