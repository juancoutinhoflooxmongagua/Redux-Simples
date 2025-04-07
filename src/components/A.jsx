import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Interval() {
    // Pegando os valores do Redux
    const min = useSelector(state => state.numbers.min);
    const max = useSelector(state => state.numbers.max);
    const media = (min + max) / 2;

    return (
        <Card title="Intervalo de números">
            <div className="interval-container">
                <div className="input-group">
                    <label>Máximo</label>
                    <input type="number" value={max} readOnly />
                </div>

                <div className="input-group">
                    <label>Mínimo</label>
                    <input type="number" value={min} readOnly />
                </div>
            </div>

            <div style={{ marginTop: "15px" }}>
                <strong>Média: {media}</strong>
            </div>
        </Card>
    );
}
