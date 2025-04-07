import React, { useState } from "react";
import Card from "./Card";

export default function Sorteio() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10);
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
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(Number(e.target.value))}
                    />
                </div>
                <div className="input-group">
                    <label>Máximo</label>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(Number(e.target.value))}
                    />
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
