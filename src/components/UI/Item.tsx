import React from "react";
import styled from "styled-components";

import Coin from "./Coin";
import Button from "./Button";

const Container = styled.div`
  width: 200px;
`;

const Value = styled.div`
  padding: 8px 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.main};
  background: ${props => props.theme.colors.dark};
  border: 2px dashed ${props => props.theme.colors.secondary};
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
  width: 200px;
`;

interface Props {
  label?: string;
  title?: string | number;
  price?: number;
  onBuy: Function;
}

const Item: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Value>
        {props.title}
        {props.price && (
          <p>
            <Coin /> {props.price}
          </p>
        )}
        <Button onClick={props.onBuy}>Comprar</Button>
      </Value>
    </Container>
  );
};

export default Item;
