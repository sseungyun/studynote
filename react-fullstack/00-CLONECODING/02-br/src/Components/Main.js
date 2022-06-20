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
