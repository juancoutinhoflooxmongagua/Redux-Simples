import React from "react";
import Card from "./Card";

export default function Interval({ min, max }) {
    return (
        <Card title="Intervalo de números">
            <p>Mínimo: <strong>{min}</strong></p>
            <p>Máximo: <strong>{max}</strong></p>
        </Card>
    );
}
