
function multiplyBy2(num, callback) {
    const result = num * 2;
    callback(result);
  }
  

  function subtract3(num, callback) {
    const result = num - 3;
    callback(result);
  }
  

  function add10(num, callback) {
    const result = num + 10;
    callback(result);
  }
  

  function performOperations(num) {
    multiplyBy2(num, function(result1) {
      subtract3(result1, function(result2) {
        add10(result2, function(finalResult) {
          console.log("Final result:", finalResult);
        });
      });
    });
  }
  

  performOperations(5);  
  