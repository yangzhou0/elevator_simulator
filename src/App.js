import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import {getRandomIntInclusive} from "./helper/utilityFunctions"
function App() {
  // initialize a random floow between 1 and 10
  const [currentFloor,setCurrentFloor] = useState(getRandomIntInclusive(1,10))
  return (
    <div className="App">
      <h2>this is floor {currentFloor}</h2>
    </div>
  );
}

export default App;
