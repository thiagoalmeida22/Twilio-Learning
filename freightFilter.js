function scanAndFilter (inputArray, inputString) {
	inputArray.filter(function(item, index, array) {
		if (item === inputString){
			inputArray.splice(index, 1);
		}
	});
	return inputArray;
}
