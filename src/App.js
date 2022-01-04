import './App.css';
import { Clock } from './components/clock';
import Logo from './kolt_hasselager_logo.gif';

function App() {
  return (
    <div className="App">
      <Clock clockBackgroundImage={Logo} />
    </div>
  );
}

export default App;
