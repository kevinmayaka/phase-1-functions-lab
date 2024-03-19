function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block = 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // 1 block = 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot for distances between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for a distance between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // Beyond the supported distance
    }
  }
  