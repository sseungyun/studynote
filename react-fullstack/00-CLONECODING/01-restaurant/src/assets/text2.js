import React from "react";
import Img1 from "../img/tablesetting.jpg";
import styled from "styled-components";

const Main = styled.div`
  width: 1080px;
  max-width: 100%;
  margin: auto;
  
  img {
    display: block;
    margin: auto;
    width: 45%;
    max-width: 80%;
    min-width: 30%;
    border-radius: 4px;
    float: right;
    margin-left: 40px;
    opacity: 0.8;
  }

  ul {
      list-style: none;
  }

  h2 {
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    line-height: 300%;
    letter-spacing: 5px;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 21px;
    font-weight: 500;
    letter-spacing: 4px;
    padding-bottom: 3px;
  }

 
  p {
    font-size: 12px;
    line-height: 25px;
    padding-bottom: 30px;
    color: #5f5f5f;
  }
  &:after {
    float: none;
    clear: both;
    content: "";
    display: block;
  }
`;

const text2 = () => {
  return (
    <Main>
      <img src={Img1} alt="tablesetting" />
      <h2>Our Main</h2>
      <ul>
        <li>
          <h3>Bread Basket</h3>
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
        </li>
        <li>
          <h3>Honey Almond Granola with Fruits</h3>
          <p>
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
        </li>
        <li>
          <h3>Belgian Waffle</h3>
          <p>Vanilla flavored batter with malted flour 7.50</p>
        </li>
        <li>
          <h3>Scrambled eggs</h3>
          <p>
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
        </li>
        <li>
          <h3>Blueberry Pancakes</h3>
          <p>With syrup, butter and lots of berries 8.50</p>
        </li>
      </ul>
    </Main>
  );
};

export default text2;
