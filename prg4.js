
function fetchDataWithCallback(success, callback) {
    
    setTimeout(function() {
      if (success) {
        
        const data = { id: 1, name: 'Sample Data' };
        callback(null, data);  
      } else {
        
        const error = 'Failed to fetch data';
        callback(error, null);  
      }
    }, 2000);  
  }
  
  
  fetchDataWithCallback(true, function(error, data) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Data received:', data);
    }
  });
  
 
  fetchDataWithCallback(false, function(error, data) {
    if (error) {
      console.log('Error:', error);  
    } else {
      console.log('Data received:', data);
    }
  });
  