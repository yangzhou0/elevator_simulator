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
    addFloor(currentFloor,floorsToGo,selectedFloor,setFloorsToGo)
    console.log(floorsToGo)
  }

  useEffect(() => {


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

    //check what floor it is on and the corresponding status
    let floorStatus = checkFloorStatus(currentFloor,floorsToGo)
    switch (floorStatus) {
      case 'arrived':
        setFloorsToGo(floorsToGo.slice(1))
        setCloseDoor(false)
        let userInput = prompt(`You have arrived at floor ${currentFloor} would you like to go out? y/n`)
        alert('door closing in 3 seconds')
        setTimeout(() => {
          setCloseDoor(true)
        }, 3000);
        break;
      case 'stop':
        setCloseDoor(false)
        return
    }
    return () => clearInterval(interval);
  }, [floorsToGo,closeDoor,currentFloor,goingUp]);


  return (
    <div className="App">
      <h2>current floor: {currentFloor}</h2>
      <h2>floors to go: {floorsToGo}</h2>
      <div>
        <span>Select a floor to go: </span>
        {floors.map((floor)=>(
          <button key = {floor} onClick={selectFloor} value ={floor}>{floor}</button>
        ))}
      </div>
      <br></br>
      <button onClick={(e)=>{setCloseDoor(true)}}>close elevator door</button>
    </div>
  );
}

export default App;
