function scan(inputArray){
	var contrabandArray = inputArray.filter(inputArray => inputArray === 'contraband');
	return contrabandArray.length
	}	

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // should be 2

//function scan(inputArray){
//	var contrabandCount = 0;
//	for (i = 0 ; i < inputArray.length ; i++){
//		if (inputArray[i] === 'contraband'){
//			contrabandCount++;
//		}
//		}
//	return contrabandCount;
//	}	
//
//const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
//console.log('Number of "contraband": ' + numItems); // should be 2