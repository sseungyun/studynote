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
