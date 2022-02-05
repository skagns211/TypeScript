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
  numbers: number;
}

function Board({ numbers }: myProps) {
  return (
    <StyledBoard>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </StyledBoard>
  );
}

export default Board;
