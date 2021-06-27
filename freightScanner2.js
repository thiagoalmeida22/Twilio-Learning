function scan(inputArray){
	var contrabandIndexes = [];
	inputArray.forEach(function(item, index, array) {
		if(item === 'contraband'){
			contrabandIndexes.push(+index) //  or maybe this: contrabandIndexes.push(inputArray.indexOf('contraband'))
		}
	});
	return contrabandIndexes
}
// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]