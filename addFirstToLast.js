function addFirstToLast(inputArray){
	var firstAndLast = '';

	if (inputArray.length > 0) {
	firstAndLast = inputArray[0] +inputArray[inputArray.length-1];
	}

	return firstAndLast
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));