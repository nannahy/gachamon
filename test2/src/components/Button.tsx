import styled from "styled-components";

const Button = styled.button<{ color: string }>`
  width: 50px;
  height: 50px;
  border: 3px solid black;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${({ color }: { color: string }) => color};
`;

export default Button;
