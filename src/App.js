import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Welcome from './components/Welcomeuser';
import Data from './components/Data';
import Edit from './components/Editprof';

function App() {
  return (
    <div className="App">
      
      <Clock />
      <Edit />
      <Data />

    </div>
  );
}

export default App;
