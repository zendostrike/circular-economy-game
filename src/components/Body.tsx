import React, { useContext } from "react";
import styled from "styled-components";
import { ResourceStoreContext } from "../store";

import Display from "./UI/Display";
import Tree from "./UI/Tree";
import Factory from "./UI/Factory";

const Container = styled.div`
  display: flex;
  aling-items: center;
  padding: 60px;
  color: ${props => props.theme.colors.dark};
`;

const Header: React.FC = () => {
  const resourceStore = useContext(ResourceStoreContext);
  return (
    <Container>
      <Display
        label="Misión"
        value="Tu primera misión es construir una casa para poder sobrevivir de los atacantes nocturnos. Empieza a talar árboles."
      />
      <Tree width="4em" height="4em" onClick={() => resourceStore.wood++} />
      <Factory width="4em" height="4em" onClick={() => resourceStore.metal++} />
    </Container>
  );
};

export default Header;
