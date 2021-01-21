function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const addFloor = (currentFloor,floorsToGo,selectedFloor,setFloorsToGo,deselect)=>{
  if (deselect){
    let deselectFloor = selectedFloor
    setFloorsToGo(floorsToGo.filter(ele=>ele!=deselectFloor))
  }
  else{
    if (currentFloor == selectedFloor){
      alert(`You are already at floor ${currentFloor}`)
    }
    else if (!floorsToGo.includes(selectedFloor)){
      setFloorsToGo(floorsToGo.concat([selectedFloor]))
    }
  }
}

const isGoingUp = (currentFloor,floorsToGo)=>{

  // eleator will constantly calculate which floor is the closest and go to that floor
  let closestFloor = floorsToGo.reduce((accu,curr,i,arr)=>{
    if (Math.abs(arr[i]-currentFloor) < Math.abs(arr[accu]-currentFloor)){
      return i
    }
    else{
      return accu
    }
  },0) // return the index of the floor in floorsToGo array
  closestFloor = floorsToGo[closestFloor] // get the closest floor number

  if (closestFloor > currentFloor){
    return true
  }else if (closestFloor < currentFloor){
    return false
  }
}

const checkFloorStatus = (currentFloor,floorsToGo,setFloorsToGo)=>{
  if (floorsToGo.includes(currentFloor)){
    setFloorsToGo(floorsToGo.filter(ele=>ele!=currentFloor))
    return 'arrived'
  }
  else if (floorsToGo.length == 0){
    return 'stop'
  }
}

export {
  getRandomIntInclusive,
  addFloor,
  isGoingUp,
  checkFloorStatus
}