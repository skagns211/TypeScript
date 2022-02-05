import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const StyledBoard = styled.div`
  width: 400px;
  height: 400px;
  border: 5px solid blue;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

interface myProps {
  numbers: number[];
  handleClick: (num: number) => void;
}

function Board({ numbers, handleClick }: myProps) {
  return (
    <StyledBoard>
      {numbers.map((el: number, idx: number) => {
        return <Box numbers={el} key={idx} handleClick={handleClick} />;
      })}
    </StyledBoard>
  );
}

export default Board;
