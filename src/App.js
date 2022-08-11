import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo !
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button>Click me</button>
}
export default App;
