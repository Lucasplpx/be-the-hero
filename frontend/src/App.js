import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [qtd, setQtd] = useState(0);
  return (
    <>
      <div className="container">
        <Home data={`Quantidade de chamada ${qtd}`} />
        <h1>Hello OmniStack 11</h1>
        <div className="btn">
          <button onClick={() => setQtd(qtd + 1)}>Adicionar</button>
          <button onClick={() => setQtd(qtd - 1)}>Remover</button>
        </div>
      </div>
    </>
  );
}

export default App;
