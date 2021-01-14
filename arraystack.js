var __operators = {
    '+':    (a, b) => {return a>=0 && b>=0?[a + b]:[-1]},
    '-':    (a, b) => {return b >= a ? [b - a]:[-1]},
    'DUP':  (a) => [a, a],
    'POP':  (a) => [], 
  }
  
 
  
  const calculate = (input) => 
    input.reduce (
      (stack, operator) => operator in __operators ? [
        ...(stack.slice(0, -(__operators[operator].length))), 
        ...__operators[operator](...stack.slice (-__operators[operator].length))
      ] : [...stack, operator], 
      []
    )
    

  const arrayStack = (str) =>{
     const popuedValue = calculate (
      str.split (' ').map (w => isFinite (w) ? Number (w) : w)
    ).pop();
    return popuedValue!= NaN&&popuedValue>=0?popuedValue:-1;
  }
    
    const _arrayStack = arrayStack;
export { _arrayStack as arrayStack };
console.log(arrayStack('12 1 12 -'))

