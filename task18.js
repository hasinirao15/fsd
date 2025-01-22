const reverseIterable = (arr) => {
    let index = arr.length;
    return {
      [Symbol.iterator]() {
        return {
          next() {
            return index > 0 ? { value: arr[--index], done: false } : { done: true };
          }
        };
      }
    };
  };
  
  const myArray = [10, 20, 30, 40, 50];
  for (const value of reverseIterable(myArray)) {
    console.log(value);
  }
  