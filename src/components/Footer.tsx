import React, { useContext } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { PlayerStoreContext } from "../store";

import Display from "./UI/Display";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  aling-items: center;
  background: ${props => props.theme.colors.secondary};

  div {
    margin: 5px; /* and that, will result in a 10px gap */
  }
`;

const Footer: React.FC = observer(() => {
  const playerStore = useContext(PlayerStoreContext);

  return (
    <Container>
      <Display
        label="Salud"
        value={playerStore.health > 0 ? playerStore.health : "Estás muerto"}
      />
      <Display label="Dinero" value={playerStore.budget} />
    </Container>
  );
});

export default Footer;
