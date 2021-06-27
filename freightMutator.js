function mutate (inputArray) {
	var outputArray = inputArray.map(function(currentValue) {
	return currentValue.toUpperCase();
	});
return outputArray;
}
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']
