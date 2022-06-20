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
