import HomeScreen from './Components/HomeScreen/HomeScreen';
import PortNavBar from './Components/PortNavBar/PortNavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <PortNavBar></PortNavBar>
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
