(async () => {
    let json = null;

    // ajax 요청
    try {
        json = await ajaxPromiseHelper("assets/json/social.json");
    } catch (e) {
        console.error(e);
        alert(e);
        return;
    }
    
    if (json != null) {
        // console.log(json);
        const mouseHoverImg = document.querySelector(".mousehover-img");
        const { social } = json;

        social.forEach((v, i) => {
            // console.log(v);

            const div1 = document.createElement("div");
            div1.classList.add("img-bg", `img${i+1}`);
            // console.log(`${i+1}`);

            const a1  = document.createElement("a");
            a1.setAttribute("href", v.url);
            a1.classList.add("hover-txt");
            a1.innerHTML= v.text;

            div1.appendChild(a1);
            // console.log(div1);
            mouseHoverImg.appendChild(div1);
        });
    }

    window.onload = function() {
        // 마우스 호버 시 인스타 텍스트 나타남 
        document.querySelectorAll(".hover-txt").forEach((v, i) => {
            v.addEventListener("mouseover", e => {
                const target = e.currentTarget;
                // console.log(target);
                target.classList.add("opacity-1");
            });
            v.addEventListener("mouse", e => {
                const target = e.currentTarget;
                // console.log(target);
                target.classList.remove("opacity-1");
            });
        });
        console.log(document.querySelector(".hover-txt"));
    }
})