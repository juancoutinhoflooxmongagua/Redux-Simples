import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Interval from './components/Interval.jsx';
import Media from './components/Media';
import Sort from './components/Sort';

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1>-- Exercicio React-Redux --</h1>

      <Card title="Configurar Intervalo">
        <div className="interval-container">
          <div className="input-group">
            <label>Mínimo</label>
            <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} />
          </div>
          <div className="input-group">
            <label>Máximo</label>
            <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
          </div>
        </div>
      </Card>

      <Media min={min} max={max} />
      <Sort min={min} max={max} />
      <Interval min={min} max={max} />
    </div>
  );
}

export default App;
