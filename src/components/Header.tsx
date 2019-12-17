import React, { useContext } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ResourceStoreContext } from "../store";

import Display from "./UI/Display";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  aling-items: center;
  padding: 60px;
  background: ${props => props.theme.colors.secondary};

  div {
    margin: 5px; /* and that, will result in a 10px gap */
  }
`;

const Header: React.FC = observer(() => {
  const resourceStore = useContext(ResourceStoreContext);

  return (
    <Container>
      <Display label="Vida" value={resourceStore.life} />
      <Display label="Planeta" value={resourceStore.planet} />
      <Display label="Metal" value={resourceStore.metal} />
      <Display label="Madera" value={resourceStore.wood} />
    </Container>
  );
});

export default Header;
