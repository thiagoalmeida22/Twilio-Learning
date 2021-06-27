function calculateMass (cargoArray){
 // This is a placeholder for the total length in characters of all strings
  // in the freightItems array
  let totalMass = 0;

  totalMass = cargoArray.reduce((sum, current) => sum + current.length, 0);

  return totalMass;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12