class TargetingSolution{
    constructor(config){
        this.x = config.x
        this.y = config.y
        this.z = config.z
        this.solution = [];
    }

    target (){
        this.solution = ['(']
            for (var a in this) {
                if(a === 'x' | a === 'y' | a === 'z'){
                    this.solution.push(this[a]);   
                }
                else{
                    break
                }
            }
            this.solution.push(')');
            return this.solution;
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