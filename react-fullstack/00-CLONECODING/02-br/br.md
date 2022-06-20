### React 클론코딩 2

## 2022-05-02 

---
구현결과 
![img](1.png)
---

index.js
```js
/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 * 전역 스타일(GlobalStyles)과 전역 SEO 구성(Meta),
 * 라우팅 범위를 설정(BrowserRouter)하고 프로그램을 시작(App)한다.
 * @author: 신승윤 (gsh05144@gmail.com)
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import Meta from "./Meta";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Meta />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```
---
App.js
```js
import React from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Content from './Components/Content'


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Content />
      
    </>
  );
}

export default App;

```
---
GlobalStyles.js
```js
/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 ReactJSX에서 className속성으로 참조해야 한다.
 * @author: 신승윤 (gsh05144@naver.com)
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Noto Sans KR';
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
```
---
Meta.js
```js
/**
 * @filename : Meta.js
 * @description : <head> 태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author : 신승윤 (gsh05144@naver.com)
 */
/** 패키지 참조 */
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
/**
 * SEO 처리 컴포넌트
 * @params props
 * @return {JSX.Element}
 */
const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?
family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
};
/**
* props에 대한 기본값 설정
* @type {{keywords: string, author: string, description: string, title: string,
url: string}}
*/
Meta.defaultProps = {
  title: "W3.CSS Template",
  description: "React.js로 구현한 레이아웃 데모 페이지 입니다.",
  keywords: "React, layout, demo",
  author: "신승윤",
  url: window.location.href,
};
export default Meta;

```
---
assets/Contact.js
```js
import React from "react";
import styled from "styled-components";

const Contactcontainer = styled.div`
  display: block;
  height: auto;
  margin: 0px;
  padding: 0px;

  .Contact {
    margin: 0px 200px;
  }
  h2 {
    border-bottom: 1px solid gray;
    padding-bottom: 12px;
    font-weight: 100;
  }

  p {
    font-size: 16px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 15px;
    color: gray;
  }

  button {
    padding: 6px 17px;
    color: white;
    background-color: black;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: gray;
    }
  }
