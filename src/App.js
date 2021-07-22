import logo from './logo.svg';
import Message from './Message';
import './App.css';

const message = "Hello, world!";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message message={message} />
      </header>
    </div>
  );
}

export default App;
