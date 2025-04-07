import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { changeNumberMin, changeNumberMax } from "../store/actions/numbers";

export default function Interval() {
  const min = useSelector(state => state.numbers.min);
  const max = useSelector(state => state.numbers.max);
  const dispatch = useDispatch();

  const setMin = e => dispatch(changeNumberMin(+e.target.value));
  const setMax = e => dispatch(changeNumberMax(+e.target.value));

  const media = (min + max) / 2;

  return (
    <Card title="Intervalo de números">
      <div className="interval-container">
        <div className="input-group">
          <label>Mínimo</label>
          <input type="number" value={min} onChange={setMin} />
        </div>
        <div className="input-group">
          <label>Máximo</label>
          <input type="number" value={max} onChange={setMax} />
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <strong>Média: {media}</strong>
      </div>
    </Card>
  );
}
