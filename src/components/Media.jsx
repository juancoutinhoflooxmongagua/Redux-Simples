import React from "react";
import Card from "./Card";

export default function Interval() {
    const min = 1;
    const max = 10;
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
