import React from 'react'
import styled from 'styled-components';
import Img from'../img/hamburger.jpg';
const MainContainer = styled.header`
  position: relative;
  width: 1600px;
  margin: auto;
  img {
    display: block;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: -1;
  }

  h1 {
    display: block;
    font-size: 38px;
    color: gray;
    font-weight: 200;
    position: absolute;
    bottom: 0;
    left: 30px;
    letter-spacing: 4px;
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
    <div>
      <MainContainer>
        <img src={Img} alt="Le Catering" />
        <h1>Le Catering</h1>
      </MainContainer>
    </div>
  )
}

export default Main