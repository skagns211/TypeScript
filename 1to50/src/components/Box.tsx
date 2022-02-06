import React from "react";
import styled from "styled-components";

const StyledBox = styled.span`
  border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

interface boxProps {
  numbers: number;
  handleClick: (num: number) => void;
}

function Box({ numbers, handleClick }: boxProps) {
  return (
    <StyledBox onClick={() => handleClick(numbers)}>
      {numbers !== 0 ? numbers : null}
    </StyledBox>
  );
}

export default Box;
