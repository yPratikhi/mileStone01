function calculateRentalCost(days, carType) {
    let costPerDay;
  
    switch (carType) {
      case "economy":
        costPerDay = 4000;
        break;
      case "midsize":
        costPerDay = 10000;
        break;
      case "luxury":
        costPerDay = 20000;
        break;
      default:
        throw new Error("Invalid car type.");
    }
  
    const rentalCost = costPerDay * days;
    return rentalCost;
  }
  
  // Example usage:
  const days = 5;
  const carType = "midsize";
  const rentalCost = calculateRentalCost(days, carType);
  console.log(`The rental cost for a ${carType} car for ${days} days is Rs.${rentalCost}.`);
 
 

  