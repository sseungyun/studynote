/**
 * @filename: Header.js
 * @description: 웹 페이지 Header
 * @author: 신승윤 (gsh05144@naver.com)
 */

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  color: black;
  position: fixed;
  background-color: white;
  text-align: center;
  z-index: 999;
  box-shadow: 2px 0 5px;

  h1 {
    float: left;
    width: 300px;
    height: 100%;
    line-height: 70px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 3px;
  }

  .menu {
    float: right;
    width: 400px;
    height: 60%;
  }

  a {
    float: left;
    margin: 16px 16px;
    width: 20%;
    display: block;
    text-decoration: none;
    color: black;
    height: 50px;
    line-height: 60px;

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
      <h1>Gourmet au Catering</h1>
      <div className="menu">
        <NavLink to="/">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </HeaderContainer>
  );
}

export default Header;
