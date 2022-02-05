import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';

const StyledBody = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const arr: any = [];
for (let i = 1; i <= 25; i++) {
  arr.push(i);
}

function Main() {
  const [numbers, setNumbers] = useState(arr);
  const [playingGame, setPlayingGame] = useState(false);
  const [currentNum, setCurrentNum] = useState(1);
  const [timeStamp, setTimeStamp] = useState(0);
  return (
    <StyledBody>
      <Board numbers={numbers}></Board>
    </StyledBody>
  );
}

export default Main;
