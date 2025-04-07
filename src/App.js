import Card from './components/Card';
import './App.css';
import Interval from './components/interval';

function App() {
  return (
    <div className="App">

      <h1>-- Exercicio React-Redux --</h1>

      <Card title="Aviso Importante" color="red">
        <p>Este é um card com tema vermelho.</p>
      </Card>

      <Card title="Dica do Dia" color="green">
        <p>Olá tudo bem</p>
      </Card>

      <Card title="Dica do Dia" color="purple">
        <p>Olá tudo bem</p>
      </Card>

      <Card title="Dica do Dia" color="blue">
        <p>Olá tudo bem</p>
      </Card>

      <Interval></Interval>
    </div>
  );
}

export default App;
