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

  const handleClick = (num: number) => {
    //   if (num === currentNum)
    if (num === currentNum) {
      if (num === 50) {
        console.log('Clear!');
      }
      const index = numbers.indexOf(num);
      setNumbers((numbers: number[]) => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
        ...numbers.slice(index + 1),
      ]);
      console.log(numbers);
      setCurrentNum(currentNum + 1);
    }
  };

  const shuffle = (numbers: number[]) => {
    return numbers.sort(() => Math.random() - 0.5);
  };

  const gameStart = () => {
    setNumbers(shuffle(numbers));
    setCurrentNum(1);
    setPlayingGame(true);
  };

  const gameStop = () => {
    setPlayingGame(false);
  };

  return (
    <StyledBody>
      <Board numbers={numbers} handleClick={handleClick}></Board>
    </StyledBody>
  );
}

export default Main;
