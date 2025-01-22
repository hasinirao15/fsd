class ResettableIterable {
    constructor(arr) {
      this.arr = arr;
      this.index = 0;
    }
  
    [Symbol.iterator]() {
      this.index = 0;
      return this;
    }
  
    next() {
      return this.index < this.arr.length
        ? { value: this.arr[this.index++], done: false }
        : { done: true };
    }
  
    reset() {
      this.index = 0;
    }
  }
  
  const numbers = new ResettableIterable([1, 2, 3, 4, 5]);
  
  for (const num of numbers) console.log(num);  
  
  numbers.reset();
  for (const num of numbers) console.log(num);  
  