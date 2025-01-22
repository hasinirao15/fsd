const symbol1 = Symbol('uniqueSymbol');
const symbol2 = Symbol('uniqueSymbol');

const myObject = {
  [symbol1]: 'Value 1',
  [symbol2]: 'Value 2'
};

console.log(myObject[symbol1]); 
console.log(myObject[symbol2]); 
console.log(symbol1 === symbol2); 
