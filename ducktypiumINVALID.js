class Ducktypium {
    constructor (crystalColor){
        this.calibrationSequence = [];
        if (crystalColor ==='red'||'blue'||'yellow'){
            this.color = crystalColor;
        } else {
            throw new SyntaxError("Invalid color, should be red or blue or yellow");
        }
    }
    refract (colorArgument){
        let color2 = colorArgument;
        // Receives the secondary color argument, which will refract with the primary
        if (colorArgument === 'red'||'blue'||'yellow'){
        } else {
            throw new SyntaxError("Invalid color, should be red or blue or yellow");
        }

        // Refracts the primary and secondary color together
        if (this.color == color2){
            return this.color;
        } else if (this.color === 'red' && color2 === 'blue' || this.color === 'blue' && color2 === 'red'){
                return 'purple';
            } else if (this.color === 'red' && color2 === 'yellow' || this.color === 'yellow' && color2 === 'red'){
                return 'orange';
            } else if (this.color === 'yellow' && color2 === 'blue' || this.color === 'blue' && color2 === 'yellow'){
                return 'green';
            }
    }
    calibrate (arrayArgument){
        this.calibrationSequence = arrayArgument.map(x => x * 3);
        this.calibrationSequence = this.calibrationSequence.sort((a,b) => a -b)
    }


}

// The following would produce an error
try {
    const badColor = new Ducktypium('pink');
  } catch(e) {
    console.log('Color must be red, yellow, or blue!');
  }
  
  // Create a new instance of the class
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]