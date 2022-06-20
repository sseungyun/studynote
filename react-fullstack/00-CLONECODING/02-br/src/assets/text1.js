import React from "react";
import styled from "styled-components";
import house5 from "../img/house5.jpg";
import house2 from "../img/house2.jpg";
import house3 from "../img/house3.jpg";
import house4 from "../img/house4.jpg";

const Main = styled.main`
  position: relative;
  width: 1500px;
  height: auto;
  margin: auto;

  h2 {
    margin-top: 40px;
    padding: 20px 0px;
    font-weight: 100;
    border-bottom: 1px dotted black;
  }

  .section {
    width: 100%;
  }

  .sectionList {
    position: relative;
  }
  .list {
    float: left;
    height: 100%;
    padding-right: 10px;
    padding-bottom: 20px;
  }

  img {
    width: 365px;
    height: 250px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .listText1 {
    position: absolute;
    top: -15px;
    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText2 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText3 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText4 {
    position: absolute;
    top: -15px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText5 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText6 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText7 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  .listText8 {
    position: absolute;
    top: 260px;

    p {
      background-color: black;
      color: white;
      padding: 10px;
    }
  }

  &:after {
    content: "";
    display: block;
    float: none;
    clear: both;
  }
`;
function text1() {
  return (
    <Main>
      <h2>Project</h2>
      <div className="section">
        <ul className="sectionList">
          <li className="list">
            <div className="listText1">
              <p>Summer House</p>
            </div>
            <div className="image">
              <img src={house5} alt="house5" />
            </div>
          </li>
          <li className="list">
            <div className="listText2">
              <p>Brick House</p>
            </div>
            <div className="image">
              <img src={house2} alt="house2" />
            </div>
          </li>
          <li className="list">
            <div className="listText3">
              <p>Renovated</p>
            </div>
            <div className="image">
              <img src={house3} alt="house3" />
            </div>
          </li>
          <li className="list">
            <div className="listText4">
              <p>Barn House</p>
            </div>
            <div className="image">
              <img src={house4} alt="house4" />
            </div>
          </li>
          <li className="list">
            <div className="listText5">
              <p>Brick House</p>
            </div>
            <div className="image">
              <img src={house2} alt="house2" />
            </div>
          </li>
          <li className="list">
            <div className="listText6">
              <p>Summer House</p>
            </div>
            <div className="image">
              <img src={house5} alt="house5" />
            </div>
          </li>
          <li className="list">
            <div className="listText7">
              <p>Barn House</p>
            </div>
            <div className="image">
              <img src={house4} alt="house4" />
            </div>
          </li>
          <li className="list">
            <div className="listText8">
              <p>Renovated</p>
            </div>
            <div className="image">
              <img src={house3} alt="house3" />
            </div>
          </li>
        </ul>
      </div>
    </Main>
  );
}

export default text1;
