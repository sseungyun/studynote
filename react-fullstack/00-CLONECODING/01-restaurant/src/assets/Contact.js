import React from "react";
import styled from "styled-components";

const Contactcontainer = styled.div`
  display: block;
  width: 1080px;
  height: auto;
  margin: auto;
  padding-left: 10px;
  h2 {
    font-size: 35px;
    font-weight: 400;
    line-height: 300%;
    letter-spacing: 5px;
    padding-bottom: 10px;
  }

  fieldset {
      border: none;
      
  }
  p {
    font-size: 13px;
    line-height: 25px;
    font-weight: 400;
    padding-bottom: 20px;
    &:nth-child(3) {
      font-size: 15px;
      color: #667c89;
      font-weight: bolder;
    }
  }
  input {
    display: block;
    width: 100%;
    border: none;
    line-height: 60px;
    border-bottom: 1px solid #505050;
  }
  a {
    color: black;
    text-decoration: none;
    line-height: 100px;
    font-size: 0.9em;
    background-color: #eee;
    padding: 10px;
    &:hover {
      background-color: #8d8d8d;
    }
  }
`;

const Contact = () => {
  return (
    <Contactcontainer>
      <h2>Contact</h2>
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
      <p>
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <fieldset>
        <input type="text" placeholder="Name" id="name" />
        <input type="number" placeholder="How many people" />
        <input type="datetime-local" value="2020-11-16T20:00" />
        <input type="text" placeholder="Message \ Special requirements" />
      </fieldset>
      <a href="#name">SEND MESSAGE</a>
    </Contactcontainer>
  );
};

export default Contact;
