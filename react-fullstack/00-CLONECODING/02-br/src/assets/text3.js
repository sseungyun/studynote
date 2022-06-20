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