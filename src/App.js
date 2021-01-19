import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import {getRandomIntInclusive,addFloor,isGoingUp,checkFloorStatus} from "./helper/utilityFunctions"

function App() {
  // initialize a random floow between 1 and 10
  const [currentFloor,setCurrentFloor] = useState(1)
  const [floorsToGo,setFloorsToGo] = useState([])
  const [closeDoor,setCloseDoor] = useState(false)
  const [goingUp,setGoingUp] = useState(true)

  const floors = Array(10).fill(null).map((_, i) => i+1);
  const selectFloor = (e)=>{
    let selectedFloor = Number(e.target.value)
    addFloor(floorsToGo,selectedFloor,setFloorsToGo)
    console.log(floorsToGo)
  }

  useEffect(() => {
    //check what floor it is on and the corresponding status
    let floorStatus = checkFloorStatus(currentFloor,floorsToGo)
    switch (floorStatus) {
      case 'arrived':
        console.log(`arrived at ${currentFloor}`);
        setFloorsToGo(floorsToGo.slice(1))
        break;
      case 'stop':
        console.log('no more floors to go');
        setCloseDoor(false)
        break;
    }

    //set time interval for elevator to move
    let interval;
    if (closeDoor && floorsToGo.length != 0 ){
      isGoingUp(currentFloor,floorsToGo)? setGoingUp(true) : setGoingUp(false)
      interval = setInterval(() => {
        setCurrentFloor(goingUp? currentFloor+1 : currentFloor-1)
      }, 1000);
    }
    else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [closeDoor,currentFloor,goingUp]);


  return (
    <div className="App">
      <h2>current floor: {currentFloor}</h2>
      <h2>floors to go: {floorsToGo}</h2>
      <h2>Select a floor to go:</h2>
      {floors.map((floor)=>(
        <button key = {floor} onClick={selectFloor} value ={floor}>{floor}</button>
      ))}
      <button onClick={(e)=>{setCloseDoor(true)}}>close elevator door</button>
    </div>
  );
}

export default App;
