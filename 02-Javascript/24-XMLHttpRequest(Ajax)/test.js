      
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : KAKAO REST KEY
        */
        const KAKAO_REST_KEY = "153267bbe3b4281f07c1034fa09291f8";

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 책 
        */  
        let source = null;

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 페이지 번호
        */
        let currentPage = 1;

        
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 검색어
        */
        let queryKeyword = null;



        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 마지막 페이지인지 검사
        */
        let isEnd = false;

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 검색폼의 submit 이벤트 - 신규 검색
        */
        document.querySelector("#searchForm").addEventListener("submit", e => {
             e.preventDefault();

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 입력된 검색어를 가져온다.
        */
        const queryField = document.querySelector("#query");
        queryKeyword = queryField.value.trim();
        
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : Selected 값 가져오기
        */
        const sourceField = document.querySelector("#source");
        source = sourceField[sourceField.selectedIndex].value;
        
         
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 검색어가 입력되지 않은 경우에 대한 예외처리
        */
        if (!queryKeyword) {
            alert("검색어를 입력하세요.");
            queryField.focus();
            return;
        }

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 신규 검색
        */
        currentPage = 1;
        get_image_search();
     });

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 스크롤 이벤트 추가 검색
        */
        window.addEventListener("scroll", e => {

            if (isEnd || document.querySelector("#loading").classList.contains("active")) {
            
            return;
        }

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 스크롤바의 Y좌표
        */
        const scrollTop = window.scrollY;

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 웹 브라우저의 창 높이
        */
        const windowHeight = window.screen.availHeight;

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : HTML 문서의 창 높이
        */
        const documentHeight = document.body.scrollHeight;

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 스크롤바의 반동 효과를 고려해서 scrollTop + windowHeight가 실제 화면 크기보다 커 질수도 있다.
        */
        if (scrollTop + windowHeight >= documentHeight) {

         /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 2페이지 이후는 추가 검색!
        */
            currentPage++;
            get_image_search();
            }
        });

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : Ajax요청 후 결과를 화면에 HTML로 출력하는 함수 
        */
        async function get_image_search() {

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 로딩바 만들기 
        */
        const loading = document.querySelector("#loading");

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 로딩바 화면에 표시하기 
        */
        loading.classList.add("active");

        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 검색 결과 표시 영역
        */
        const list = document.querySelector("#list");
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
        */
                if (currentPage == 1) {
                Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
                list.removeChild(v);
            });
        }
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 검색 결과를 저장 할 빈 변수
        */
        let json = null;

        try {
            json = await axios.get(`https://dapi.kakao.com/v3/search/book?target=title${source}`, {
                params: {
                    query: queryKeyword,
                    page: currentPage,
            },
             headers: {
                    Authorization: `KakaoAK ${KAKAO_REST_KEY}`
            }
        });
        /*
        * @filename    : test.js
        * @author      : 신승윤 (gsh05144@naver.com)
        * @description : 응답결과 확인
        */

        console.log(json);

        } catch (e) {
            console.error(err);
            alert("요청을 처리하는데 실패했습니다.");
            return;
        } finally {
            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 로딩바 닫기
            */
            loading.classList.remove("active");
        }
        if (json != null) {
            const { data } = json;

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 다음 페이지 요청 할 수 있는지 판단하기 위한 값
            */
            isEnd = data.meta.is_end;

            data.documents.map((v, i) => {

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : ul 태그 생성
            */
            const list=document.querySelector("#list");

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : ul >li태그 생성
            */
            const li = document.createElement("li");
            list.appendChild(li);

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : a 태그 생성
            */
            const a = document.createElement("a");
            a.setAttribute("href", v.doc_url);
            a.setAttribute("target", "_blank");
            a.setAttribute("title", v.display_sitename);
            li.appendChild(a);

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 이미지 태그 생성
            */
            const img = document.createElement("img");
            if (!v.thumbnail) {
                img.setAttribute("src", "img/noimage.jpg");
            } else {
                img.setAttribute("src",v.thumbnail);
            }
            a.appendChild(img);


             /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : h2 제목 생성
            */
            const h2 = document.createElement("h2");
            h2.innerHTML = v.title,
            a.appendChild(h2);


             /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : p 본문 생성
            */
            const p = document.createElement("p");
            p.innerHTML = v.contents;
            a.appendChild(p);

             /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 저자 출력 태그 생성
            */
            const span1 = document.createElement("span");
            let post = v.authors;
            span1.innerHTML = post;
            span1.classList.add("info");

            a.appendChild(span1);

        

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 출판사 출력 태그 생성
            */
            const span2 = document.createElement("span");

            span2.classList.add("info");
            span2.innerHTML = v.publisher;
            a.appendChild(span2);

            /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 정가 출력 태그 생성
            */
            const span3 = document.createElement("span");
            span3.classList.add("info");
            span3.innerHTML = v.price;
            a.appendChild(span3);


             /*
            * @filename    : test.js
            * @author      : 신승윤 (gsh05144@naver.com)
            * @description : 세일 가격 출력 태그 생성
            */
            const span4 = document.createElement("span");
            span4.classList.add("info");
            span4.innerHTML = v.sale_price;
            a.appendChild(span4);
            });
        }
    }

    