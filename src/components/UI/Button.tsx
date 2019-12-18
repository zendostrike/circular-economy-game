import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.main};
  border: 0;
  box-shadow: 2px 2px #888888;
  :active {
    box-shadow: -2px -2px #888888;
  }
`;

const Button = (props: any) => {
  return <StyledButton {...props} />;
};

export default Button;
