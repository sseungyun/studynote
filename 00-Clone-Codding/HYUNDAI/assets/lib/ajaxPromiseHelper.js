function ajaxPromiseHelper(url,method="GET") {
    return new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) => {
            const ajax = e.target;

            if(ajax.readyState == XMLHttpRequest.DONE){
                if(ajax.status == 200) {
                    const json = JSON.parse(ajax.responseText);
                    resolve(json);
                }
            } else {
                const s =parseInt(ajax.status/ 100);
                let msg = null;
                if (s == 4) {
                    msg = "요청주소가 잘못되었습니다.";

                } else if (s == 5) {
                    msg = "서버의 응답이 없습니다.";
                } else {
                    msg = "요청에 실패 했습니다."
                }
                reject({state: ajax.status, text: ajax.statusText,msg :msg});
            }
        } // end if
    });
    xhr.open(method,url);
    xhr.send();
}

(async () => {
    let json = null;

    //ajax 요청
    try {
        json = await ajaxPromiseHelper("assets/json/content.json");
    } catch (e) {
        console.errer(e);
        alert(e)
        return;
    }

    if (json != null) {
        // content가 들어갈 위치
        const body = document.querySelector("cols-wraps");

        // 최상위 div 생성
        const div3 = document.createElement("div");
        div3.classList.add("img-section", "main-hero");

        const imgWrapper = document.querySelector(".img-section-wrapper");
        const { content } = json;
    }
})

content.forEach((v, i) => {
    // 이미지의 상위 태그 설정
    const div1 = document.createElement("div");
    div1.classList.add("img-list");

    // 첫번째 이미지
    if (i == 0) {
        const h5 = document.createElement("h5");
        h5.innerHTML = v.category;
        body.appendChild(h5);

        const h2 = document.createElement("h2");
        h2.innerHTML = v.subject;
        body.appendChild(h2);

        const a1 = document.createElement("a");
        a1.setAttribute("href", v.url);

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img1 = document.createElement("img");
        img1.setAttribute("src", "https://HYUNDAI.com" + v.img_pc);

        a1.appendChild(img1);
        imgWrap.appendChild(a1);
        div1.appendChild(imgWrap);
        body.appendChild(div1);
    } else if (i == 1) {
        const imgWrap2 = document.createElement("div");
        imgWrap2.classList.add("img-wrap-2");
        const a2 = document.createElement("a");
        a2.setAttribute("href", v.url);

        imgWrap2.appendChild(a2);

        const div2 = document.createElement("div");
        div2.classList.add("img-title");

        const span1 = document.createElement("span");
        span1.innerHTML = v.category;
        const span2 = document.createElement("span");
        span2.innerHTML = v.subject;

        div2.appendChild(span1);
        div2.appendChild(span2);

        const img2 = document.createAttribute("img");
        img2.setAttribute("src", "https://HYUNDAI.com" + v.img_pc);
        a2.appendChild(div2);
        a2.appendChild(img2);
        imgWrap2.appendChild(a2);
        div1.appendChild(imgWrap2);
        document.querySelector(".img-list").appendChild(div1);
    }

    else {
        const div4 = document.createElement("div");
        const a3 = document.createElement("a");
        a3.setAttribute("href", "https://HYUNDAI.com" + v.href);

        const img3 = document.createElement("img");
        img3.setAttribute("src", "https://HYUNDAI.com" + v.src);
        a3.appendChild(img3);

        const h2 = document.createElement("h2");
        h2.innerHTML = v.category;

        const p = document.createElement("p");
        p.innerHTML = v["track-description"];

        div4.appendChild(a3);
        div4.appendChild(h2);
        div4.appendChild(p);

        div3.appendChild(div4);
        imgWrapper.appendChild(div3);
        

        
    }
});