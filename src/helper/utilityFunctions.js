function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const addFloor = (currentFloor,floorsToGo,selectedFloor,setFloorsToGo)=>{
  if (currentFloor == selectedFloor){
    alert(`You are already at floor ${currentFloor}`)
  }
  else if (!floorsToGo.includes(selectedFloor)){
    floorsToGo.push(selectedFloor)
    console.log('new floors to go',floorsToGo)
    setFloorsToGo(floorsToGo)
  }
}

const isGoingUp = (currentFloor,floorsToGo)=>{
  if (floorsToGo[0] > currentFloor){
    return true
  }else if (floorsToGo[0] < currentFloor){
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