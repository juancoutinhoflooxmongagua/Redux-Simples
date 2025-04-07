import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Sorteio() {
  const min = useSelector(state => state.numbers.min);
  const max = useSelector(state => state.numbers.max);
  const [resultado, setResultado] = useState(null);

  function sortear() {
    const valor = Math.floor(Math.random() * (max - min + 1)) + min;
    setResultado(valor);
  }

  return (
    <Card title="Sorteio de Número">
      <div className="interval-container">
        <div className="input-group">
          <label>Mínimo</label>
          <input type="number" value={min} readOnly />
        </div>
        <div className="input-group">
          <label>Máximo</label>
          <input type="number" value={max} readOnly />
        </div>
      </div>

      <button
        onClick={sortear}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Sortear
      </button>

      {resultado !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          🎉 Número sorteado: <strong>{resultado}</strong>
        </div>
      )}
    </Card>
  );
}
