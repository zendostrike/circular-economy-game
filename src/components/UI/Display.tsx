import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const Value = styled.div`
  padding: 8px 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.main};
  border: 2px solid ${props => props.theme.colors.dark};
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  width: 200px;
`;

interface Props {
  label?: string;
  value?: string | number;
}

const Display: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Container>
  );
};

export default Display;
