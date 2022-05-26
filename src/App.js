import './App.css';
import { Clock } from './components/clock';
import Logo from './kolt_hasselager_logo.gif';

function App() {
  return (
    <div className="App">
        <div className="App-clock">
            <Clock
                width={'500px'}    
                height={'500px'}    
                clockBackgroundImage={Logo} />   

        </div>
    </div>
  );
}

export default App;
