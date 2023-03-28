const caculateDiscountPercentage = (originalPrice,discountedPrice)=>{
    const discountedPercentage = ((originalPrice-discountedPrice)/originalPrice)*100;
    return  discountedPercentage.toFixed(2);
}
console.log(caculateDiscountPercentage(100,80));