import React from "react";
import Img2 from "../img/tablesetting2.jpg";
import styled from "styled-components";

const Main = styled.div`
  width: 1080px;
  max-width: 100%;
  margin: auto;
  padding-top: 50px;
  border-bottom: 1px dotted gray;
  

  img {
    display: block;
    margin: auto;
    width: 50%;
    max-width: 80%;
    min-width: 30%;
    border-radius: 4px;
    float: left;
    margin-right: 40px;
    opacity: 0.8;
  }

  h2 {
    font-weight: 200;
    font-size: 35px;
    text-align: center;
    line-height: 100px;
    letter-spacing: 4px;
  }

  .text {
    max-height: 750px;
    text-overflow: ellipsis;
    overflow: hidden;

    .textSub {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 5px;
    }

    p {
      font-size: 16px;
      line-height: 25px;

      &:last-child {
        color: gray;
      }
    }
  }

  &:after {
    float: none;
    clear: both;
    content: "";
    display: block;
    padding-bottom: 200px;
  }
`;

function text1() {
  return (
    <Main>
      <div className="image">
        <img src={Img2} alt="tablesetting" />
      </div>
      <h2>Main Catering</h2>
      <div className="text">
        <p className="textSub">Tradition since 1889</p>
        <p>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use seasonal ingredients.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Main>
  );
}

export default text1;
