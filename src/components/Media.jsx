import React from "react";
import Card from "./Card";

export default function Media({ min, max }) {
    const media = (min + max) / 2;

    return (
        <Card title="Média dos números">
            <p>Mínimo: {min}</p>
            <p>Máximo: {max}</p>
            <strong>Média: {media}</strong>
        </Card>
    );
}