`;

const Contact = () => {
  return (
    <Contactcontainer>
      <div className="Contact">
        <h2>Contact</h2>
        <p>Lets get in touch and talk about your next project.</p>

        <div class="input">
          <input type="text" value="Name" />
          <input type="Email" value="Email" />
          <input type="text" value="Subject" />
          <input type="text" value="Comment" />
        </div>

        <button>SEND MESSAGE</button>
      </div>
    </Contactcontainer>
  );
};

export default Contact;

```
---
assets/text1.js
```js
import React from "react";
import styled from "styled-components";
import house5 from "../img/house5.jpg";
import house2 from "../img/house2.jpg";
import house3 from "../img/house3.jpg";
import house4 from "../img/house4.jpg";

const Main = styled.main`
  position: relative;
  width: 1500px;
  height: auto;
  margin: auto;

  h2 {
    margin-top: 40px;
    padding: 20px 0px;
    font-weight: 100;
    border-bottom: 1px dotted black;
  }

  .section {
    width: 100%;
  }

  .sectionList {
    position: relative;
  }
  .list {
    float: left;
    height: 100%;
    padding-right: 10px;
    padding-bottom: 20px;
  }

  img {
    width: 365px;
    height: 250px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .listText1 {
    position: absolute;
    top: -15px;
    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText2 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText3 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText4 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText5 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText6 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText7 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText8 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  &:after {
    content: "";
    display: block;
    float: none;
    clear: both;
  }
`;
function text1() {
  return (
    <Main>
      <h2>Project</h2>
      <div className="section">
        <ul className="sectionList">
          <li className="list">
            <div className="listText1">
              <p>Summer House</p>
            </div>
            <div className="image">
              <img src={house5} alt="house5" />
            </div>
          </li>
          <li className="list">
            <div className="listText2">
              <p>Brick House</p>
            </div>
            <div className="image">
              <img src={house2} alt="house2" />
            </div>
          </li>
          <li className="list">
            <div className="listText3">
              <p>Renovated</p>
            </div>
            <div className="image">
              <img src={house3} alt="house3" />
            </div>
          </li>
          <li className="list">
            <div className="listText4">
              <p>Barn House</p>
            </div>
            <div className="image">
              <img src={house4} alt="house4" />
            </div>
          </li>
          <li className="list">
            <div className="listText5">
              <p>Brick House</p>
            </div>
            <div className="image">
              <img src={house2} alt="house2" />
            </div>
          </li>
          <li className="list">
            <div className="listText6">
              <p>Summer House</p>
            </div>
            <div className="image">
              <img src={house5} alt="house5" />
            </div>
          </li>
          <li className="list">
            <div className="listText7">
              <p>Barn House</p>
            </div>
            <div className="image">
              <img src={house4} alt="house4" />
            </div>
          </li>
          <li className="list">
            <div className="listText8">
              <p>Renovated</p>
            </div>
            <div className="image">
              <img src={house3} alt="house3" />
            </div>
          </li>
        </ul>
      </div>
    </Main>
  );
}

export default text1;

```
---
assets/text2.js
```js
import React from "react";
import styled from "styled-components";
import Team1 from "../img/team1.jpg";
import Team2 from "../img/team2.jpg";
import Team3 from "../img/team3.jpg";
import Team4 from "../img/team4.jpg";

const MainContainer = styled.main`

  margin: 0px 200px;
  height: 700px;

  .AboutTitle {
    margin-top: 30px;
    font-weight: 100;
    border-bottom: 1px dotted black;
    padding-bottom: 20px;
  }

  .AboutText {
    font-size: 16px;
    font-weight: 500;
  }

  .listBox {
    float: left;
    width: 344px;
    height: 200px;
    margin-right: 31px;
  }
  ul {
    padding: 0;
  }
  

  img {
    width: 100%; 
    height: 100%;
  }

  li {
    list-style: none;
  }

  .teamName {
    font-size: 24px;
    margin-bottom: 14px;
  }

  .TeamJob {
    color: gray;
  }

  button {
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: gray;
  }
  
  }

  &:after {
    content: "";
    display: block;
    float: none;
    clear: both;
  }

  
`;

function text2() {
  return (
    <MainContainer>
      <h2 className="AboutTitle">About</h2>
      <p className="AboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="TeamList">
        <ul className="clearFix">
          <li className="listBox">
            <div className="img">
              <img src={Team2} alt="team2" />
            </div>
            <p className="teamName">John Doe</p>
            <span className="TeamJob">CEO & Founder</span>
            <p className="TeamDesc">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button type="button">Contact</button>
          </li>
          <li className="listBox">
            <div className="img">
              <img src={Team1} alt="team1" />
            </div>
            <p className="teamName">John Doe</p>
            <span className="TeamJob">Architect</span>
            <p className="TeamDesc">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button type="button">Contact</button>
          </li>
          <li className="listBox">
            <div className="img">
              <img src={Team3} alt="team3" />
            </div>
            <p className="teamName">Mike Ross</p>
            <span className="TeamJob">Architect</span>
            <p className="TeamDesc">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button type="button">Contact</button>
          </li>
          <li className="listBox">
            <div className="img">
              <img src={Team4} alt="team4" />
            </div>
            <p className="teamName">Dan star</p>
            <span className="TeamJob">Architect</span>
            <p className="TeamDesc">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button type="button">Contact</button>
          </li>
        </ul>
      </div>
    </MainContainer>
  );
}

export default text2;

```

---
assets/text3.js
```js
import React from 'react'
import styled from "styled-components";
import Map from "../img/map.jpg";

const MainContainer = styled.main`
  margin: 40px 0px 0px 0px;
  padding: 0px;
  

  .img {
    margin: 0px 200px;
    
    img {
      width: 1530px;
      height: 780px;
    }
  }
`



function text3() {
  return (
    <MainContainer>
    <div className='img'>
      <img src={Map} alt= "map" />
    </div>
    </MainContainer>
  )
}

export default text3
```


Components/Content.js
```js
import React from "react";
import Text1 from '../assets/text1'
import Text2 from '../assets/text2'
import Text3 from '../assets/text3'
import Contact from '../assets/Contact'
import Footer from "./Footer";

function Content() {
    return (
        <div>
            <Text1 />
            <Text2 />
            <Contact />
            <Text3 />
            <Footer />

           
        </div>
    )
}

export default Content
```

---
Components/Footer.js
```js
import React from "react";
import styled from "styled-components";
const Footercontainer = styled.div`
  line-height: 100px;
  margin-top: 10px;
  background-color: black;
  color: white;
  text-align: center;
`;
const Footer = () => {
  return (
    <Footercontainer>
      <address>Powered by w3.css</address>
    </Footercontainer>
  );
};
export default Footer;

```
---
Components/Header.js
```js
import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  color: black;
  position: fixed;
  background-color: white;
  text-align: center;
  z-index: 99999;
  box-shadow: 2px 0 5px;

  p {
    float: left;
    width: 200px;
    height: 100%;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  .menu {
    float: right;
    width: 400px;
    height: 100%;
  }

  a {
    padding: 5px;
    float: left;
    margin: 16px 26px;
    text-decoration: none;
    color: black;
    letter-spacing: 3px;

    &:hover {
      background: gray;
    }
    &:after {
      content: "";
      display: block;
      float: none;
      clear: both;
    }
  }

  
`;

function Header() {
  return (
    <HeaderContainer>
      <p><strong>BR</strong> Architects</p>
      <div className='menu'>
        <NavLink to="/">Project</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
```
---
Components/Main.js
```js
import React from "react";
import styled from "styled-components";
import Img from "../img/architect.jpg";

const MainContainer = styled.header`
  position: relative;
  width: 1500px;
  margin: auto;
  
  img {
    display: block;
    position: relative;
  }

  h1 {
    position: absolute;
    bottom: 50%;
    right: 40%;
    top: 47%;
    font-size: 40px;
    color: white;
    font-weight: 200;
    letter-spacing: 4px;
    

    strong {
      background-color: black;
      padding: 5px 15px;
    }
  }

  &:after {
    content: "";
    display: block;
    float: none;
    clear: both;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <img src={Img} alt="arc" />
      <h1>
        <strong>BR</strong>Architects
      </h1>
    </MainContainer>
  );
};

export default Main;

```



