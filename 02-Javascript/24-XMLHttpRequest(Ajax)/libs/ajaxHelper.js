/**
 * Ajax요청을 처리하고 결과 (JSON)을 콜백함수에게 전달한다.
 * ex) ajaxHelper("backend/simple.json", "GET", json => {...});
 * @param {string} url
 * @param {string} method
 * @param {function} success
 */

function ajaxHelper(url, method, success) {  // 3번째 파라미터로 받는 이 콜백함수가 ajax에 수신결과인 json을 파라미터로 받는다.
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
        const ajax = e.target;  // ajax객체 받아서
                    //현재 상태가      4단계라면
        if (ajax.readyState ==  XMLHttpRequest.DONE) {           
            if(ajax.status == 200) { // 처리 결과가 성공일때는
                if(success != undefined) {
                    const json = JSON.parse(ajax.responseText); // 객체를 json으로 변환 후             
                    success(json); //세번째의 파라미터로 받는 콜백함수가 ajax의 수신 결과인 json을 파라미터로 받는다!!!!!!!!!!!!  
                                   // 호출방법 =  ajaxHelper("backend/hello.json", "GET", json (콜백으로 success(json)결과값만 여기로 들어옴.) => {

                }                                                           // })
            } else {
                const s = parseInt(ajax.status / 100);
                if (s == 4) {
                    alert('[' + ajax.status + ']' + ajax.statusText + ' - 요청 주소가 잘못되었습니다.');
                } else if (s == 5) {
                    alert('[' + ajax.status + ']' + ajax.statusText + ' - 서버의 응답이 없습니다. ');
                } else {
                    alert('[' + ajax.status + ']' + ajax.statusText + ' - 요청에 실패했습니다. ');
                }
            }
        } // end if
    };
    xhr.open(method, url);
    xhr.send();
}

