import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Media() {
    const min = useSelector(state => state.numbers.min);
    const max = useSelector(state => state.numbers.max);
    const media = (min + max) / 2;

    return (
        <Card title="Média dos Números">
            <div style={{ fontSize: "24px", textAlign: "center" }}>
                Média entre {min} e {max} é <strong>{media}</strong>
            </div>
        </Card>
    );
}
