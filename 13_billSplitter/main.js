function caculateBill(costPerDish,numPeople){
    const totalbill = costPerDish*numPeople;
    const billPerPerson = totalbill/numPeople;

    const bill = {
      totalbill:totalbill,
      billPerPerson:billPerPerson
    };
    return bill;
}

const costPerDish = 200;
const numPeople = 4;
const bill = caculateBill(costPerDish,numPeople);
console.log(`The total bill is Rs.${bill.totalbill}.Each Person Should Pay Rs.${bill.billPerPerson}`);