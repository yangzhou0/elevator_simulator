function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const addFloor = (floorsToGo,selectedFloor,setFloorsToGo)=>{
  if (!floorsToGo.includes(selectedFloor)){
    floorsToGo.push(selectedFloor)
    console.log('new floors to go',floorsToGo)
    setFloorsToGo(floorsToGo)
  }
}

const isGoingUp = (currentFloor,floorsToGo)=>{
  if (floorsToGo[0] > currentFloor){
    return true
  }
  return false
}

const checkFloorStatus = (currentFloor,floorsToGo)=>{
  if (currentFloor == floorsToGo[0]){
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