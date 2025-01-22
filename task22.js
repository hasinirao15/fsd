function* combinedSequence(arr) {
    let [a, b] = [0, 1];
    let i = 0;
    while (i < arr.length || true) {
      if (i < arr.length) yield arr[i++];  
      yield a;  
      [a, b] = [b, a + b];  
    }
  }
  const arr = [10, 20, 30, 40, 50];
  const seq = combinedSequence(arr);
  
  console.log(seq.next().value);  
  console.log(seq.next().value);  
  console.log(seq.next().value);  
  console.log(seq.next().value);  
  console.log(seq.next().value); 
  console.log(seq.next().value);  
  console.log(seq.next().value); 
  console.log(seq.next().value);
  console.log(seq.next().value);  
  