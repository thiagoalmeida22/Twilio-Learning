class TargetingSolution{
    constructor(config){
        this.x = config.x
        this.y = config.y
        this.z = config.z
        this.solution = [];
    }

    target (){
        for (var i = 0; i < 3; i++){
            this.solution.push(this[i])
          }
    }
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
  });
  
  console.log(m.target()); // would print "(10, 15, 900)"