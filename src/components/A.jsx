import React from "react";
import Card from "./Card";
export default function A(props) {
    return (
        <Card title="Intervalo de números">
            <div className="interval-container">
                <div className="input-group">
                    <label>Máximo</label>
                    <input type="number" value={1} />
                </div>

                <div className="input-group">
                    <label>Mínimo</label>
                    <input type="number" value={10} />
                </div>
            </div>
        </Card>
    );
}
