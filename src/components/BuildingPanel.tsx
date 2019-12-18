import React, { useContext } from "react";
import styled from "styled-components";
import { PlayerStoreContext } from "../store";

import Item from "./UI/Item";

const Container = styled.div`
  display: flex;
  aling-items: center;
  padding: 60px;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.dark};
`;

const items = [
  {
    id: 1,
    name: "Comida",
    price: 10
  },
  {
    id: 2,
    name: "Casa",
    price: 120000
  }
];

const BuildingPanel: React.FC = () => {
  const playerStore = useContext(PlayerStoreContext);
  return (
    <Container>
      {items.map(item => (
        <Item
          key={item.id}
          title={item.name}
          price={item.price}
          onBuy={() => {
            console.log("hola", playerStore.budget);
            if (playerStore.budget >= item.price) {
              playerStore.budget -= item.price;
              playerStore.health += 20;
            }
          }}
        />
      ))}
    </Container>
  );
};

export default BuildingPanel;
