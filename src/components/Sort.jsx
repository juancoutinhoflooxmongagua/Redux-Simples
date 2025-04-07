import React, { useState } from "react";
import Card from "./Card";

export default function Sort({ min, max }) {
    const [resultado, setResultado] = useState(null);

    const sortear = () => {
        const valor = Math.floor(Math.random() * (max - min + 1)) + min;
        setResultado(valor);
    };

    return (
        <Card title="Sorteio de Número">
            <p>Mínimo: {min}</p>
            <p>Máximo: {max}</p>
            <button onClick={sortear}>Sortear</button>
            {resultado !== null && <p>🎉 Sorteado: <strong>{resultado}</strong></p>}
        </Card>
    );
}
