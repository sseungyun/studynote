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