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
