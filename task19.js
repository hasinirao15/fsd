function* infiniteIterator(steps) {
    let current = 1;
    while (steps-- > 0) {
      yield current++;
    }
  }
  
  for (const value of infiniteIterator(5)) {
    console.log(value);  
  }
  