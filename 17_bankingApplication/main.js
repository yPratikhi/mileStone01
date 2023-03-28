const customer ={
    name:'Partik',
    balance:1000,
}

const deposit = (customer,amount)=>{
     customer.balance += amount;
     console.log(`Deposit of Rs.${amount} .New balance is Rs.${customer.balance} `);
}

const withdrawal = (customer,amount)=>{
    if(customer.balance<amount){
        console.log(`Withdrawal amount is Rs.${amount} is fail.Insufficient Balance`);
    }else{
        customer.balance -= amount;
        console.log(`Withdrawal of Rs.${amount} is successful.New Balance is Rs. ${customer.balance}`);
    }
}

deposit(customer,500); 
withdrawal(customer,2000);
withdrawal(customer,500);

//output
// Deposit of Rs.500 .New balance is Rs.1500 
// Withdrawal amount is Rs.2000 is fail.Insufficient Balance
// Withdrawal of Rs.500 is successful.New Balance is Rs. 1000