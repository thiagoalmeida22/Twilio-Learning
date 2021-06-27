var inputFirst = process.argv[2].toLowerCase();
var inputSecond = process.argv[3].toLowerCase();
if (inputFirst < inputSecond ){
	console.log('-1');
} else if(inputFirst > inputSecond){
	console.log('1');
} else{
	console.log('0');
}
