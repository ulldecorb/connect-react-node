import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We can connect react to server...</p>
  
        <a
          className="App-link"
          href="https://es.acervolima.com/como-conectar-nodejs-con-reactjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to tutorial
        </a>
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
