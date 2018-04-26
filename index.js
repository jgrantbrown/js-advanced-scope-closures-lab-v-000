
function produceDrivingRange(blockRange){
  return function(start , finish){
      let distance =   Math.abs(parseInt(start) - parseInt(finish))
      let range = Math.abs(blockRange - distance)

    if (blockRange > distance){
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}


function produceTipCalculator(tipPercent){
  return function(tipamount){
      return tipPercent * tipamount
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId
    }
  }
}
