function mergeUserData(userDetails, userAddress, userPreferences) {
    return { ...userDetails, ...userAddress, ...userPreferences };
  }
  
  const userDetails = { name: 'CVR', age: 25 };
  const userAddress = { address: 'Mangalpally', city: 'Hyderabad' };
  const userPreferences = { theme: 'Engineering Edu', language: 'EN' };
  
  const mergedData = mergeUserData(userDetails, userAddress, userPreferences);
  console.log(mergedData);
  