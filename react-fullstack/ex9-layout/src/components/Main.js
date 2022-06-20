import React from 'react';
import styled from 'styled-components';

import FakeImg from './FakeImg';

const MainContainer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    border-right: 1px solid #d5d5d5;
`;

const Main = () => {
    return (
        <MainContainer>
            <div class="container">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <FakeImg height='200'>Image</FakeImg>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <br />
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <FakeImg height='200'>Image</FakeImg>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </MainContainer >
    );
};

export default Main;