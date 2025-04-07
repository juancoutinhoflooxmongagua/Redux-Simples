import React, { useState } from "react";
import Card from "./Card";

export default function Interval() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const media = (min + max) / 2;

    return (
        <Card title="Intervalo de números">
            <div className="interval-container">
                <div className="input-group">
                    <label>Máximo</label>
                    <input
                        type="number"
                        value={max}
                        onChange={e => setMax(Number(e.target.value))}
                    />
                </div>

                <div className="input-group">
                    <label>Mínimo</label>
                    <input
                        type="number"
                        value={min}
                        onChange={e => setMin(Number(e.target.value))}
                    />
                </div>
            </div>

            <div style={{ marginTop: "15px" }}>
                <strong>Média: {media}</strong>
            </div>
        </Card>
    );
}
