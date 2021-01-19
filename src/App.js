import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import {getRandomIntInclusive} from "./helper/utilityFunctions"
function App() {
  // initialize a random floow between 1 and 10
  const [currentFloor,setCurrentFloor] = useState(getRandomIntInclusive(1,10))
  const [floorsToGo,setFloorsToGo] = useState([])
  const floors = Array(10).fill(null).map((_, i) => i+1);
  const selectFloor = (e)=>{
    floorsToGo.push(e.target.value)
    console.log(floorsToGo)
    setFloorsToGo(floorsToGo)
  }
  return (
    <div className="App">
      <h2>current floor: {currentFloor}</h2>
      <h2>floors to go: {floorsToGo}</h2>
      <h2>Select a floor to go:</h2>
      {floors.map((floor)=>(
        <button onClick={selectFloor} value ={floor}>{floor}</button>
      ))}
    </div>
  );
}

export default App;
