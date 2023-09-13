
function distanceFromHqInBlocks(someValue){
    const hqStreet = 42
    if (someValue > hqStreet){
        let blocksDown = someValue - hqStreet
        return (blocksDown); 
    } else {
        let blocksUp = hqStreet - someValue
        return (blocksUp);

    }
}


function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    let feet = blocks * feetPerBlock;
   return(feet);

    //returns the number of blocks given a value
  }


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blocksInBetween = start - destination;
    const positiveInt = Math.abs(blocksInBetween);
    const feetTraveled = positiveInt * 264;
    return(feetTraveled);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const centsPerFoot = 0.02;
    const feetTraveled = distanceTravelledInFeet(start, destination);
    let cost = 0;
    if (feetTraveled > 2500){
        return('cannot travel that far');
    }
    else if (feetTraveled > 2000 && feetTraveled < 2500){
        
        return(25);
    }else if (feetTraveled <= 400){
        cost = 0;
        return (cost);
    }
    else if (feetTraveled > 400){
        const discount = feetTraveled - 400;
        cost = discount * centsPerFoot;
        return(cost);

    }
    

  }