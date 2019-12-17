import React from "react";

import Button from "./components/UI/Button";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Button>Hola</Button>
    </div>
  );
};

export default App;
