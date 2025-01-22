
function delayedMessage(message, delay, callback) {
    setTimeout(function() {
      console.log(message);  
      callback();  
    }, delay);
  }
  

  delayedMessage("Hello, this is a delayed message!", 11200, function() {
    console.log("The message has been printed.");
  });
  