import React from "react";
import styled from "styled-components";

const Button = ({ color, onClick }) => {
  return (
    <div onClick={onClick}>
      <ButtonBox color={color} />
    </div>
  );
};

export default Button;

const ButtonBox = styled.div<{ color: string }>`
  width: 200px;
  height: 100px;
  border-radius: 100px;
  color: ${({ color }) => color};
`;
