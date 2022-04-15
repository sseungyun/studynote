
/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 유효성 검사 및 경고창 실행.
*/
function Validation(){
    const text = /^[a-zA-Z0-9]{4,12}$/; 

/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 이메일 유효성 검사
*/

    const email_test = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    
/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 이름 검사 및 경고창 실행.
*/
 
    const name_test = /^[가-힣]{2,15}$/; 

/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 아이디, 비밀번호, 비밀번호 확인, 이름, 메일 입력
*/
    const Id = document.getElementById("id"); 
    const Pwd = document.getElementById("pwd"); 
    const Pwd2 = document.getElementById("pwd2");
    const Name = document.getElementById("name"); 
    const Email = document.getElementById("mail");
        

/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 아이디 유효성 검사
*/
    if(Id.value==''){            // ID입력했는지 확인!
        alert("ID를 입력해주세요.");
        return false;
    }
    if(!text.test(Id.value)){    // 아이디 유효성검사 후 한글 및, 특수문자면 출력
        alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");        
        return false;
    }
    
/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 패스워드 유효성 검사
*/
    if(Pwd.value==''){           // 비밀번호 입력했는지 확인!
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    if(!text.test(Pwd.value)){   //패스워드 유효성 검사에 적합하지 않으면 문장 출력
        alert("비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        return false;
    }

    /*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 패스워드 재검사 유효성 검사
*/
    if(Pwd.value==Id.value){  //패스워드와 ID가 동일하면 return 
        alert("비밀번호는 ID와 동일하면 안됩니다.");
        return false;
    }
    
    if(Pwd2.value!=Pwd.value){ //비밀번호와 비밀번호 재 입력한것이 동일한지 검사
        alert("비밀번호가 다릅니다. 다시 입력해주세요.");
        return false;
    }
    

/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : 이름 유효성 검사
*/   
    if(Name.value ==''){         // 이름이 ''(빈칸 의미) 입력되어 있지 않다면 메세지 출력 
        alert("이름을 입력해주세요.");
        return false;
    }
    if(!name_test.test(Name.value)){   //한글이외에 다른 문자가 입력되면 메세지 출력
        alert("특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력하여주세요.");
        return false;
    }

/*
* @filename    : naver.js
* @author      : 신승윤 (gsh05144@naver.com)
* @description : email 유효성 검사
*/
    if(email_test.value == ''){         // 이메일이 ''(빈칸 의미) 입력되어 있지 않다면 메세지 출력 
        alert("이메일을 입력해주세요.");
        return name_test;
    }
    
    if(!email_test.test(Email.value)){ //이메일 유효성 검사
        alert("올바른 이메일 형식이 아닙니다.");
        return name_test;
    }
    
   
 
}