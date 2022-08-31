import './App.css';
import Greeting from './components/Greeting/Greeting';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <Greeting 
        username="Success"
        moment="morning"
        age={50}
      />
      <Parent />
    </div>
  );
}

export default App;
