// "data-include" 속성을 갖는 모든 요소에 대한탐색
                                                                   //v가 data-include 태그 하나를 의미
Array.from(document.querySelectorAll("*[data-include]")).map(async (v, i) => {    // data-include속성을 갖고 있는 모든 태그 가져옴
    // ex) data-include="inc/header.html"                                         // Array.from으로 배열로 돌리고 map으로 돌렸음. 
    const include = v.dataset.include; // v를 통해 dataset중에 include를 가져온다.  "inc/header.html" 을 읽어온다.
    let html = null; // 

    try {
        // inc/header.html 파일의 소스코드를 가져온다.
        const response = await axios.get(include);    // include를 ajax로 불러온다. 그러면 response에 저장되는 내용은 header.html 소스코드 가져옴
        html = response.data;
    } catch (e) {
        console.error(e);
    }
    
    if(html != null) {
        // v의 안에 넣는 것이 아니라 v 자체를 교체함
        v.outerHTML = html;  // inner html은 안에다 넣는건데 outerHTML은 그 자체를 교체.
    }
});

