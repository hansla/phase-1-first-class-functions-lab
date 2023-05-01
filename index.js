// Code your solution in this file!
// return the first two drivers from an array of drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // return the last two drivers from an array of drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // an array of two functions that return the first two drivers and the last two drivers, respectively
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // create a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // create a function that doubles a fare
  const fareDoubler = createFareMultiplier(2);
  
  // create a function that triples a fare
  const fareTripler = createFareMultiplier(3);
  
  // select either the first two drivers or the last two drivers from an array of drivers based on the second argument
  const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
  };
  